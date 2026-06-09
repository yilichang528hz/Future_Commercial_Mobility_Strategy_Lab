(function () {
  const INPUT_KEYS = [
    "route_type",
    "annual_mileage",
    "payload_level",
    "depot_charging",
    "downtime_sensitivity",
    "esg_pressure",
    "regulation_exposure",
    "infrastructure_readiness"
  ];

  const LAYERS = ["near", "medium", "long", "deferred"];

  const TERM_LABELS = {
    "ai-governance": {
      zh: "AI 治理 (AI Governance)",
      en: "AI Governance",
      ja: "AI ガバナンス (AI Governance)"
    },
    adas: {
      zh: "先進駕駛輔助系統 (Advanced Driver Assistance Systems, ADAS)",
      en: "Advanced Driver Assistance Systems (ADAS)",
      ja: "先進運転支援システム (Advanced Driver Assistance Systems, ADAS)"
    },
    bev: {
      zh: "電池電動車 (Battery Electric Vehicle, BEV)",
      en: "Battery Electric Vehicle (BEV)",
      ja: "バッテリー電気自動車 (Battery Electric Vehicle, BEV)"
    },
    "carbon-accounting": {
      zh: "碳盤查 (Carbon Accounting)",
      en: "Carbon Accounting",
      ja: "カーボン会計 (Carbon Accounting)"
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
      ja: "フリート管理システム (Fleet Management System, FMS)"
    },
    kpi: {
      zh: "關鍵績效指標 (Key Performance Indicator, KPI)",
      en: "Key Performance Indicator (KPI)",
      ja: "重要業績評価指標 (Key Performance Indicator, KPI)"
    },
    l4: {
      zh: "SAE Level 4 自動駕駛 (SAE Level 4 Automated Driving)",
      en: "SAE Level 4 Automated Driving",
      ja: "SAE Level 4 自動運転 (SAE Level 4 Automated Driving)"
    },
    odd: {
      zh: "運行設計領域 (Operational Design Domain, ODD)",
      en: "Operational Design Domain (ODD)",
      ja: "運行設計領域 (Operational Design Domain, ODD)"
    },
    poc: {
      zh: "概念驗證 (Proof of Concept, PoC)",
      en: "Proof of Concept (PoC)",
      ja: "概念実証 (Proof of Concept, PoC)"
    },
    soh: {
      zh: "電池健康狀態 (State of Health, SOH)",
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
    selectedScenario: "urban_delivery",
    inputs: {},
    result: null
  };

  function root() {
    return document.querySelector("[data-scenario-root]");
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

  function clipLabel(value, maxLength) {
    const text = String(value || "");
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength - 1)}…`;
  }

  function findScenario(id) {
    return (state.data?.scenarioPresets || []).find((item) => item.scenario_id === id);
  }

  function scenarioName(scenario) {
    return localized(scenario?.name) || "";
  }

  function copyInputs(inputs) {
    return { ...(inputs || {}) };
  }

  function ensureInputs() {
    const scenario = findScenario(state.selectedScenario) || state.data?.scenarioPresets?.[0];
    if (!scenario) return;
    if (!Object.keys(state.inputs).length) {
      state.selectedScenario = scenario.scenario_id;
      state.inputs = copyInputs(scenario.inputs);
    }
  }

  function optionLabel(value) {
    return label(`scenario.option.${value}`, value);
  }

  function inputLabel(key) {
    return label(`scenario.input.${key}`, key);
  }

  function termLabel(termId) {
    const labels = TERM_LABELS[termId] || {};
    return labels[activeLanguage()] || labels.en || String(termId || "").toUpperCase();
  }

  function itemText(id) {
    return localized(state.data?.recommendationItems?.[id]?.text) || id;
  }

  function itemTerms(id) {
    return state.data?.recommendationItems?.[id]?.glossaryTerms || [];
  }

  function mergeLayer(target, layer, ids) {
    (ids || []).forEach((id) => {
      if (state.data?.recommendationItems?.[id] && !target[layer].includes(id)) {
        target[layer].push(id);
      }
    });
  }

  function ruleMatches(rule) {
    return Object.entries(rule.conditions || {}).every(([key, values]) => {
      return (values || []).includes(state.inputs[key]);
    });
  }

  function buildRecommendations() {
    const layers = LAYERS.reduce((acc, layer) => {
      acc[layer] = [...(state.data?.defaultLayers?.[layer] || [])].filter((id) => state.data?.recommendationItems?.[id]);
      return acc;
    }, {});
    const matchedRules = [];

    (state.data?.rules || []).forEach((rule) => {
      if (!ruleMatches(rule)) return;
      matchedRules.push(rule.rule_id);
      LAYERS.forEach((layer) => mergeLayer(layers, layer, rule.layers?.[layer]));
    });

    return {
      layers,
      matchedRules,
      risk: computeRisk()
    };
  }

  function computeRisk() {
    const inputs = state.inputs;
    let score = 0;
    if (inputs.downtime_sensitivity === "critical") score += 2.2;
    if (inputs.downtime_sensitivity === "high") score += 1.2;
    if (inputs.infrastructure_readiness === "low") score += 2.1;
    if (inputs.infrastructure_readiness === "medium") score += 0.8;
    if (inputs.depot_charging === "limited") score += 2.4;
    if (inputs.depot_charging === "partial") score += 0.9;
    if (inputs.regulation_exposure === "high") score += 1.4;
    if (inputs.regulation_exposure === "medium") score += 0.6;
    if (inputs.payload_level === "heavy") score += 0.9;
    if (inputs.annual_mileage === "very_high") score += 1.1;
    if (inputs.annual_mileage === "high") score += 0.6;

    const level = score >= 5 ? "high" : score >= 2.2 ? "medium" : "low";
    return {
      score: Number(score.toFixed(1)),
      level
    };
  }

  function conditionBand(key, value) {
    const highRiskValues = {
      depot_charging: ["limited"],
      downtime_sensitivity: ["critical", "high"],
      regulation_exposure: ["high"],
      infrastructure_readiness: ["low"],
      annual_mileage: ["very_high"],
      payload_level: ["heavy"]
    };
    const mediumRiskValues = {
      depot_charging: ["partial"],
      downtime_sensitivity: ["medium"],
      esg_pressure: ["high", "medium"],
      regulation_exposure: ["medium"],
      infrastructure_readiness: ["medium"],
      annual_mileage: ["high", "medium"],
      payload_level: ["medium", "mixed", "passenger"],
      route_type: ["long_haul", "site_variable", "mixed_portfolio"]
    };

    if ((highRiskValues[key] || []).includes(value)) return "high";
    if ((mediumRiskValues[key] || []).includes(value)) return "medium";
    return "low";
  }

  function renderPresets() {
    const container = document.querySelector("[data-scenario-presets]");
    if (!container) return;

    container.innerHTML = (state.data?.scenarioPresets || []).map((scenario) => {
      const isActive = scenario.scenario_id === state.selectedScenario;
      const route = optionLabel(scenario.inputs.route_type);
      const mileage = optionLabel(scenario.inputs.annual_mileage);
      return `
        <button class="scenario-preset-button" type="button" data-scenario-preset="${escapeHtml(scenario.scenario_id)}" aria-pressed="${String(isActive)}">
          <span>${escapeHtml(scenarioName(scenario))}</span>
          <small>${escapeHtml(route)} · ${escapeHtml(mileage)}</small>
        </button>
      `;
    }).join("");
  }

  function renderInputs() {
    const container = document.querySelector("[data-scenario-inputs]");
    if (!container) return;

    container.innerHTML = INPUT_KEYS.map((key) => {
      const options = state.data?.optionLabels?.[key] || [];
      return `
        <div class="scenario-input-group" role="group" aria-label="${escapeHtml(inputLabel(key))}">
          <h4>${escapeHtml(inputLabel(key))}</h4>
          <div class="scenario-segmented">
            ${options.map((option) => `
              <button class="scenario-option-button" type="button" data-scenario-input="${escapeHtml(key)}" data-scenario-value="${escapeHtml(option)}" aria-pressed="${String(state.inputs[key] === option)}">
                ${escapeHtml(optionLabel(option))}
              </button>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");
  }

  function renderSelectedScenario() {
    const scenario = findScenario(state.selectedScenario);
    const name = document.querySelector("[data-scenario-selected-name]");
    const boundary = document.querySelector("[data-scenario-boundary]");
    const risk = document.querySelector("[data-scenario-risk]");
    if (name) name.textContent = scenarioName(scenario);
    if (boundary) boundary.textContent = localized(state.data?.meta?.publicBoundary) || label("scenario.boundaryBody", "");
    if (risk && state.result) {
      risk.innerHTML = `
        <span class="scenario-risk-pill scenario-risk-pill--${escapeHtml(state.result.risk.level)}">
          ${escapeHtml(label("scenario.riskTitle", "Prototype risk reading"))}: ${escapeHtml(label(`scenario.risk.${state.result.risk.level}`, state.result.risk.level))}
        </span>
        <span>${escapeHtml(label("scenario.demoDataset", "Demo Dataset"))}</span>
        <span>${escapeHtml(label("scenario.prototypeSimulation", "Prototype Simulation"))}</span>
        <span>${escapeHtml(label("scenario.humanReviewRequired", "Human Review Required"))}</span>
      `;
    }
  }

  function renderConditionMatrix() {
    const container = document.querySelector("[data-scenario-condition-matrix]");
    if (!container) return;
    container.innerHTML = INPUT_KEYS.map((key) => {
      const value = state.inputs[key];
      const band = conditionBand(key, value);
      return `
        <div class="scenario-condition-row">
          <span>${escapeHtml(inputLabel(key))}</span>
          <strong class="scenario-condition-value scenario-condition-value--${escapeHtml(band)}">${escapeHtml(optionLabel(value))}</strong>
        </div>
      `;
    }).join("");
  }

  function renderLayers() {
    const container = document.querySelector("[data-scenario-layers]");
    if (!container || !state.result) return;

    container.innerHTML = LAYERS.map((layer) => {
      const ids = state.result.layers[layer] || [];
      return `
        <article class="scenario-layer-card scenario-layer-card--${escapeHtml(layer)}">
          <div class="scenario-layer-card__header">
            <span>${escapeHtml(label(`scenario.layer.${layer}.short`, layer))}</span>
            <strong>${ids.length}</strong>
          </div>
          <h3>${escapeHtml(label(`scenario.layer.${layer}`, layer))}</h3>
          <ul>
            ${(ids.length ? ids : [null]).map((id) => {
              if (!id) return `<li>${escapeHtml(label("scenario.noRecommendations", "No recommendations."))}</li>`;
              const terms = itemTerms(id);
              return `
                <li>
                  <p>${escapeHtml(itemText(id))}</p>
                  ${terms.length ? `<div class="scenario-term-list">${terms.map((termId) => `
                    <button class="scenario-term" type="button" data-glossary-term="${escapeHtml(termId)}">${escapeHtml(termLabel(termId))}</button>
                  `).join("")}</div>` : ""}
                </li>
              `;
            }).join("")}
          </ul>
        </article>
      `;
    }).join("");
  }

  function flowPath(startX, startY, endX, endY) {
    const bend = Math.round((endX - startX) * 0.52);
    return `M ${startX} ${startY} C ${startX + bend} ${startY}, ${endX - bend} ${endY}, ${endX} ${endY}`;
  }

  function renderFlow() {
    const container = document.querySelector("[data-scenario-flow]");
    const summary = document.querySelector("[data-scenario-flow-summary]");
    if (!container || !state.result) return;

    const scenario = findScenario(state.selectedScenario);
    const scenarioLabel = scenarioName(scenario);
    const width = 760;
    const height = 360;
    const source = { x: 74, y: 176, width: 190, height: 82 };
    const cards = [
      { layer: "near", x: 450, y: 32 },
      { layer: "medium", x: 450, y: 116 },
      { layer: "long", x: 450, y: 200 },
      { layer: "deferred", x: 450, y: 284 }
    ];

    container.innerHTML = `
      <svg class="scenario-flow-svg" viewBox="0 0 ${width} ${height}" aria-labelledby="scenarioFlowTitle">
        <title id="scenarioFlowTitle">${escapeHtml(label("scenario.flowTitle", "Strategy flow"))}</title>
        <rect class="scenario-flow-source" x="${source.x}" y="${source.y - source.height / 2}" width="${source.width}" height="${source.height}" rx="8"></rect>
        <text class="scenario-flow-source-text" x="${source.x + 18}" y="${source.y - 10}">${escapeHtml(clipLabel(scenarioLabel, 18))}</text>
        <text class="scenario-flow-source-subtext" x="${source.x + 18}" y="${source.y + 18}">${escapeHtml(optionLabel(state.inputs.route_type))}</text>
        ${cards.map((card) => {
          const count = state.result.layers[card.layer].length;
          const path = flowPath(source.x + source.width, source.y, card.x, card.y + 26);
          return `
            <path class="scenario-flow-path scenario-flow-path--${escapeHtml(card.layer)}" d="${path}"></path>
            <rect class="scenario-flow-node scenario-flow-node--${escapeHtml(card.layer)}" x="${card.x}" y="${card.y}" width="236" height="54" rx="8"></rect>
            <text class="scenario-flow-card-title" x="${card.x + 16}" y="${card.y + 22}">${escapeHtml(label(`scenario.layer.${card.layer}.short`, card.layer))}</text>
            <text class="scenario-flow-card-count" x="${card.x + 204}" y="${card.y + 34}" text-anchor="end">${count}</text>
          `;
        }).join("")}
      </svg>
    `;

    if (summary) {
      summary.textContent = t("scenario.flowSummary", {
        scenario: scenarioLabel,
        risk: label(`scenario.risk.${state.result.risk.level}`, state.result.risk.level),
        near: state.result.layers.near.length,
        medium: state.result.layers.medium.length,
        long: state.result.layers.long.length,
        deferred: state.result.layers.deferred.length
      });
    }
  }

  function renderInsight(selector, content) {
    const element = document.querySelector(selector);
    if (!element) return;
    if (Array.isArray(content)) {
      element.innerHTML = content.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    } else {
      element.textContent = content || "";
    }
  }

  function renderInsights() {
    const narratives = state.data?.narratives || {};
    renderInsight("[data-scenario-reasoning]", localized(narratives.reasoning));
    renderInsight("[data-scenario-dealer]", localized(narratives.dealerEducation));
    renderInsight("[data-scenario-questions]", localized(narratives.interviewQuestions));
    renderInsight("[data-scenario-gaps]", localized(narratives.dataGaps));
    renderInsight("[data-scenario-human]", localized(narratives.humanReview));
  }

  function renderAll() {
    if (!state.data) return;
    ensureInputs();
    state.result = buildRecommendations();
    renderPresets();
    renderInputs();
    renderSelectedScenario();
    renderConditionMatrix();
    renderFlow();
    renderLayers();
    renderInsights();
    if (window.ProjectGlossary) window.ProjectGlossary.refresh();
  }

  async function loadScenarioData() {
    const base = window.ProjectI18n ? window.ProjectI18n.projectBase() : "./";
    const response = await fetch(`${base}data/scenario_simulator.json`);
    if (!response.ok) throw new Error(`Unable to load scenario_simulator.json: ${response.status}`);
    state.data = await response.json();
    const firstScenario = state.data.scenarioPresets?.[0];
    if (firstScenario) {
      state.selectedScenario = firstScenario.scenario_id;
      state.inputs = copyInputs(firstScenario.inputs);
    }
  }

  function wireEvents() {
    document.addEventListener("click", (event) => {
      const preset = event.target.closest("[data-scenario-preset]");
      if (preset && root()) {
        const scenario = findScenario(preset.dataset.scenarioPreset);
        if (!scenario) return;
        state.selectedScenario = scenario.scenario_id;
        state.inputs = copyInputs(scenario.inputs);
        renderAll();
        return;
      }

      const input = event.target.closest("[data-scenario-input][data-scenario-value]");
      if (input && root()) {
        state.inputs[input.dataset.scenarioInput] = input.dataset.scenarioValue;
        renderAll();
      }
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
      await loadScenarioData();
      renderAll();
      if (window.ProjectI18n) window.ProjectI18n.onChange(renderAll);
    } catch (error) {
      console.error(error);
      const boundary = document.querySelector("[data-scenario-boundary]");
      if (boundary) boundary.textContent = label("scenario.loadError", "Scenario simulation data could not be loaded.");
    }
  }

  document.addEventListener("DOMContentLoaded", init);

  window.ProjectScenarioSimulator = {
    getState: () => ({
      selectedScenario: state.selectedScenario,
      inputs: { ...state.inputs },
      result: state.result ? JSON.parse(JSON.stringify(state.result)) : null
    }),
    render: renderAll
  };
})();
