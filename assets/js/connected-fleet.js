(function () {
  const TERM_LABELS = {
    fms: {
      zh: "車隊管理系統 (Fleet Management System, FMS)",
      en: "Fleet Management System (FMS)",
      ja: "フリート管理システム (Fleet Management System, FMS)"
    },
    ota: {
      zh: "無線更新 (Over-the-Air, OTA)",
      en: "Over-the-Air (OTA)",
      ja: "無線更新 (Over-the-Air, OTA)"
    },
    esg: {
      zh: "環境、社會與治理 (Environmental, Social, and Governance, ESG)",
      en: "Environmental, Social, and Governance (ESG)",
      ja: "環境・社会・ガバナンス (Environmental, Social, and Governance, ESG)"
    },
    kpi: {
      zh: "關鍵績效指標 (Key Performance Indicator, KPI)",
      en: "Key Performance Indicator (KPI)",
      ja: "重要業績評価指標 (Key Performance Indicator, KPI)"
    },
    "ai-governance": {
      zh: "AI 治理 (AI Governance)",
      en: "AI Governance",
      ja: "AI ガバナンス (AI Governance)"
    },
    tco: {
      zh: "總持有成本 (Total Cost of Ownership, TCO)",
      en: "Total Cost of Ownership (TCO)",
      ja: "総保有コスト (Total Cost of Ownership, TCO)"
    },
    soh: {
      zh: "健康狀態 (State of Health, SOH)",
      en: "State of Health (SOH)",
      ja: "健全性 (State of Health, SOH)"
    },
    v2g: {
      zh: "車輛對電網 (Vehicle-to-Grid, V2G)",
      en: "Vehicle-to-Grid (V2G)",
      ja: "Vehicle-to-Grid (V2G)"
    },
    "carbon-accounting": {
      zh: "碳盤查 (Carbon Accounting)",
      en: "Carbon Accounting",
      ja: "炭素会計 (Carbon Accounting)"
    },
    dealer: {
      zh: "授權銷售與服務通路 (Authorized Sales and Service Channel)",
      en: "Authorized Sales and Service Channel",
      ja: "販売・サービスチャネル (Authorized Sales and Service Channel)"
    },
    poc: {
      zh: "概念驗證 (Proof of Concept, PoC)",
      en: "Proof of Concept (PoC)",
      ja: "概念実証 (Proof of Concept, PoC)"
    }
  };

  const CATEGORY_LABELS = {
    service_readiness: {
      zh: "服務準備",
      en: "Service readiness",
      ja: "サービス準備"
    },
    uptime_support: {
      zh: "妥善率支援",
      en: "Uptime support",
      ja: "稼働率支援"
    },
    operating_efficiency: {
      zh: "營運效率",
      en: "Operating efficiency",
      ja: "運用効率"
    },
    safety_governance: {
      zh: "安全治理",
      en: "Safety governance",
      ja: "安全ガバナンス"
    },
    asset_efficiency: {
      zh: "資產效率",
      en: "Asset efficiency",
      ja: "資産効率"
    },
    parts_readiness: {
      zh: "零件準備",
      en: "Parts readiness",
      ja: "部品準備"
    },
    esg_reporting: {
      zh: "ESG 報告",
      en: "ESG reporting",
      ja: "ESG レポート"
    },
    customer_success: {
      zh: "客戶成功",
      en: "Customer success",
      ja: "顧客サクセス"
    }
  };

  const state = {
    data: null,
    selectedId: "remote_diagnostics"
  };

  function root() {
    return document.querySelector("[data-fleet-root]");
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

  function categoryLabel(category) {
    return localized(CATEGORY_LABELS[category]) || category || "";
  }

  function maturityLabel(status) {
    return label(`fleet.maturity.${status}`, status);
  }

  function riskBand(score) {
    if (score >= 76) return "high";
    if (score >= 56) return "medium";
    return "low";
  }

  function riskLabel(score) {
    return label(`fleet.risk.${riskBand(score)}`, riskBand(score));
  }

  function termLabel(termId) {
    const labels = TERM_LABELS[termId] || {};
    return labels[activeLanguage()] || labels.en || String(termId || "").toUpperCase();
  }

  function renderLibrary() {
    const container = document.querySelector("[data-fleet-library]");
    if (!container) return;

    container.innerHTML = (state.data?.modules || []).map((item) => {
      const isActive = item.id === state.selectedId;
      const band = riskBand(item.riskScore);
      return `
        <button class="fleet-module-card fleet-module-card--${escapeHtml(band)}" type="button" data-fleet-select="${escapeHtml(item.id)}" aria-pressed="${String(isActive)}">
          <span>${escapeHtml(categoryLabel(item.category))}</span>
          <strong>${escapeHtml(moduleName(item))}</strong>
          <em>${escapeHtml(maturityLabel(item.maturity))} - ${escapeHtml(label("fleet.riskScore", "Governance risk score"))}: ${Number(item.riskScore || 0)}</em>
        </button>
      `;
    }).join("");
  }

  function renderList(selector, value) {
    const element = document.querySelector(selector);
    if (!element) return;
    const content = localized(value);
    const list = Array.isArray(content) ? content : content ? [content] : [];
    element.innerHTML = list.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function renderText(selector, value) {
    const element = document.querySelector(selector);
    if (!element) return;
    element.textContent = localized(value) || "";
  }

  function renderTerms(selector, terms, className) {
    const element = document.querySelector(selector);
    if (!element) return;
    element.innerHTML = (terms || []).map((termId) => `
      <button class="${escapeHtml(className)}" type="button" data-glossary-term="${escapeHtml(termId)}">${escapeHtml(termLabel(termId))}</button>
    `).join("");
  }

  function renderSelected() {
    const item = selectedModule();
    if (!item) return;

    const name = document.querySelector("[data-fleet-selected-name]");
    const summary = document.querySelector("[data-fleet-selected-summary]");
    const boundary = document.querySelector("[data-fleet-boundary]");
    const metrics = document.querySelector("[data-fleet-metrics]");

    if (name) name.textContent = moduleName(item);
    if (summary) summary.textContent = localized(item.summary);
    if (boundary) boundary.textContent = localized(state.data?.meta?.publicBoundary);

    if (metrics) {
      metrics.innerHTML = `
        <span><strong>${escapeHtml(categoryLabel(item.category))}</strong></span>
        <span><strong>${escapeHtml(maturityLabel(item.maturity))}</strong></span>
        <span><strong>${escapeHtml(riskLabel(item.riskScore))}</strong> ${escapeHtml(label("fleet.riskScore", "Governance risk score"))}: ${Number(item.riskScore || 0)}</span>
      `;
    }

    renderTerms("[data-fleet-terms]", item.glossaryTerms, "fleet-term");
    renderList("[data-fleet-data-inputs]", item.dataInputs);
    renderText("[data-fleet-customer-value]", item.customerValue);
    renderText("[data-fleet-planning-value]", item.planningValue);
    renderList("[data-fleet-service-requirements]", item.serviceRequirements);
    renderList("[data-fleet-risk-notes]", item.riskNotes);
    renderList("[data-fleet-dealer-education]", item.dealerEducation);
    renderList("[data-fleet-report-outputs]", item.reportOutputs);
  }

  function renderFlow() {
    const item = selectedModule();
    const container = document.querySelector("[data-fleet-flow]");
    const summary = document.querySelector("[data-fleet-flow-summary]");
    const steps = state.data?.flowSteps || [];
    if (!container || !steps.length) return;

    const selectedTerms = new Set(item?.glossaryTerms || []);
    const nodeWidth = 122;
    const nodeHeight = 82;
    const startX = 28;
    const gap = 26;
    const stepWidth = nodeWidth + gap;
    const y = 78;

    const arrows = steps.slice(0, -1).map((step, index) => {
      const x1 = startX + index * stepWidth + nodeWidth + 4;
      const x2 = startX + (index + 1) * stepWidth - 9;
      return `<path class="fleet-flow-arrow" d="M ${x1} ${y + 41} L ${x2} ${y + 41}" marker-end="url(#fleetFlowArrow)"></path>`;
    }).join("");

    const nodes = steps.map((step, index) => {
      const x = startX + index * stepWidth;
      const isRelevant = (step.glossaryTerms || []).some((termId) => selectedTerms.has(termId));
      return `
        <g class="fleet-flow-step${isRelevant ? " is-selected" : ""}" transform="translate(${x}, ${y})">
          <rect width="${nodeWidth}" height="${nodeHeight}" rx="8"></rect>
          <text class="fleet-flow-index" x="16" y="25">${String(index + 1).padStart(2, "0")}</text>
          <text class="fleet-flow-label" x="${nodeWidth / 2}" y="54" text-anchor="middle">${escapeHtml(localized(step.label))}</text>
        </g>
      `;
    }).join("");

    container.innerHTML = `
      <svg class="fleet-flow-svg" viewBox="0 0 900 255" role="img" aria-labelledby="fleetFlowSvgTitle fleetFlowSvgDesc">
        <title id="fleetFlowSvgTitle">${escapeHtml(label("fleet.flowTitle", "Connected fleet data flow"))}</title>
        <desc id="fleetFlowSvgDesc">${escapeHtml(label("fleet.flowSummary", "Static data-flow summary", { name: moduleName(item) }))}</desc>
        <defs>
          <marker id="fleetFlowArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z"></path>
          </marker>
        </defs>
        <path class="fleet-flow-track" d="M 34 202 H 866"></path>
        ${arrows}
        ${nodes}
      </svg>
    `;

    if (summary) {
      summary.textContent = t("fleet.flowSummary", {
        name: moduleName(item)
      });
    }

    renderFlowSteps();
  }

  function renderFlowSteps() {
    const container = document.querySelector("[data-fleet-flow-steps]");
    if (!container) return;

    container.innerHTML = (state.data?.flowSteps || []).map((step) => `
      <article class="fleet-flow-step-item">
        <h4>${escapeHtml(localized(step.label))}</h4>
        <p>${escapeHtml(localized(step.description))}</p>
        <div class="fleet-flow-step-terms">
          ${(step.glossaryTerms || []).map((termId) => `<button class="fleet-term" type="button" data-glossary-term="${escapeHtml(termId)}">${escapeHtml(termLabel(termId))}</button>`).join("")}
        </div>
      </article>
    `).join("");
  }

  function renderGlobalTerms() {
    const terms = new Set();
    (state.data?.modules || []).forEach((item) => (item.glossaryTerms || []).forEach((termId) => terms.add(termId)));
    (state.data?.flowSteps || []).forEach((step) => (step.glossaryTerms || []).forEach((termId) => terms.add(termId)));
    renderTerms("[data-fleet-global-terms]", Array.from(terms), "fleet-term");
  }

  function renderAll() {
    if (!state.data) return;
    renderLibrary();
    renderSelected();
    renderFlow();
    renderGlobalTerms();
    if (window.ProjectGlossary) window.ProjectGlossary.refresh();
  }

  async function loadFleetData() {
    const base = window.ProjectI18n ? window.ProjectI18n.projectBase() : "./";
    const response = await fetch(`${base}data/connected_fleet_lab.json`);
    if (!response.ok) throw new Error(`Unable to load connected_fleet_lab.json: ${response.status}`);
    state.data = await response.json();
    state.selectedId = state.data.modules?.some((item) => item.id === state.selectedId) ? state.selectedId : state.data.modules?.[0]?.id;
  }

  function wireEvents() {
    document.addEventListener("click", (event) => {
      const selector = event.target.closest("[data-fleet-select]");
      if (!selector || !root()) return;
      state.selectedId = selector.dataset.fleetSelect;
      renderAll();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const selector = event.target.closest("[data-fleet-select]");
      if (!selector || !root()) return;
      event.preventDefault();
      state.selectedId = selector.dataset.fleetSelect;
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
      await loadFleetData();
      renderAll();
      if (window.ProjectI18n) window.ProjectI18n.onChange(renderAll);
    } catch (error) {
      console.error(error);
      const name = document.querySelector("[data-fleet-selected-name]");
      if (name) name.textContent = label("fleet.loadError", "Connected Fleet Lab data could not be loaded.");
    }
  }

  document.addEventListener("DOMContentLoaded", init);

  window.ProjectConnectedFleetLab = {
    getState: () => ({
      selectedId: state.selectedId,
      selectedName: moduleName(selectedModule())
    }),
    render: renderAll
  };
})();
