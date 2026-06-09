(function () {
  let terms = [];
  let modal;
  let lastFocusedElement;

  function projectBase() {
    return window.ProjectI18n ? window.ProjectI18n.projectBase() : "./";
  }

  function t(key) {
    return window.ProjectI18n ? window.ProjectI18n.t(key) : key;
  }

  function lang() {
    return window.ProjectI18n ? window.ProjectI18n.getLanguage() : "en";
  }

  function localized(term, keyBase) {
    const suffix = lang() === "zh" ? "Zh" : lang() === "ja" ? "Ja" : "En";
    return term[`${keyBase}${suffix}`] || term[`${keyBase}En`] || "";
  }

  function makeTitle(term) {
    if (lang() === "en") return `${term.fullNameEn} (${term.acronym})`;
    return `${localized(term, "fullName")} (${term.fullNameEn}, ${term.acronym})`;
  }

  function ensureModal() {
    if (modal) return modal;
    modal = document.createElement("section");
    modal.className = "glossary-modal";
    modal.hidden = true;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "glossaryModalTitle");
    modal.innerHTML = `
      <div class="glossary-modal__header">
        <h2 class="glossary-modal__title" id="glossaryModalTitle" data-glossary-title></h2>
        <button class="glossary-modal__close" type="button" data-glossary-close data-i18n-aria-label="glossary.close">×</button>
      </div>
      <p class="glossary-modal__meta" data-glossary-meta></p>
      <p class="glossary-modal__body" data-glossary-definition></p>
      <p class="glossary-modal__relevance" data-glossary-relevance></p>
      <p class="glossary-modal__source" data-glossary-source></p>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  function findTerm(termId) {
    const normalized = String(termId || "").toLowerCase();
    return terms.find((term) => {
      return term.termId.toLowerCase() === normalized || term.acronym.toLowerCase() === normalized;
    });
  }

  function enhanceTerms() {
    document.querySelectorAll("[data-glossary-term]").forEach((element) => {
      const term = findTerm(element.dataset.glossaryTerm);
      element.classList.add("glossary-term");
      if (!element.matches("button")) {
        element.setAttribute("role", "button");
        element.setAttribute("tabindex", "0");
      }
      if (term) {
        element.setAttribute("aria-label", `${t("glossary.openTerm")}: ${makeTitle(term)}`);
        element.setAttribute("title", `${t("glossary.openTerm")}: ${makeTitle(term)}`);
      }
    });
  }

  function openGlossary(termId) {
    const term = findTerm(termId);
    if (!term) return;
    lastFocusedElement = document.activeElement;
    const dialog = ensureModal();
    dialog.querySelector("[data-glossary-title]").textContent = makeTitle(term);
    dialog.querySelector("[data-glossary-meta]").textContent = `${t("glossary.sourceCategory")}: ${term.sourceCategory}`;
    dialog.querySelector("[data-glossary-definition]").textContent = localized(term, "definition");
    dialog.querySelector("[data-glossary-relevance]").textContent = `${t("glossary.planningRelevance")}: ${localized(term, "planningRelevance")}`;
    dialog.querySelector("[data-glossary-source]").textContent = `${t("glossary.sourceNote")}: ${term.sourceNote}`;
    dialog.hidden = false;
    dialog.querySelector("[data-glossary-close]").focus();
    if (window.ProjectI18n) window.ProjectI18n.applyI18n(window.ProjectI18n.getLanguage());
  }

  function closeGlossary() {
    if (!modal) return;
    modal.hidden = true;
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  async function loadTerms() {
    const response = await fetch(`${projectBase()}data/glossary_terms.json`);
    if (!response.ok) throw new Error(`Unable to load glossary_terms.json: ${response.status}`);
    terms = await response.json();
    enhanceTerms();
    return terms;
  }

  function wireEvents() {
    document.addEventListener("click", (event) => {
      const glossaryTerm = event.target.closest("[data-glossary-term]");
      if (glossaryTerm) {
        openGlossary(glossaryTerm.dataset.glossaryTerm);
        return;
      }
      if (event.target.closest("[data-glossary-close]")) closeGlossary();
    });

    document.addEventListener("keydown", (event) => {
      const glossaryTerm = event.target.closest("[data-glossary-term]");
      if (glossaryTerm && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        openGlossary(glossaryTerm.dataset.glossaryTerm);
      }
      if (event.key === "Escape") closeGlossary();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    ensureModal();
    wireEvents();
    loadTerms().catch((error) => console.error(error));
    if (window.ProjectI18n) window.ProjectI18n.onChange(enhanceTerms);
  });

  window.ProjectGlossary = {
    openGlossary,
    closeGlossary,
    getTerms: () => [...terms],
    refresh: enhanceTerms
  };
})();
