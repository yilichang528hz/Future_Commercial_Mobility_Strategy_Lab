(function () {
  const TERM_LABELS = {
    esg: {
      zh: "環境、社會與治理 (Environmental, Social, and Governance, ESG)",
      en: "Environmental, Social, and Governance (ESG)",
      ja: "環境・社会・ガバナンス (Environmental, Social, and Governance, ESG)"
    },
    bev: {
      zh: "純電動車 (Battery Electric Vehicle, BEV)",
      en: "Battery Electric Vehicle (BEV)",
      ja: "バッテリー電気自動車 (Battery Electric Vehicle, BEV)"
    },
    fcev: {
      zh: "燃料電池電動車 (Fuel Cell Electric Vehicle, FCEV)",
      en: "Fuel Cell Electric Vehicle (FCEV)",
      ja: "燃料電池電気自動車 (Fuel Cell Electric Vehicle, FCEV)"
    },
    v2g: {
      zh: "車輛對電網 (Vehicle-to-Grid, V2G)",
      en: "Vehicle-to-Grid (V2G)",
      ja: "Vehicle-to-Grid (V2G)"
    },
    co2: {
      zh: "二氧化碳 (Carbon Dioxide, CO2)",
      en: "Carbon Dioxide (CO2)",
      ja: "二酸化炭素 (Carbon Dioxide, CO2)"
    },
    kpi: {
      zh: "關鍵績效指標 (Key Performance Indicator, KPI)",
      en: "Key Performance Indicator (KPI)",
      ja: "重要業績評価指標 (Key Performance Indicator, KPI)"
    },
    poc: {
      zh: "概念驗證 (Proof of Concept, PoC)",
      en: "Proof of Concept (PoC)",
      ja: "概念実証 (Proof of Concept, PoC)"
    },
    "carbon-accounting": {
      zh: "碳盤查與排放計算 (Carbon Accounting)",
      en: "Carbon Accounting",
      ja: "炭素会計 (Carbon Accounting)"
    },
    fms: {
      zh: "車隊管理系統 (Fleet Management System, FMS)",
      en: "Fleet Management System (FMS)",
      ja: "フリート管理システム (Fleet Management System, FMS)"
    },
    tco: {
      zh: "總持有成本 (Total Cost of Ownership, TCO)",
      en: "Total Cost of Ownership (TCO)",
      ja: "総保有コスト (Total Cost of Ownership, TCO)"
    }
  };

  const CATEGORY_LABELS = {
    policy_check: {
      zh: "政策檢核",
      en: "Policy check",
      ja: "政策確認"
    },
    reporting_need: {
      zh: "揭露需求",
      en: "Reporting need",
      ja: "開示需要"
    },
    energy_transition: {
      zh: "能源轉型",
      en: "Energy transition",
      ja: "エネルギー転換"
    },
    energy_factor: {
      zh: "能源係數",
      en: "Energy factor",
      ja: "エネルギー係数"
    },
    subsidy_check: {
      zh: "補助檢核",
      en: "Subsidy check",
      ja: "補助確認"
    },
    customer_reporting: {
      zh: "客戶報告",
      en: "Customer reporting",
      ja: "顧客レポート"
    }
  };

  const state = {
    data: null,
    selectedId: "carbon_reporting_pressure",
    inputs: {}
  };

  function root() {
    return document.querySelector("[data-esg-root]");
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

  function formatNumber(value, decimals) {
    return Number(value || 0).toLocaleString(activeLanguage() === "zh" ? "zh-TW" : activeLanguage(), {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals
    });
  }

  function termLabel(termId) {
    const labels = TERM_LABELS[termId] || {};
    return labels[activeLanguage()] || labels.en || String(termId || "").toUpperCase();
  }

  function categoryLabel(category) {
    return localized(CATEGORY_LABELS[category]) || category || "";
  }

  function statusLabel(status) {
    return label(`esg.status.${status}`, status);
  }

  function confidenceLabel(confidence) {
    return label(`esg.confidence.${confidence}`, confidence);
  }

  function metricLabel(metric) {
    return label(`esg.metric.${metric}`, metric);
  }

  function inputLabel(inputId) {
    return label(`esg.input.${inputId}`, inputId);
  }

  function optionLabel(optionId) {
    return label(`esg.option.${optionId}`, optionId);
  }

  function findSignal(id) {
    return (state.data?.policySignals || []).find((item) => item.id === id);
  }

  function selectedSignal() {
    return findSignal(state.selectedId) || state.data?.policySignals?.[0];
  }

  function signalName(item) {
    return localized(item?.name) || "";
  }

  function signalScore(item) {
    const values = Object.values(item?.metrics || {});
    if (!values.length) return 0;
    return Math.round(values.reduce((sum, value) => sum + Number(value || 0), 0) / values.length);
  }

  function inputConfig(inputId) {
    return (state.data?.carbonModel?.inputs || []).find((item) => item.id === inputId);
  }

  function selectedOption(inputId) {
    const config = inputConfig(inputId);
    const selectedId = state.inputs[inputId] || config?.default;
    return (config?.options || []).find((item) => item.id === selectedId) || config?.options?.[0];
  }

  function getInputValue(inputId) {
    return Number(selectedOption(inputId)?.value || 0);
  }

  function computeCarbon() {
    const factors = state.data?.carbonModel?.factors || {};
    const annualMileage = getInputValue("annualMileage");
    const dieselIntensity = getInputValue("dieselIntensity");
    const electricIntensity = getInputValue("electricIntensity");
    const renewableShare = getInputValue("renewableShare");
    const replacementShare = getInputValue("replacementShare");
    const dieselFactor = Number(factors.dieselKgCo2ePerLiterDemo || 0);
    const electricFactor = Number(factors.electricityKgCo2ePerKwhDemo || 0);
    const dieselBaselineKg = (annualMileage / 100) * dieselIntensity * dieselFactor;
    const electricKg = (annualMileage / 100) * electricIntensity * electricFactor * (1 - renewableShare / 100);
    const modeledKg = dieselBaselineKg * (1 - replacementShare / 100) + electricKg * (replacementShare / 100);
    return {
      annualMileage,
      dieselIntensity,
      electricIntensity,
      renewableShare,
      replacementShare,
      baselineTons: dieselBaselineKg / 1000,
      modeledTons: modeledKg / 1000,
      differenceTons: (dieselBaselineKg - modeledKg) / 1000
    };
  }

  function renderTerms(selector, terms, className) {
    const element = document.querySelector(selector);
    if (!element) return;
    element.innerHTML = (terms || []).map((termId) => `
      <button class="${escapeHtml(className)}" type="button" data-glossary-term="${escapeHtml(termId)}">${escapeHtml(termLabel(termId))}</button>
    `).join("");
  }

  function renderSignalCards() {
    const container = document.querySelector("[data-esg-signals]");
    if (!container) return;
    container.innerHTML = (state.data?.policySignals || []).map((item) => {
      const isActive = item.id === state.selectedId;
      return `
        <button class="esg-signal-card esg-signal-card--${escapeHtml(item.sourceConfidence)}" type="button" data-esg-select="${escapeHtml(item.id)}" aria-pressed="${String(isActive)}">
          <span>${escapeHtml(categoryLabel(item.category))}</span>
          <strong>${escapeHtml(signalName(item))}</strong>
          <em>${escapeHtml(statusLabel(item.sourceStatus))} - ${escapeHtml(label("esg.signalScore", "Signal score"))}: ${signalScore(item)}</em>
        </button>
      `;
    }).join("");
  }

  function renderSelectedSignal() {
    const item = selectedSignal();
    if (!item) return;
    const name = document.querySelector("[data-esg-selected-name]");
    const summary = document.querySelector("[data-esg-selected-summary]");
    const status = document.querySelector("[data-esg-source-status]");
    const confidence = document.querySelector("[data-esg-source-confidence]");
    const updated = document.querySelector("[data-esg-update-placeholder]");
    const planningUse = document.querySelector("[data-esg-planning-use]");
    const limitation = document.querySelector("[data-esg-limitation]");
    const actions = document.querySelector("[data-esg-actions]");
    const metrics = document.querySelector("[data-esg-metrics]");

    if (name) name.textContent = signalName(item);
    if (summary) summary.textContent = localized(item.summary);
    if (status) status.textContent = statusLabel(item.sourceStatus);
    if (confidence) confidence.textContent = confidenceLabel(item.sourceConfidence);
    if (updated) updated.textContent = item.updateDatePlaceholder || "";
    if (planningUse) planningUse.textContent = localized(item.planningUse);
    if (limitation) limitation.textContent = localized(item.limitation);
    if (actions) {
      const list = localized(item.actions) || [];
      actions.innerHTML = (Array.isArray(list) ? list : [list]).map((entry) => `<li>${escapeHtml(entry)}</li>`).join("");
    }
    if (metrics) {
      metrics.innerHTML = Object.entries(item.metrics || {}).map(([key, value]) => `
        <article class="esg-metric">
          <span>${escapeHtml(metricLabel(key))}</span>
          <strong>${Number(value || 0)}</strong>
          <i style="--esg-metric: ${Number(value || 0)}%"></i>
        </article>
      `).join("");
    }

    renderTerms("[data-esg-terms]", item.glossaryTerms, "esg-term");
  }

  function renderCarbonControls() {
    const container = document.querySelector("[data-esg-carbon-controls]");
    if (!container) return;
    container.innerHTML = (state.data?.carbonModel?.inputs || []).map((input) => `
      <div class="esg-input-group">
        <h4>${escapeHtml(inputLabel(input.id))}</h4>
        <div class="esg-segmented" role="group" aria-label="${escapeHtml(inputLabel(input.id))}">
          ${(input.options || []).map((option) => {
            const active = (state.inputs[input.id] || input.default) === option.id;
            return `
              <button class="esg-option-button" type="button" data-esg-control="${escapeHtml(input.id)}" data-esg-option="${escapeHtml(option.id)}" aria-pressed="${String(active)}">
                <span>${escapeHtml(optionLabel(option.id))}</span>
                <strong>${escapeHtml(formatNumber(option.value, option.value % 1 ? 1 : 0))} ${escapeHtml(input.unit)}</strong>
              </button>
            `;
          }).join("")}
        </div>
      </div>
    `).join("");
  }

  function renderCarbonEstimator() {
    const result = computeCarbon();
    const summary = document.querySelector("[data-esg-carbon-summary]");
    const cards = document.querySelector("[data-esg-carbon-cards]");
    const chart = document.querySelector("[data-esg-carbon-chart]");
    if (summary) {
      summary.textContent = t("esg.carbonSummary", {
        baseline: formatNumber(result.baselineTons, 1),
        modeled: formatNumber(result.modeledTons, 1),
        difference: formatNumber(result.differenceTons, 1)
      });
    }
    if (cards) {
      const values = [
        { labelKey: "esg.baselineDiesel", value: result.baselineTons },
        { labelKey: "esg.modeledFleet", value: result.modeledTons },
        { labelKey: "esg.demoDifference", value: result.differenceTons }
      ];
      cards.innerHTML = values.map((item) => `
        <article>
          <span>${escapeHtml(label(item.labelKey, item.labelKey))}</span>
          <strong>${escapeHtml(formatNumber(item.value, 1))}</strong>
          <em>tCO2e</em>
        </article>
      `).join("");
    }
    if (chart) renderCarbonChart(chart, result);
  }

  function renderCarbonChart(container, result) {
    const max = Math.max(result.baselineTons, result.modeledTons, Math.abs(result.differenceTons), 1);
    const bars = [
      { label: label("esg.baselineDiesel", "Diesel baseline"), value: result.baselineTons, y: 62, className: "baseline" },
      { label: label("esg.modeledFleet", "Replacement mix"), value: result.modeledTons, y: 132, className: "modeled" }
    ];
    const barSvg = bars.map((bar) => {
      const width = Math.max(8, (bar.value / max) * 560);
      return `
        <g class="esg-carbon-bar esg-carbon-bar--${bar.className}">
          <text x="24" y="${bar.y - 13}">${escapeHtml(bar.label)}</text>
          <rect x="24" y="${bar.y}" width="${width}" height="30" rx="7"></rect>
          <text x="${Math.min(612, 36 + width)}" y="${bar.y + 21}">${escapeHtml(formatNumber(bar.value, 1))} tCO2e</text>
        </g>
      `;
    }).join("");
    container.innerHTML = `
      <svg class="esg-carbon-svg" viewBox="0 0 680 220" role="img" aria-labelledby="esgCarbonTitle esgCarbonDesc">
        <title id="esgCarbonTitle">${escapeHtml(label("esg.carbonEstimator", "Demo carbon-estimation panel"))}</title>
        <desc id="esgCarbonDesc">${escapeHtml(t("esg.carbonSummary", {
          baseline: formatNumber(result.baselineTons, 1),
          modeled: formatNumber(result.modeledTons, 1),
          difference: formatNumber(result.differenceTons, 1)
        }))}</desc>
        <line class="esg-chart-grid" x1="24" y1="188" x2="620" y2="188"></line>
        ${barSvg}
        <text class="esg-carbon-note" x="24" y="204">${escapeHtml(label("esg.demoDifference", "Demo difference"))}: ${escapeHtml(formatNumber(result.differenceTons, 1))} tCO2e</text>
      </svg>
    `;
  }

  function renderTimeline() {
    const container = document.querySelector("[data-esg-timeline]");
    const items = state.data?.timeline || [];
    if (!container || !items.length) return;
    const width = 900;
    const startX = 58;
    const gap = 122;
    const y = 92;
    const nodes = items.map((item, index) => {
      const x = startX + index * gap;
      return `
        <g class="esg-timeline-node esg-timeline-node--${escapeHtml(item.status)}" transform="translate(${x}, ${y})">
          <circle r="18"></circle>
          <text class="esg-timeline-year" x="0" y="-34" text-anchor="middle">${escapeHtml(item.year)}</text>
          <text class="esg-timeline-status" x="0" y="54" text-anchor="middle">${escapeHtml(statusLabel(item.status))}</text>
        </g>
      `;
    }).join("");
    const list = items.map((item) => `
      <article>
        <header>
          <strong>${escapeHtml(item.year)}</strong>
          <span>${escapeHtml(statusLabel(item.status))}</span>
        </header>
        <p>${escapeHtml(localized(item.label))}</p>
      </article>
    `).join("");
    const summary = items.map((item) => `${item.year}: ${localized(item.label)} (${statusLabel(item.status)})`).join(" / ");
    container.innerHTML = `
      <div class="esg-timeline-scroll">
        <svg class="esg-timeline-svg" viewBox="0 0 ${width} 170" role="img" aria-labelledby="esgTimelineTitle" aria-describedby="esgTimelineDesc">
          <title id="esgTimelineTitle">${escapeHtml(label("esg.policyTimeline", "2026-2035 monitoring timeline"))}</title>
          <desc id="esgTimelineDesc">${escapeHtml(summary)}</desc>
          <path class="esg-timeline-track" d="M ${startX} ${y} H ${startX + (items.length - 1) * gap}"></path>
          ${nodes}
        </svg>
      </div>
      <div class="esg-timeline-list">${list}</div>
    `;
  }

  function renderRecommendations() {
    const container = document.querySelector("[data-esg-recommendations]");
    if (!container) return;
    container.innerHTML = (state.data?.recommendations || []).map((item) => `
      <article class="esg-recommendation-card">
        <h3>${escapeHtml(localized(item.title))}</h3>
        <p>${escapeHtml(localized(item.body))}</p>
        <div class="esg-term-list">
          ${(item.glossaryTerms || []).map((termId) => `<button class="esg-term" type="button" data-glossary-term="${escapeHtml(termId)}">${escapeHtml(termLabel(termId))}</button>`).join("")}
        </div>
      </article>
    `).join("");
  }

  function renderGlobalTerms() {
    const terms = new Set(["esg", "bev", "fcev", "v2g", "co2", "kpi", "poc"]);
    (state.data?.policySignals || []).forEach((item) => (item.glossaryTerms || []).forEach((termId) => terms.add(termId)));
    (state.data?.recommendations || []).forEach((item) => (item.glossaryTerms || []).forEach((termId) => terms.add(termId)));
    renderTerms("[data-esg-global-terms]", Array.from(terms), "esg-term");
  }

  function renderAll() {
    if (!state.data) return;
    renderSignalCards();
    renderSelectedSignal();
    renderCarbonControls();
    renderCarbonEstimator();
    renderTimeline();
    renderRecommendations();
    renderGlobalTerms();
    const boundary = document.querySelector("[data-esg-boundary]");
    const accounting = document.querySelector("[data-esg-accounting-caveat]");
    if (boundary) boundary.textContent = localized(state.data.meta?.publicBoundary);
    if (accounting) accounting.textContent = localized(state.data.meta?.accountingCaveat);
    if (window.ProjectGlossary) window.ProjectGlossary.refresh();
  }

  async function loadEsgData() {
    const base = window.ProjectI18n ? window.ProjectI18n.projectBase() : "./";
    const response = await fetch(`${base}data/esg_policy_dashboard.json`);
    if (!response.ok) throw new Error(`Unable to load esg_policy_dashboard.json: ${response.status}`);
    state.data = await response.json();
    (state.data.carbonModel?.inputs || []).forEach((input) => {
      state.inputs[input.id] = input.default;
    });
    state.selectedId = state.data.policySignals?.some((item) => item.id === state.selectedId) ? state.selectedId : state.data.policySignals?.[0]?.id;
  }

  function wireEvents() {
    document.addEventListener("click", (event) => {
      const signal = event.target.closest("[data-esg-select]");
      if (signal && root()) {
        state.selectedId = signal.dataset.esgSelect;
        renderAll();
        return;
      }
      const control = event.target.closest("[data-esg-control]");
      if (control && root()) {
        state.inputs[control.dataset.esgControl] = control.dataset.esgOption;
        renderAll();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const signal = event.target.closest("[data-esg-select]");
      const control = event.target.closest("[data-esg-control]");
      if (!root() || (!signal && !control)) return;
      event.preventDefault();
      if (signal) state.selectedId = signal.dataset.esgSelect;
      if (control) state.inputs[control.dataset.esgControl] = control.dataset.esgOption;
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
      await loadEsgData();
      renderAll();
      if (window.ProjectI18n) window.ProjectI18n.onChange(renderAll);
    } catch (error) {
      console.error(error);
      const name = document.querySelector("[data-esg-selected-name]");
      if (name) name.textContent = label("esg.loadError", "ESG & Policy data could not be loaded.");
    }
  }

  document.addEventListener("DOMContentLoaded", init);

  window.ProjectEsgPolicyDashboard = {
    getState: () => ({
      selectedId: state.selectedId,
      selectedName: signalName(selectedSignal()),
      inputs: { ...state.inputs },
      carbon: computeCarbon()
    }),
    render: renderAll
  };
})();
