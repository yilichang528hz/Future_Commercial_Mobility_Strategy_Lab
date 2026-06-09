(function () {
  let root;

  function t(key) {
    return window.ProjectI18n ? window.ProjectI18n.t(key) : key;
  }

  function buildControls() {
    if (document.querySelector("[data-floating-controls]")) {
      root = document.querySelector("[data-floating-controls]");
      return root;
    }

    root = document.createElement("aside");
    root.className = "floating-controls";
    root.setAttribute("data-floating-controls", "");
    root.setAttribute("aria-label", t("control.clusterLabel"));
    root.innerHTML = `
      <div class="floating-control">
        <button class="floating-action" type="button" data-floating-toggle="language" aria-expanded="false" aria-controls="floatingPanelLanguage">
          <span data-i18n="control.language">Language</span>
        </button>
        <div class="floating-panel" id="floatingPanelLanguage" aria-hidden="true" inert>
          <p class="floating-panel__title" data-i18n="control.language">Language</p>
          <button class="floating-option" type="button" data-lang-option="zh">繁體中文</button>
          <button class="floating-option" type="button" data-lang-option="en">English</button>
          <button class="floating-option" type="button" data-lang-option="ja">日本語</button>
        </div>
      </div>
      <div class="floating-control">
        <button class="floating-action" type="button" data-floating-toggle="theme" aria-expanded="false" aria-controls="floatingPanelTheme">
          <span data-i18n="control.theme">Theme</span>
        </button>
        <div class="floating-panel" id="floatingPanelTheme" aria-hidden="true" inert>
          <p class="floating-panel__title" data-i18n="control.theme">Theme</p>
          <button class="floating-option" type="button" data-theme-option="theme-a" data-i18n="theme.a">Theme A | Warm Academy</button>
          <button class="floating-option" type="button" data-theme-option="theme-b" data-i18n="theme.b">Theme B | Morning Mobility</button>
          <button class="floating-option" type="button" data-theme-option="theme-c" data-i18n="theme.c">Theme C | Human Service Mobility</button>
          <button class="floating-option" type="button" data-theme-option="theme-d" data-i18n="theme.d">Theme D | Quiet Governance</button>
        </div>
      </div>
      <div class="floating-control">
        <button class="floating-action" type="button" data-floating-toggle="toc" aria-expanded="false" aria-controls="floatingPanelToc">
          <span data-i18n="control.toc">TOC</span>
        </button>
        <div class="floating-panel" id="floatingPanelToc" aria-hidden="true" inert>
          <p class="floating-panel__title" data-i18n="control.toc">TOC</p>
          <ul class="toc-list" id="floatingTocList"></ul>
        </div>
      </div>
    `;
    document.body.appendChild(root);
    return root;
  }

  function closePanels() {
    if (!root) return;
    root.querySelectorAll(".floating-panel").forEach((panel) => {
      panel.setAttribute("aria-hidden", "true");
      panel.setAttribute("inert", "");
      panel.querySelectorAll("button, a, input, select, textarea").forEach((item) => {
        item.setAttribute("tabindex", "-1");
      });
    });
    root.querySelectorAll("[data-floating-toggle]").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });
  }

  function openPanel(toggle) {
    const panelId = toggle.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    closePanels();
    if (!panel || isOpen) return;
    toggle.setAttribute("aria-expanded", "true");
    panel.setAttribute("aria-hidden", "false");
    panel.removeAttribute("inert");
    panel.querySelectorAll("button, a, input, select, textarea").forEach((item) => {
      item.removeAttribute("tabindex");
    });
  }

  function renderToc() {
    const list = document.getElementById("floatingTocList");
    if (!list) return;
    const sections = Array.from(document.querySelectorAll("section[id][data-toc-key], article[id][data-toc-key]"));
    list.innerHTML = sections.map((section) => {
      const label = t(section.dataset.tocKey);
      return `<li><button class="toc-button" type="button" data-scroll-target="${section.id}">${label}</button></li>`;
    }).join("");
    const panel = document.getElementById("floatingPanelToc");
    if (panel && panel.getAttribute("aria-hidden") === "true") {
      panel.querySelectorAll("button").forEach((button) => {
        button.setAttribute("tabindex", "-1");
      });
    }
  }

  function wireEvents() {
    document.addEventListener("click", (event) => {
      const toggle = event.target.closest("[data-floating-toggle]");
      if (toggle) {
        openPanel(toggle);
        return;
      }

      const langButton = event.target.closest("[data-lang-option]");
      if (langButton && window.ProjectI18n) {
        window.ProjectI18n.applyI18n(langButton.dataset.langOption);
        closePanels();
        return;
      }

      const themeButton = event.target.closest("[data-theme-option]");
      if (themeButton && window.ProjectTheme) {
        window.ProjectTheme.setTheme(themeButton.dataset.themeOption);
        closePanels();
        return;
      }

      const scrollButton = event.target.closest("[data-scroll-target]");
      if (scrollButton) {
        document.getElementById(scrollButton.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
        closePanels();
        return;
      }

      if (root && !event.target.closest("[data-floating-controls]")) {
        closePanels();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closePanels();
    });
  }

  function init() {
    buildControls();
    renderToc();
    closePanels();
    wireEvents();
    if (window.ProjectI18n) {
      window.ProjectI18n.ready.finally(() => {
        window.ProjectI18n.applyI18n(window.ProjectI18n.getLanguage());
        renderToc();
        closePanels();
      });
      window.ProjectI18n.onChange(renderToc);
    }
    if (window.ProjectTheme) window.ProjectTheme.setTheme(window.ProjectTheme.getTheme());
  }

  document.addEventListener("DOMContentLoaded", init);

  window.ProjectFloatingControls = {
    renderToc,
    closePanels
  };
})();
