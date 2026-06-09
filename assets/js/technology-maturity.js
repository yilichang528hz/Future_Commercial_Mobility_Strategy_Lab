(function () {
  const METRICS = [
    { key: "maturity_score", labelKey: "maturity.metric.maturity" },
    { key: "business_value_score", labelKey: "maturity.metric.value" },
    { key: "implementation_cost", labelKey: "maturity.metric.cost" },
    { key: "regulation_risk", labelKey: "maturity.metric.regulationRisk" },
    { key: "dealer_training_difficulty", labelKey: "maturity.metric.dealerTraining" },
    { key: "service_readiness", labelKey: "maturity.metric.serviceReadiness" }
  ];

  const TERM_LABELS = {
    "ai-governance": {
      zh: "AI 治理 (AI Governance)",
      en: "AI Governance",
      ja: "AI ガバナンス (AI Governance)"
    },
    adas: {
      zh: "進階駕駛輔助系統 (Advanced Driver Assistance Systems, ADAS)",
      en: "Advanced Driver Assistance Systems (ADAS)",
      ja: "先進運転支援システム (Advanced Driver Assistance Systems, ADAS)"
    },
    bev: {
      zh: "電池電動車 (Battery Electric Vehicle, BEV)",
      en: "Battery Electric Vehicle (BEV)",
      ja: "バッテリー電気自動車 (Battery Electric Vehicle, BEV)"
    },
    "carbon-accounting": {
      zh: "碳盤查與排放計算 (Carbon Accounting)",
      en: "Carbon Accounting",
      ja: "炭素会計と排出量計算 (Carbon Accounting)"
    },
    dealer: {
      zh: "授權銷售與服務通路 (Authorized Sales and Service Channel)",
      en: "Authorized Sales and Service Channel",
      ja: "販売・サービスチャネル (Authorized Sales and Service Channel)"
    },
    esg: {
      zh: "環境、社會與治理 (Environmental, Social, and Governance, ESG)",
      en: "Environmental, Social, and Governance (ESG)",
      ja: "環境・社会・ガバナンス (Environmental, Social, and Governance, ESG)"
    },
    fcev: {
      zh: "燃料電池電動車 (Fuel Cell Electric Vehicle, FCEV)",
      en: "Fuel Cell Electric Vehicle (FCEV)",
      ja: "燃料電池電気自動車 (Fuel Cell Electric Vehicle, FCEV)"
    },
    fms: {
      zh: "車隊管理系統 (Fleet Management System, FMS)",
      en: "Fleet Management System (FMS)",
      ja: "車隊管理システム (Fleet Management System, FMS)"
    },
    kpi: {
      zh: "關鍵績效指標 (Key Performance Indicator, KPI)",
      en: "Key Performance Indicator (KPI)",
      ja: "重要業績評価指標 (Key Performance Indicator, KPI)"
    },
    l4: {
      zh: "SAE Level 4 高度自動駕駛 (SAE Level 4 Automated Driving)",
      en: "SAE Level 4 Automated Driving",
      ja: "SAE Level 4 高度自動運転 (SAE Level 4 Automated Driving)"
    },
    odd: {
      zh: "運行設計領域 (Operational Design Domain, ODD)",
      en: "Operational Design Domain (ODD)",
      ja: "運行設計領域 (Operational Design Domain, ODD)"
    },
    ota: {
      zh: "空中更新 (Over-the-Air, OTA)",
      en: "Over-the-Air (OTA)",
      ja: "無線更新 (Over-the-Air, OTA)"
    },
    poc: {
      zh: "概念驗證 (Proof of Concept, PoC)",
      en: "Proof of Concept (PoC)",
      ja: "概念実証 (Proof of Concept, PoC)"
    },
    soh: {
      zh: "電池健康度 (State of Health, SOH)",
      en: "State of Health (SOH)",
      ja: "電池健全性 (State of Health, SOH)"
    },
    tco: {
      zh: "總持有成本 (Total Cost of Ownership, TCO)",
      en: "Total Cost of Ownership (TCO)",
      ja: "総保有コスト (Total Cost of Ownership, TCO)"
    },
    v2g: {
      zh: "車輛到電網 (Vehicle-to-Grid, V2G)",
      en: "Vehicle-to-Grid (V2G)",
      ja: "Vehicle-to-Grid (V2G)"
    }
  };

  const state = {
    data: null,
    technologies: [],
    selectedId: null,
    statusFilter: "all"
  };

  function root() {
    return document.querySelector("[data-maturity-root]");
  }

  function activeLanguage() {
    return window.ProjectI18n ? window.ProjectI18n.getLanguage() : "en";
  }

  function t(key, params) {
    return window.ProjectI18n ? window.ProjectI18n.t(key, params || {}) : key;
  }

  function label(key, fallback) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  function localized(value) {
    if (!value || typeof value !== "object") return value || "";
    return value[activeLanguage()] || value.en || value.zh || "";
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function sortedTechnologies(items) {
    return [...(items || state.technologies)].sort((a, b) => {
      const aScore = a.business_value_score + a.maturity_score;
      const bScore = b.business_value_score + b.maturity_score;
      return bScore - aScore;
    });
  }

  function filteredTechnologies() {
    if (state.statusFilter === "all") return sortedTechnologies();
    return sortedTechnologies(state.technologies.filter((item) => item.recommended_status === state.statusFilter));
  }

  function getSelectedTechnology() {
    return state.technologies.find((item) => item.technology_id === state.selectedId) || filteredTechnologies()[0] || state.technologies[0];
  }

  function technologyName(item, short) {
    return localized(short ? item.shortName : item.name);
  }

  function statusLabel(status) {
    return label(`maturity.status.${status}`, status);
  }

  function categoryLabel(category) {
    return label(`maturity.category.${category}`, category);
  }

  function riskLabel(riskLevel) {
    return label(`maturity.risk.${riskLevel}`, riskLevel);
  }

  function riskClass(riskLevel) {
    if (riskLevel === "low") return "is-low";
    if (riskLevel === "high") return "is-high";
    return "is-medium";
  }

  function termLabel(termId) {
    const labels = TERM_LABELS[termId] || {};
    return labels[activeLanguage()] || labels.en || termId;
  }

  function metricBand(value, reverse) {
    const numeric = Number(value);
    if (!reverse) {
      if (numeric >= 70) return "high";
      if (numeric >= 55) return "medium";
      return "low";
    }
    if (numeric >= 70) return "low";
    if (numeric >= 55) return "medium";
    return "high";
  }

  function quadrantKey(item) {
    const highMaturity = item.maturity_score >= 60;
    const highValue = item.business_value_score >= 70;
    if (highMaturity && highValue) return "near_term_education";
    if (!highMaturity && highValue) return "poc_planning";
    if (highMaturity && !highValue) return "long_term_tracking";
    return "deferred_observation";
  }

  function renderFilters() {
    const container = document.querySelector("[data-maturity-filters]");
    if (!container) return;

    const statuses = ["all", "near_term_education", "poc_planning", "long_term_tracking", "deferred_observation"];
    container.innerHTML = statuses.map((status) => {
      const isActive = state.statusFilter === status;
      const text = status === "all" ? label("maturity.status.all", "All statuses") : statusLabel(status);
      return `
        <button class="maturity-filter-button" type="button" data-maturity-filter="${escapeHtml(status)}" aria-pressed="${String(isActive)}">
          ${escapeHtml(text)}
        </button>
      `;
    }).join("");
  }

  function renderSelected() {
    const item = getSelectedTechnology();
    if (!item) return;

    const name = document.querySelector("[data-maturity-selected-name]");
    const notes = document.querySelector("[data-maturity-selected-notes]");
    const metrics = document.querySelector("[data-maturity-selected-metrics]");
    const scenarios = document.querySelector("[data-maturity-selected-scenarios]");
    const terms = document.querySelector("[data-maturity-selected-terms]");

    if (name) name.textContent = technologyName(item, false);
    if (notes) notes.textContent = localized(item.planning_notes);

    if (metrics) {
      metrics.innerHTML = `
        <span><strong>${item.maturity_score}</strong>${escapeHtml(label("maturity.metricShort.maturity", "Maturity"))}</span>
        <span><strong>${item.business_value_score}</strong>${escapeHtml(label("maturity.metricShort.value", "Value"))}</span>
        <span>${escapeHtml(statusLabel(item.recommended_status))}</span>
        <span>${escapeHtml(categoryLabel(item.category))}</span>
        <span>${escapeHtml(label("maturity.riskLabel", "Risk"))}: ${escapeHtml(riskLabel(item.risk_level))}</span>
      `;
    }

    if (scenarios) {
      scenarios.innerHTML = localized(item.suitable_scenarios).map((scenario) => `<li>${escapeHtml(scenario)}</li>`).join("");
    }

    if (terms) {
      terms.innerHTML = (item.glossaryTerms || []).map((termId) => `
        <button class="maturity-term" type="button" data-glossary-term="${escapeHtml(termId)}">
          ${escapeHtml(termLabel(termId))}
        </button>
      `).join("");
    }
  }

  function renderChart() {
    const container = document.querySelector("[data-maturity-chart]");
    const summary = document.querySelector("[data-maturity-chart-summary]");
    const technologies = filteredTechnologies();
    const selected = getSelectedTechnology();
    if (!container) return;

    const width = 720;
    const height = 520;
    const margin = { top: 52, right: 54, bottom: 74, left: 78 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const x = (value) => margin.left + (Number(value) / 100) * plotWidth;
    const y = (value) => margin.top + (1 - Number(value) / 100) * plotHeight;
    const xMid = x(60);
    const yMid = y(70);

    const quadrantLabels = [
      { key: "near_term_education", x: x(82), y: y(88), anchor: "middle" },
      { key: "poc_planning", x: x(28), y: y(88), anchor: "middle" },
      { key: "long_term_tracking", x: x(82), y: y(36), anchor: "middle" },
      { key: "deferred_observation", x: x(28), y: y(36), anchor: "middle" }
    ];

    const bubbles = technologies.map((item, index) => {
      const cx = x(item.maturity_score);
      const cy = y(item.business_value_score);
      const radius = 8 + item.implementation_cost * 0.13;
      const isSelected = selected && selected.technology_id === item.technology_id;
      const shouldLabel = isSelected;
      const labelX = Math.min(width - margin.right, Math.max(margin.left, cx + (index % 2 === 0 ? radius + 10 : -radius - 10)));
      const labelY = Math.min(height - margin.bottom + 18, Math.max(margin.top - 6, cy + (index % 3 - 1) * 18));
      const anchor = labelX > cx ? "start" : "end";
      return `
        <g class="maturity-bubble ${riskClass(item.risk_level)} ${isSelected ? "is-selected" : ""}" role="button" tabindex="0" data-maturity-select="${escapeHtml(item.technology_id)}" aria-label="${escapeHtml(technologyName(item, false))}">
          ${shouldLabel ? `<line class="maturity-bubble-leader" x1="${cx.toFixed(1)}" y1="${cy.toFixed(1)}" x2="${labelX.toFixed(1)}" y2="${labelY.toFixed(1)}"></line>` : ""}
          <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${radius.toFixed(1)}"></circle>
          ${shouldLabel ? `<text x="${labelX.toFixed(1)}" y="${labelY.toFixed(1)}" text-anchor="${anchor}">${escapeHtml(technologyName(item, true))}</text>` : ""}
        </g>
      `;
    }).join("");

    container.innerHTML = `
      <svg class="maturity-svg" viewBox="0 0 ${width} ${height}" aria-labelledby="maturitySvgTitle">
        <title id="maturitySvgTitle">${escapeHtml(label("maturity.chartTitle", "Technology maturity quadrant map"))}</title>
        <rect class="maturity-quadrant maturity-quadrant--poc" x="${margin.left}" y="${margin.top}" width="${(xMid - margin.left).toFixed(1)}" height="${(yMid - margin.top).toFixed(1)}"></rect>
        <rect class="maturity-quadrant maturity-quadrant--near" x="${xMid.toFixed(1)}" y="${margin.top}" width="${(width - margin.right - xMid).toFixed(1)}" height="${(yMid - margin.top).toFixed(1)}"></rect>
        <rect class="maturity-quadrant maturity-quadrant--defer" x="${margin.left}" y="${yMid.toFixed(1)}" width="${(xMid - margin.left).toFixed(1)}" height="${(height - margin.bottom - yMid).toFixed(1)}"></rect>
        <rect class="maturity-quadrant maturity-quadrant--track" x="${xMid.toFixed(1)}" y="${yMid.toFixed(1)}" width="${(width - margin.right - xMid).toFixed(1)}" height="${(height - margin.bottom - yMid).toFixed(1)}"></rect>
        ${[20, 40, 60, 80].map((tick) => `
          <line class="maturity-grid-line" x1="${x(tick)}" y1="${margin.top}" x2="${x(tick)}" y2="${height - margin.bottom}"></line>
          <line class="maturity-grid-line" x1="${margin.left}" y1="${y(tick)}" x2="${width - margin.right}" y2="${y(tick)}"></line>
        `).join("")}
        <line class="maturity-threshold" x1="${xMid.toFixed(1)}" y1="${margin.top}" x2="${xMid.toFixed(1)}" y2="${height - margin.bottom}"></line>
        <line class="maturity-threshold" x1="${margin.left}" y1="${yMid.toFixed(1)}" x2="${width - margin.right}" y2="${yMid.toFixed(1)}"></line>
        <line class="maturity-axis" x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}"></line>
        <line class="maturity-axis" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${height - margin.bottom}"></line>
        <text class="maturity-axis-label" x="${width - margin.right}" y="${height - 22}" text-anchor="end">${escapeHtml(label("maturity.axis.maturity", "Technology maturity"))}</text>
        <text class="maturity-axis-label" x="${margin.left - 12}" y="${margin.top + 8}" text-anchor="end">${escapeHtml(label("maturity.axis.value", "Planning value"))}</text>
        ${quadrantLabels.map((item) => `
          <text class="maturity-quadrant-label" x="${item.x.toFixed(1)}" y="${item.y.toFixed(1)}" text-anchor="${item.anchor}">
            ${escapeHtml(statusLabel(item.key))}
          </text>
        `).join("")}
        ${bubbles}
      </svg>
      <div class="maturity-legend" aria-label="${escapeHtml(label("maturity.legendTitle", "Legend"))}">
        <span><i class="is-low"></i>${escapeHtml(label("maturity.risk.low", "Low risk"))}</span>
        <span><i class="is-medium"></i>${escapeHtml(label("maturity.risk.medium", "Medium risk"))}</span>
        <span><i class="is-high"></i>${escapeHtml(label("maturity.risk.high", "High risk"))}</span>
        <span>${escapeHtml(label("maturity.legendCost", "Larger bubble means higher implementation cost"))}</span>
      </div>
    `;

    if (summary) {
      const counts = technologies.reduce((acc, item) => {
        const key = item.recommended_status;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});
      summary.textContent = t("maturity.chartSummary", {
        total: technologies.length,
        near: counts.near_term_education || 0,
        poc: counts.poc_planning || 0,
        track: counts.long_term_tracking || 0,
        defer: counts.deferred_observation || 0
      });
    }
  }

  function renderCards() {
    const container = document.querySelector("[data-maturity-cards]");
    if (!container) return;
    const selected = getSelectedTechnology();
    const technologies = filteredTechnologies();

    container.innerHTML = technologies.map((item) => {
      const isSelected = selected && selected.technology_id === item.technology_id;
      return `
        <article class="maturity-card ${isSelected ? "is-selected" : ""}">
          <button class="maturity-card__button" type="button" data-maturity-select="${escapeHtml(item.technology_id)}" aria-pressed="${String(isSelected)}">
            <span>${escapeHtml(categoryLabel(item.category))}</span>
            <strong>${escapeHtml(technologyName(item, true))}</strong>
            <em>${escapeHtml(statusLabel(item.recommended_status))}</em>
          </button>
          <div class="maturity-card__metrics">
            <span>${escapeHtml(label("maturity.metricShort.maturity", "Maturity"))}<strong>${item.maturity_score}</strong></span>
            <span>${escapeHtml(label("maturity.metricShort.value", "Value"))}<strong>${item.business_value_score}</strong></span>
            <span>${escapeHtml(label("maturity.metricShort.cost", "Cost"))}<strong>${item.implementation_cost}</strong></span>
            <span>${escapeHtml(label("maturity.metricShort.service", "Service"))}<strong>${item.service_readiness}</strong></span>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderMatrix() {
    const container = document.querySelector("[data-maturity-matrix]");
    const item = getSelectedTechnology();
    if (!container || !item) return;

    container.innerHTML = METRICS.map((metric) => {
      const reverse = metric.key === "implementation_cost" || metric.key === "regulation_risk" || metric.key === "dealer_training_difficulty";
      return `
        <div class="maturity-metric-row">
          <span>${escapeHtml(label(metric.labelKey, metric.key))}</span>
          <strong class="maturity-metric-value maturity-metric-value--${metricBand(item[metric.key], reverse)}">${item[metric.key]}</strong>
        </div>
      `;
    }).join("");
  }

  function renderAll() {
    if (!state.technologies.length) return;
    const filtered = filteredTechnologies();
    if (!filtered.some((item) => item.technology_id === state.selectedId)) {
      state.selectedId = filtered[0]?.technology_id || state.technologies[0].technology_id;
    }
    renderFilters();
    renderSelected();
    renderChart();
    renderCards();
    renderMatrix();
    if (window.ProjectGlossary) window.ProjectGlossary.refresh();
  }

  async function loadTechnologyData() {
    const base = window.ProjectI18n ? window.ProjectI18n.projectBase() : "./";
    const response = await fetch(`${base}data/technology_maturity.json`);
    if (!response.ok) throw new Error(`Unable to load technology_maturity.json: ${response.status}`);
    state.data = await response.json();
    state.technologies = state.data.technologies;
    state.selectedId = sortedTechnologies()[0]?.technology_id || null;
  }

  function wireEvents() {
    document.addEventListener("click", (event) => {
      const filter = event.target.closest("[data-maturity-filter]");
      if (filter && root()) {
        state.statusFilter = filter.dataset.maturityFilter || "all";
        renderAll();
        return;
      }

      const selector = event.target.closest("[data-maturity-select]");
      if (selector && root()) {
        state.selectedId = selector.dataset.maturitySelect;
        renderAll();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const selector = event.target.closest("[data-maturity-select]");
      if (!selector || !root()) return;
      event.preventDefault();
      state.selectedId = selector.dataset.maturitySelect;
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
      await loadTechnologyData();
      renderAll();
      if (window.ProjectI18n) window.ProjectI18n.onChange(renderAll);
    } catch (error) {
      console.error(error);
      const selected = document.querySelector("[data-maturity-selected-notes]");
      if (selected) selected.textContent = label("maturity.loadError", "Technology maturity data could not be loaded.");
    }
  }

  document.addEventListener("DOMContentLoaded", init);

  window.ProjectTechnologyMaturity = {
    getTechnologies: () => [...state.technologies],
    getSelectedTechnology,
    render: renderAll
  };
})();
