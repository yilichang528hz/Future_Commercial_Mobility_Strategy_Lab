(function () {
  const TERM_LABELS = {
    adas: {
      zh: "先進駕駛輔助系統 (Advanced Driver Assistance Systems, ADAS)",
      en: "Advanced Driver Assistance Systems (ADAS)",
      ja: "先進運転支援システム (Advanced Driver Assistance Systems, ADAS)"
    },
    aeb: {
      zh: "自動緊急煞車 (Autonomous Emergency Braking, AEB)",
      en: "Autonomous Emergency Braking (AEB)",
      ja: "衝突被害軽減ブレーキ (Autonomous Emergency Braking, AEB)"
    },
    v2x: {
      zh: "車聯萬物 (Vehicle-to-Everything, V2X)",
      en: "Vehicle-to-Everything (V2X)",
      ja: "Vehicle-to-Everything (V2X)"
    },
    fms: {
      zh: "車隊管理系統 (Fleet Management System, FMS)",
      en: "Fleet Management System (FMS)",
      ja: "フリート管理システム (Fleet Management System, FMS)"
    },
    "ai-governance": {
      zh: "AI 治理 (AI Governance)",
      en: "AI Governance",
      ja: "AI ガバナンス (AI Governance)"
    },
    poc: {
      zh: "概念驗證 (Proof of Concept, PoC)",
      en: "Proof of Concept (PoC)",
      ja: "概念実証 (Proof of Concept, PoC)"
    }
  };

  const state = {
    data: null,
    selectedId: "aeb_collision_mitigation"
  };

  function root() {
    return document.querySelector("[data-safety-root]");
  }

  function activeLanguage() {
    return window.ProjectI18n ? window.ProjectI18n.getLanguage() : "en";
  }

  function t(key, params) {
    return window.ProjectI18n ? window.ProjectI18n.t(key, params || {}) : key;
  }

  function label(key, fallback, params) {
    const value = t(key, params || {});
    return value === key ? fallback : value;
  }

  function localized(value) {
    if (!value) return "";
    if (typeof value !== "object") return value;
    return value[activeLanguage()] || value.en || value.zh || value.ja || "";
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function findModule(id) {
    return (state.data?.modules || []).find((item) => item.id === id);
  }

  function selectedModule() {
    return findModule(state.selectedId) || state.data?.modules?.[0];
  }

  function moduleName(item) {
    return localized(item?.name) || "";
  }

  function riskLabel(level) {
    return label(`safety.risk.${level}`, level);
  }

  function metricLabel(metric) {
    return label(`safety.metric.${metric}`, metric);
  }

  function riskBand(score) {
    if (score >= 76) return "high";
    if (score >= 56) return "medium";
    return "low";
  }

  function termLabel(termId) {
    const labels = TERM_LABELS[termId] || {};
    return labels[activeLanguage()] || labels.en || String(termId || "").toUpperCase();
  }

  function renderLibrary() {
    const container = document.querySelector("[data-safety-library]");
    if (!container) return;

    container.innerHTML = (state.data?.modules || []).map((item) => {
      const isActive = item.id === state.selectedId;
      const topScore = Math.max(...Object.values(item.riskScores || {}));
      return `
        <button class="safety-function-card safety-function-card--${escapeHtml(item.riskLevel)}" type="button" data-safety-select="${escapeHtml(item.id)}" aria-pressed="${String(isActive)}">
          <span>${escapeHtml(riskLabel(item.riskLevel))}</span>
          <strong>${escapeHtml(moduleName(item))}</strong>
          <em>${escapeHtml(label("safety.riskHeatMapTitle", "Risk heat map"))}: ${topScore}</em>
        </button>
      `;
    }).join("");
  }

  function renderTextBlock(selector, value, mode) {
    const element = document.querySelector(selector);
    if (!element) return;
    const content = localized(value);
    if (Array.isArray(content)) {
      element.innerHTML = content.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
      return;
    }
    if (mode === "list") {
      element.innerHTML = content ? `<li>${escapeHtml(content)}</li>` : "";
      return;
    }
    element.textContent = content || "";
  }

  function renderSelected() {
    const item = selectedModule();
    if (!item) return;

    const name = document.querySelector("[data-safety-selected-name]");
    const functionText = document.querySelector("[data-safety-technical-function]");
    const customerValue = document.querySelector("[data-safety-customer-value]");
    const driverEducation = document.querySelector("[data-safety-driver-education]");
    const terms = document.querySelector("[data-safety-terms]");
    const boundary = document.querySelector("[data-safety-boundary]");

    if (name) name.textContent = moduleName(item);
    if (functionText) functionText.textContent = localized(item.technicalFunction);
    if (customerValue) customerValue.textContent = localized(item.customerValue);
    if (driverEducation) driverEducation.textContent = localized(item.driverEducationValue);
    if (boundary) boundary.textContent = localized(state.data?.meta?.publicBoundary);
    if (terms) {
      terms.innerHTML = (item.glossaryTerms || []).map((termId) => `
        <button class="safety-term" type="button" data-glossary-term="${escapeHtml(termId)}">${escapeHtml(termLabel(termId))}</button>
      `).join("");
    }

    renderTextBlock("[data-safety-segments]", item.vehicleSegments);
    renderTextBlock("[data-safety-scenarios]", item.scenarios);
    renderTextBlock("[data-safety-limitations]", item.limitations);
    renderTextBlock("[data-safety-overclaims]", item.doNotOverclaim);
    renderTextBlock("[data-safety-planning]", item.planningImplications);
    renderTextBlock("[data-safety-education-materials]", item.dealerEducationMaterials);
    renderFaq(item);
  }

  function renderFaq(item) {
    const container = document.querySelector("[data-safety-faq]");
    if (!container) return;
    container.innerHTML = (item.customerFAQ || []).map((entry) => `
      <article class="safety-faq-item">
        <span>${escapeHtml(label("safety.faqQuestion", "Question"))}</span>
        <h4>${escapeHtml(localized(entry.q))}</h4>
        <span>${escapeHtml(label("safety.faqAnswer", "Answer"))}</span>
        <p>${escapeHtml(localized(entry.a))}</p>
      </article>
    `).join("");
  }

  function renderHeatMap() {
    const item = selectedModule();
    const container = document.querySelector("[data-safety-heat-map]");
    const summary = document.querySelector("[data-safety-heat-summary]");
    if (!container || !item) return;

    const metrics = state.data?.riskMetrics || Object.keys(item.riskScores || {});
    const cells = metrics.map((metric) => {
      const score = item.riskScores?.[metric] || 0;
      const band = riskBand(score);
      return `
        <div class="safety-heat-cell safety-heat-cell--${escapeHtml(band)}">
          <span>${escapeHtml(metricLabel(metric))}</span>
          <strong>${score}</strong>
        </div>
      `;
    }).join("");

    container.innerHTML = cells;

    if (summary) {
      const topMetric = metrics.reduce((best, metric) => {
        const score = item.riskScores?.[metric] || 0;
        return score > best.score ? { metric, score } : best;
      }, { metric: metrics[0], score: -1 });
      summary.textContent = t("safety.riskHeatMapSummary", {
        name: moduleName(item),
        metric: metricLabel(topMetric.metric),
        score: topMetric.score
      });
    }
  }

  function renderAll() {
    if (!state.data) return;
    renderLibrary();
    renderSelected();
    renderHeatMap();
    if (window.ProjectGlossary) window.ProjectGlossary.refresh();
  }

  async function loadSafetyData() {
    const base = window.ProjectI18n ? window.ProjectI18n.projectBase() : "./";
    const response = await fetch(`${base}data/safety_adas_lab.json`);
    if (!response.ok) throw new Error(`Unable to load safety_adas_lab.json: ${response.status}`);
    state.data = await response.json();
    state.selectedId = state.data.modules?.some((item) => item.id === state.selectedId) ? state.selectedId : state.data.modules?.[0]?.id;
  }

  function wireEvents() {
    document.addEventListener("click", (event) => {
      const selector = event.target.closest("[data-safety-select]");
      if (!selector || !root()) return;
      state.selectedId = selector.dataset.safetySelect;
      renderAll();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const selector = event.target.closest("[data-safety-select]");
      if (!selector || !root()) return;
      event.preventDefault();
      state.selectedId = selector.dataset.safetySelect;
      renderAll();
    });
  }

  async function init() {
    if (!root()) return;
    wireEvents();
    if (window.ProjectI18n) {
      try {
        await window.ProjectI18n.ready;
      } catch (error) {
        console.error(error);
      }
    }
    try {
      await loadSafetyData();
      renderAll();
      if (window.ProjectI18n) window.ProjectI18n.onChange(renderAll);
    } catch (error) {
      console.error(error);
      const functionText = document.querySelector("[data-safety-technical-function]");
      if (functionText) functionText.textContent = label("safety.loadError", "Safety & ADAS data could not be loaded.");
    }
  }

  document.addEventListener("DOMContentLoaded", init);

  window.ProjectSafetyAdasLab = {
    getState: () => ({
      selectedId: state.selectedId,
      selectedName: moduleName(selectedModule())
    }),
    render: renderAll
  };
})();
