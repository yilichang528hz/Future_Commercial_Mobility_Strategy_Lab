(function () {
  function initNavigation() {
    const button = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-primary-nav]");
    if (!button || !nav) return;

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });

    nav.addEventListener("click", (event) => {
      if (!event.target.closest("a")) return;
      button.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  }

  function initDisclosures() {
    document.querySelectorAll("[data-disclosure-target]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = document.getElementById(button.dataset.disclosureTarget);
        if (!target) return;
        const shouldOpen = target.hidden;
        target.hidden = !shouldOpen;
        button.dataset.disclosureOpen = String(shouldOpen);
        const key = shouldOpen ? "control.showLess" : "control.seeMore";
        if (window.ProjectI18n) button.textContent = window.ProjectI18n.t(key);
      });
    });

    if (window.ProjectI18n) {
      window.ProjectI18n.onChange(() => {
        document.querySelectorAll("[data-disclosure-target]").forEach((button) => {
          const isOpen = button.dataset.disclosureOpen === "true";
          button.textContent = window.ProjectI18n.t(isOpen ? "control.showLess" : "control.seeMore");
        });
      });
    }
  }

  function initSmoothAnchorState() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const id = link.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", id);
      });
    });
  }

  function initImageLightbox() {
    let modal;
    let image;
    let caption;
    let closeButton;
    let lastFocusedElement;

    function t(key, fallback) {
      return window.ProjectI18n ? window.ProjectI18n.t(key) : fallback;
    }

    function getCaption(trigger) {
      const source = trigger.querySelector("[data-lightbox-caption-text]") || trigger.closest("figure")?.querySelector("[data-lightbox-caption-text]");
      if (source && source.textContent.trim()) return source.textContent.trim();
      return trigger.dataset.lightboxCaption || trigger.querySelector("img")?.alt || "";
    }

    function closeModal() {
      if (!modal || modal.hidden) return;
      modal.hidden = true;
      image.removeAttribute("src");
      image.alt = "";
      caption.textContent = "";
      document.body.classList.remove("is-image-lightbox-open");
      if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
        lastFocusedElement.focus();
      }
    }

    function ensureModal() {
      if (modal) return modal;
      modal = document.createElement("section");
      modal.className = "image-lightbox";
      modal.hidden = true;
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.setAttribute("aria-label", t("visual.lightboxAria", "Expanded image preview"));
      modal.innerHTML = `
        <div class="image-lightbox__dialog" data-image-lightbox-dialog>
          <button class="image-lightbox__close" type="button" data-image-lightbox-close aria-label="${t("visual.closeImage", "Close image")}">X</button>
          <figure class="image-lightbox__figure">
            <img data-image-lightbox-image alt="" />
            <figcaption class="image-lightbox__caption" data-image-lightbox-caption></figcaption>
          </figure>
        </div>
      `;
      document.body.appendChild(modal);
      image = modal.querySelector("[data-image-lightbox-image]");
      caption = modal.querySelector("[data-image-lightbox-caption]");
      closeButton = modal.querySelector("[data-image-lightbox-close]");

      closeButton.addEventListener("click", closeModal);
      modal.addEventListener("pointerdown", (event) => {
        if (event.target.closest("[data-image-lightbox-dialog]")) return;
        closeModal();
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeModal();
      });
      if (window.ProjectI18n) {
        window.ProjectI18n.onChange(() => {
          modal.setAttribute("aria-label", t("visual.lightboxAria", "Expanded image preview"));
          closeButton.setAttribute("aria-label", t("visual.closeImage", "Close image"));
        });
      }
      return modal;
    }

    function openModal(trigger) {
      const source = trigger.dataset.lightboxSrc;
      if (!source) return;
      const label = getCaption(trigger);
      ensureModal();
      lastFocusedElement = document.activeElement;
      image.src = source;
      image.alt = trigger.dataset.lightboxAlt || trigger.querySelector("img")?.alt || label;
      caption.textContent = label;
      document.body.classList.add("is-image-lightbox-open");
      modal.hidden = false;
      closeButton.focus();
    }

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-lightbox-src]");
      if (!trigger) return;
      event.preventDefault();
      openModal(trigger);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const trigger = event.target.closest("[data-lightbox-src]");
      if (!trigger) return;
      event.preventDefault();
      openModal(trigger);
    });
  }

  function initVisualA11yLabels() {
    let scheduled = false;
    document.body.dataset.visualA11y = "pending";

    function sync() {
      scheduled = false;
      document.querySelectorAll('[role="img"]').forEach((element) => {
        if (element.getAttribute("aria-labelledby")) return;
        const text = (element.textContent || "").replace(/\s+/g, " ").trim();
        if (!text) return;
        element.dataset.autoAriaLabel = "true";
        element.setAttribute("aria-label", text.slice(0, 320));
      });
      document.body.dataset.visualA11y = "ready";
    }

    function schedule() {
      if (scheduled) return;
      scheduled = true;
      window.setTimeout(sync, 0);
    }

    schedule();
    window.setTimeout(sync, 800);
    window.setTimeout(sync, 1800);
    if (typeof window.MutationObserver === "function") {
      const observer = new MutationObserver(schedule);
      observer.observe(document.body, { childList: true, characterData: true, subtree: true });
    }
    if (window.ProjectI18n) window.ProjectI18n.onChange(schedule);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initDisclosures();
    initSmoothAnchorState();
    initImageLightbox();
    initVisualA11yLabels();
  });
})();
