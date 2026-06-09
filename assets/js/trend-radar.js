(function () {
  const METRICS = [
    { key: "market_relevance", labelKey: "trend.metric.market", shortKey: "trend.metricShort.market" },
    { key: "technology_readiness", labelKey: "trend.metric.tech", shortKey: "trend.metricShort.tech" },
    { key: "cost_feasibility", labelKey: "trend.metric.cost", shortKey: "trend.metricShort.cost" },
    { key: "regulation_readiness", labelKey: "trend.metric.regulation", shortKey: "trend.metricShort.regulation" },
    { key: "customer_pain_fit", labelKey: "trend.metric.customer", shortKey: "trend.metricShort.customer" },
    { key: "dealer_education_value", labelKey: "trend.metric.dealer", shortKey: "trend.metricShort.dealer" },
    { key: "strategic_differentiation", labelKey: "trend.metric.differentiation", shortKey: "trend.metricShort.differentiation" }
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
    hev: {
      zh: "油電混合車 (Hybrid Electric Vehicle, HEV)",
      en: "Hybrid Electric Vehicle (HEV)",
      ja: "ハイブリッド電気自動車 (Hybrid Electric Vehicle, HEV)"
    },
    kpi: {
      zh: "關鍵績效指標 (Key Performance Indicator, KPI)",
      en: "Key Performance Indicator (KPI)",
      ja: "重要業績評価指標 (Key Performance Indicator, KPI)"
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

  const YEAR_START = 2026;
  const YEAR_END = 2035;
  const state = {
    data: null,
    trends: [],
    selectedId: null,
    filter: "all"
  };

  function root() {
    return document.querySelector("[data-trend-radar-root]");
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

  function computePriority(trend) {
    const weights = state.data?.meta?.scoring_model || {};
    const score = METRICS.reduce((total, metric) => {
      return total + Number(trend[metric.key] || 0) * Number(weights[metric.key] || 0);
    }, 0);
    return Math.round(score);
  }

  function getSelectedTrend() {
    return state.trends.find((trend) => trend.trend_id === state.selectedId) || sortedTrends()[0];
  }

  function sortedTrends(items) {
    return [...(items || state.trends)].sort((a, b) => b.computed_priority - a.computed_priority);
  }

  function filteredTrends() {
    if (state.filter === "all") return sortedTrends();
    return sortedTrends(state.trends.filter((trend) => trend.category === state.filter));
  }

  function statusLabel(trend) {
    return label(`trend.status.${trend.strategy_status}`, trend.strategy_status);
  }

  function categoryLabel(category) {
    return label(`trend.category.${category}`, category);
  }

  function riskLabel(riskLevel) {
    return label(`trend.risk.${riskLevel}`, riskLevel);
  }

  function riskClass(riskLevel) {
    if (riskLevel === "low") return "is-low";
    if (riskLevel === "high") return "is-high";
    return "is-medium";
  }

  function valueBand(value) {
    if (Number(value) >= 70) return "high";
    if (Number(value) >= 55) return "medium";
    return "low";
  }

  function termLabel(termId) {
    const labels = TERM_LABELS[termId] || {};
    return labels[activeLanguage()] || labels.en || termId;
  }

  function trendName(trend, short) {
    return localized(short ? trend.shortName : trend.name);
  }

  function renderFilters() {
    const container = document.querySelector("[data-trend-filters]");
    if (!container) return;

    const categories = ["all", ...new Set(state.trends.map((trend) => trend.category))];
    container.innerHTML = categories.map((category) => {
      const isActive = category === state.filter;
      const text = category === "all" ? label("trend.category.all", "All signals") : categoryLabel(category);
      return `
        <button class="trend-filter-button" type="button" data-trend-filter="${escapeHtml(category)}" aria-pressed="${String(isActive)}">
          ${escapeHtml(text)}
        </button>
      `;
    }).join("");
  }

  function renderMethod() {
    const list = document.querySelector("[data-trend-method-list]");
    if (!list) return;

    const weights = state.data?.meta?.scoring_model || {};
    list.innerHTML = METRICS.map((metric) => `
      <div>
        <dt>${escapeHtml(label(metric.labelKey, metric.key))}</dt>
        <dd>${Math.round(Number(weights[metric.key] || 0) * 100)}%</dd>
      </div>
    `).join("");
  }

  function renderSelected() {
    const trend = getSelectedTrend();
    if (!trend) return;

    const name = document.querySelector("[data-trend-selected-name]");
    const summary = document.querySelector("[data-trend-selected-summary]");
    const metrics = document.querySelector("[data-trend-selected-metrics]");
    const terms = document.querySelector("[data-trend-selected-terms]");
    const actions = document.querySelector("[data-trend-selected-actions]");

    if (name) name.textContent = trendName(trend, false);
    if (summary) summary.textContent = localized(trend.summary);

    if (metrics) {
      metrics.innerHTML = `
        <span><strong>${trend.computed_priority}</strong>${escapeHtml(label("trend.scoreLabel", "Priority"))}</span>
        <span>${escapeHtml(statusLabel(trend))}</span>
        <span>${escapeHtml(categoryLabel(trend.category))}</span>
        <span>${trend.time_horizon.startYear}-${trend.time_horizon.endYear}</span>
        <span>${escapeHtml(label("trend.confidenceLabel", "Confidence"))}: ${trend.data_confidence}%</span>
      `;
    }

    if (terms) {
      terms.innerHTML = (trend.glossaryTerms || []).map((termId) => `
        <button class="trend-term" type="button" data-glossary-term="${escapeHtml(termId)}">
          ${escapeHtml(termLabel(termId))}
        </button>
      `).join("");
    }

    if (actions) {
      actions.innerHTML = localized(trend.suggested_next_actions).map((action) => `<li>${escapeHtml(action)}</li>`).join("");
    }
  }

  function radarPoint(centerX, centerY, radius, index, total, value) {
    const angle = -Math.PI / 2 + (index * Math.PI * 2) / total;
    const scaled = radius * (Number(value) / 100);
    return {
      x: centerX + Math.cos(angle) * scaled,
      y: centerY + Math.sin(angle) * scaled,
      angle
    };
  }

  function polygonPoints(values, centerX, centerY, radius) {
    return values.map((value, index) => {
      const point = radarPoint(centerX, centerY, radius, index, values.length, value);
      return `${point.x.toFixed(1)},${point.y.toFixed(1)}`;
    }).join(" ");
  }

  function renderRadarChart() {
    const container = document.querySelector("[data-trend-radar-chart]");
    const summary = document.querySelector("[data-trend-radar-summary]");
    const trend = getSelectedTrend();
    if (!container || !trend) return;

    const centerX = 220;
    const centerY = 170;
    const radius = 104;
    const metricValues = METRICS.map((metric) => trend[metric.key]);
    const strongest = METRICS.map((metric) => ({ metric, value: trend[metric.key] }))
      .sort((a, b) => b.value - a.value)[0];

    const rings = [20, 40, 60, 80, 100].map((ring) => `
      <polygon class="trend-radar-ring" points="${polygonPoints(METRICS.map(() => ring), centerX, centerY, radius)}"></polygon>
    `).join("");

    const axes = METRICS.map((metric, index) => {
      const outer = radarPoint(centerX, centerY, radius, index, METRICS.length, 100);
      const labelPoint = radarPoint(centerX, centerY, radius + 35, index, METRICS.length, 100);
      const anchor = labelPoint.x < centerX - 6 ? "end" : labelPoint.x > centerX + 6 ? "start" : "middle";
      return `
        <line class="trend-radar-axis" x1="${centerX}" y1="${centerY}" x2="${outer.x.toFixed(1)}" y2="${outer.y.toFixed(1)}"></line>
        <text class="trend-radar-label" x="${labelPoint.x.toFixed(1)}" y="${labelPoint.y.toFixed(1)}" text-anchor="${anchor}">
          ${escapeHtml(label(metric.shortKey, metric.key))}
        </text>
      `;
    }).join("");

    container.innerHTML = `
      <svg class="trend-svg" viewBox="0 0 440 360" aria-labelledby="trendRadarSvgTitle">
        <title id="trendRadarSvgTitle">${escapeHtml(label("trend.radarTitle", "Selected-signal radar"))}</title>
        <g>${rings}</g>
        <g>${axes}</g>
        <polygon class="trend-radar-shape" points="${polygonPoints(metricValues, centerX, centerY, radius)}"></polygon>
        ${metricValues.map((value, index) => {
          const point = radarPoint(centerX, centerY, radius, index, METRICS.length, value);
          return `<circle class="trend-radar-dot" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="4.5"></circle>`;
        }).join("")}
        <text class="trend-radar-score" x="${centerX}" y="${centerY - 4}" text-anchor="middle">${trend.computed_priority}</text>
        <text class="trend-radar-score-label" x="${centerX}" y="${centerY + 18}" text-anchor="middle">${escapeHtml(label("trend.scoreLabel", "Priority"))}</text>
      </svg>
    `;

    if (summary) {
      summary.textContent = t("trend.radarSummary", {
        trend: trendName(trend, true),
        score: trend.computed_priority,
        metric: label(strongest.metric.labelKey, strongest.metric.key),
        value: strongest.value
      });
    }
  }

  function renderBubbleChart() {
    const container = document.querySelector("[data-trend-bubble-chart]");
    const summary = document.querySelector("[data-trend-bubble-summary]");
    const trends = filteredTrends();
    const selected = getSelectedTrend();
    if (!container) return;

    const width = 620;
    const height = 380;
    const margin = { top: 32, right: 36, bottom: 62, left: 66 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const x = (value) => margin.left + (Number(value) / 100) * plotWidth;
    const y = (value) => margin.top + (1 - Number(value) / 100) * plotHeight;

    const labelOffsets = [-42, -22, 2, 24, 46, -34, -10, 16, 38, -26, 30];
    const bubbles = trends.map((trend, index) => {
      const cx = x(trend.technology_readiness);
      const cy = y(trend.market_relevance);
      const radius = 9 + trend.computed_priority * 0.13;
      const isSelected = selected && selected.trend_id === trend.trend_id;
      const shouldLabel = isSelected;
      const side = index % 2 === 0 ? 1 : -1;
      const labelX = Math.min(width - 14, Math.max(14, cx + side * (radius + 12)));
      const labelY = Math.min(height - margin.bottom - 8, Math.max(margin.top + 12, cy + labelOffsets[index % labelOffsets.length]));
      const anchor = side > 0 ? "start" : "end";
      return `
        <g class="trend-bubble ${riskClass(trend.risk_level)} ${isSelected ? "is-selected" : ""}" role="button" tabindex="0" data-trend-select="${escapeHtml(trend.trend_id)}" aria-label="${escapeHtml(trendName(trend, false))}">
          ${shouldLabel ? `<line class="trend-bubble-leader" x1="${cx.toFixed(1)}" y1="${cy.toFixed(1)}" x2="${labelX.toFixed(1)}" y2="${labelY.toFixed(1)}"></line>` : ""}
          <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${radius.toFixed(1)}"></circle>
          ${shouldLabel ? `<text x="${labelX.toFixed(1)}" y="${labelY.toFixed(1)}" text-anchor="${anchor}">${escapeHtml(trendName(trend, true))}</text>` : ""}
        </g>
      `;
    }).join("");

    container.innerHTML = `
      <svg class="trend-svg" viewBox="0 0 ${width} ${height}" aria-labelledby="trendBubbleSvgTitle">
        <title id="trendBubbleSvgTitle">${escapeHtml(label("trend.bubbleTitle", "Maturity bubble view"))}</title>
        <line class="trend-axis" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${height - margin.bottom}"></line>
        <line class="trend-axis" x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}"></line>
        <text class="trend-axis-label" x="${margin.left - 12}" y="${margin.top + 8}" text-anchor="end">${escapeHtml(label("trend.metricShort.market", "Market"))}</text>
        <text class="trend-axis-label" x="${width - margin.right}" y="${height - 18}" text-anchor="end">${escapeHtml(label("trend.metricShort.tech", "Tech"))}</text>
        ${[25, 50, 75].map((tick) => `
          <line class="trend-grid-line" x1="${x(tick)}" y1="${margin.top}" x2="${x(tick)}" y2="${height - margin.bottom}"></line>
          <line class="trend-grid-line" x1="${margin.left}" y1="${y(tick)}" x2="${width - margin.right}" y2="${y(tick)}"></line>
        `).join("")}
        ${bubbles}
      </svg>
      <div class="trend-bubble-legend" aria-label="${escapeHtml(label("trend.bubbleLegend", "Bubble legend"))}">
        ${trends.map((trend) => `
          <button class="trend-bubble-key ${riskClass(trend.risk_level)}" type="button" data-trend-select="${escapeHtml(trend.trend_id)}">
            <span aria-hidden="true"></span>
            ${escapeHtml(trendName(trend, true))}
            <strong>${trend.computed_priority}</strong>
          </button>
        `).join("")}
      </div>
    `;

    if (summary) {
      const top = trends[0];
      summary.textContent = top
        ? t("trend.bubbleSummary", { trend: trendName(top, true), score: top.computed_priority })
        : label("trend.noData", "No trend data in this category.");
    }
  }

  function renderHeatGrid() {
    const container = document.querySelector("[data-trend-heat-grid]");
    const summary = document.querySelector("[data-trend-heat-summary]");
    const trends = filteredTrends();
    if (!container) return;

    container.innerHTML = `
      <table class="trend-heat-table">
        <thead>
          <tr>
            <th>${escapeHtml(label("trend.table.signal", "Signal"))}</th>
            <th>${escapeHtml(label("trend.scoreLabel", "Priority"))}</th>
            <th>${escapeHtml(label("trend.metric.cost", "Cost feasibility"))}</th>
            <th>${escapeHtml(label("trend.metric.regulation", "Regulation readiness"))}</th>
            <th>${escapeHtml(label("trend.confidenceLabel", "Confidence"))}</th>
            <th>${escapeHtml(label("trend.riskLabel", "Risk"))}</th>
          </tr>
        </thead>
        <tbody>
          ${trends.map((trend) => `
            <tr>
              <th>
                <button class="trend-table-signal" type="button" data-trend-select="${escapeHtml(trend.trend_id)}">
                  ${escapeHtml(trendName(trend, true))}
                </button>
              </th>
              <td><strong>${trend.computed_priority}</strong></td>
              <td><span class="heat-cell heat-cell--${valueBand(trend.cost_feasibility)}">${trend.cost_feasibility}</span></td>
              <td><span class="heat-cell heat-cell--${valueBand(trend.regulation_readiness)}">${trend.regulation_readiness}</span></td>
              <td><span class="heat-cell heat-cell--${valueBand(trend.data_confidence)}">${trend.data_confidence}</span></td>
              <td><span class="risk-pill ${riskClass(trend.risk_level)}">${escapeHtml(riskLabel(trend.risk_level))}</span></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;

    if (summary) {
      const highRisk = trends.filter((trend) => trend.risk_level === "high").length;
      summary.textContent = t("trend.heatSummary", { count: trends.length, highRisk });
    }
  }

  function renderTimeline() {
    const container = document.querySelector("[data-trend-timeline]");
    const summary = document.querySelector("[data-trend-timeline-summary]");
    const trends = sortedTrends(filteredTrends()).sort((a, b) => a.time_horizon.startYear - b.time_horizon.startYear);
    if (!container) return;

    const years = Array.from({ length: YEAR_END - YEAR_START + 1 }, (_, index) => YEAR_START + index);
    container.innerHTML = `
      <div class="trend-timeline__years">
        <span></span>
        <div class="trend-timeline__year-grid">
          ${years.map((year) => `<span>${year}</span>`).join("")}
        </div>
      </div>
      ${trends.map((trend) => {
        const start = Math.max(YEAR_START, trend.time_horizon.startYear);
        const end = Math.min(YEAR_END, trend.time_horizon.endYear);
        return `
          <div class="trend-timeline__row">
            <button class="trend-timeline__label" type="button" data-trend-select="${escapeHtml(trend.trend_id)}">
              ${escapeHtml(trendName(trend, true))}
            </button>
            <div class="trend-timeline__track">
              <button
                class="trend-timeline__bar ${riskClass(trend.risk_level)}"
                type="button"
                data-trend-select="${escapeHtml(trend.trend_id)}"
                style="--start:${start - YEAR_START + 1}; --span:${end - start + 1};"
              >
                ${escapeHtml(statusLabel(trend))}
              </button>
            </div>
          </div>
        `;
      }).join("")}
    `;

    if (summary) {
      const nearTerm = trends.filter((trend) => trend.time_horizon.startYear <= 2027).length;
      summary.textContent = t("trend.timelineSummary", { nearTerm, total: trends.length });
    }
  }

  function renderAll() {
    if (!state.trends.length) return;
    const filtered = filteredTrends();
    if (!filtered.some((trend) => trend.trend_id === state.selectedId)) {
      state.selectedId = filtered[0]?.trend_id || state.trends[0].trend_id;
    }

    renderFilters();
    renderMethod();
    renderSelected();
    renderRadarChart();
    renderBubbleChart();
    renderHeatGrid();
    renderTimeline();

    if (window.ProjectGlossary) window.ProjectGlossary.refresh();
  }

  async function loadTrendData() {
    const base = window.ProjectI18n ? window.ProjectI18n.projectBase() : "./";
    const response = await fetch(`${base}data/trend_radar.json`);
    if (!response.ok) throw new Error(`Unable to load trend_radar.json: ${response.status}`);
    state.data = await response.json();
    state.trends = state.data.trends.map((trend) => {
      const computedPriority = computePriority(trend);
      return {
        ...trend,
        computed_priority: computedPriority,
        priority_score_delta: computedPriority - Number(trend.priority_score || 0)
      };
    });
    state.selectedId = sortedTrends()[0]?.trend_id || null;
  }

  function wireEvents() {
    document.addEventListener("click", (event) => {
      const filter = event.target.closest("[data-trend-filter]");
      if (filter && root()) {
        state.filter = filter.dataset.trendFilter || "all";
        renderAll();
        return;
      }

      const selector = event.target.closest("[data-trend-select]");
      if (selector && root()) {
        state.selectedId = selector.dataset.trendSelect;
        renderAll();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const selector = event.target.closest("[data-trend-select]");
      if (!selector || !root()) return;
      event.preventDefault();
      state.selectedId = selector.dataset.trendSelect;
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
      await loadTrendData();
      renderAll();
      if (window.ProjectI18n) window.ProjectI18n.onChange(renderAll);
    } catch (error) {
      console.error(error);
      const selected = document.querySelector("[data-trend-selected-summary]");
      if (selected) selected.textContent = label("trend.loadError", "Trend data could not be loaded.");
    }
  }

  document.addEventListener("DOMContentLoaded", init);

  window.ProjectTrendRadar = {
    getTrends: () => [...state.trends],
    getSelectedTrend,
    render: renderAll,
    computePriority
  };
})();
