(function () {
  const INPUT_KEYS = [
    "route_predictability",
    "annual_mileage",
    "payload_level",
    "depot_charging",
    "energy_price_stability",
    "service_readiness",
    "esg_pressure",
    "policy_support"
  ];

  const TERM_LABELS = {
    bev: {
      zh: "電池電動車 (Battery Electric Vehicle, BEV)",
      en: "Battery Electric Vehicle (BEV)",
      ja: "バッテリー電気自動車 (Battery Electric Vehicle, BEV)"
    },
    fcev: {
      zh: "燃料電池電動車 (Fuel Cell Electric Vehicle, FCEV)",
      en: "Fuel Cell Electric Vehicle (FCEV)",
      ja: "燃料電池電気自動車 (Fuel Cell Electric Vehicle, FCEV)"
    },
    hev: {
      zh: "油電混合車 (Hybrid Electric Vehicle, HEV)",
      en: "Hybrid Electric Vehicle (HEV)",
      ja: "ハイブリッド電気自動車 (Hybrid Electric Vehicle, HEV)"
    },
    ice: {
      zh: "內燃機 (Internal Combustion Engine, ICE)",
      en: "Internal Combustion Engine (ICE)",
      ja: "内燃機関 (Internal Combustion Engine, ICE)"
    },
    v2g: {
      zh: "車輛到電網 (Vehicle-to-Grid, V2G)",
      en: "Vehicle-to-Grid (V2G)",
      ja: "Vehicle-to-Grid (V2G)"
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
    esg: {
      zh: "環境、社會與治理 (Environmental, Social, and Governance, ESG)",
      en: "Environmental, Social, and Governance (ESG)",
      ja: "環境・社会・ガバナンス (Environmental, Social, and Governance, ESG)"
    },
    poc: {
      zh: "概念驗證 (Proof of Concept, PoC)",
      en: "Proof of Concept (PoC)",
      ja: "概念実証 (Proof of Concept, PoC)"
    }
  };

  const state = {
    data: null,
    selectedId: "bev",
    inputs: {}
  };

  function root() {
    return document.querySelector("[data-energy-root]");
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

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function findPowertrain(id) {
    return (state.data?.powertrains || []).find((item) => item.id === id);
  }

  function selectedPowertrain() {
    return findPowertrain(state.selectedId) || state.data?.powertrains?.[0];
  }

  function powertrainName(item) {
    return localized(item?.name) || "";
  }

  function optionLabel(value) {
    return label(`energy.option.${value}`, value);
  }

  function inputLabel(key) {
    return label(`energy.input.${key}`, key);
  }

  function statusLabel(status) {
    return label(`energy.status.${status}`, status);
  }

  function segmentLabel(type) {
    return label(`energy.segment.${type}`, type);
  }

  function termLabel(termId) {
    const labels = TERM_LABELS[termId] || {};
    return labels[activeLanguage()] || labels.en || String(termId || "").toUpperCase();
  }

  function computeFit(item) {
    const input = state.inputs;
    let score = Number(item.baseFit || 50);

    if (item.id === "diesel") {
      if (input.payload_level === "heavy") score += 9;
      if (input.depot_charging === "limited") score += 8;
      if (input.service_readiness === "high") score += 5;
      if (input.esg_pressure === "high") score -= 13;
      if (input.policy_support === "high") score -= 8;
      if (input.energy_price_stability === "low") score -= 5;
    }

    if (item.id === "hybrid") {
      if (input.route_predictability === "medium") score += 6;
      if (input.depot_charging !== "available") score += 5;
      if (input.annual_mileage === "medium" || input.annual_mileage === "high") score += 5;
      if (input.service_readiness === "low") score -= 7;
      if (input.esg_pressure === "high") score -= 3;
    }

    if (item.id === "bev") {
      if (input.route_predictability === "high") score += 10;
      if (input.annual_mileage === "high" || input.annual_mileage === "very_high") score += 8;
      if (input.depot_charging === "available") score += 13;
      if (input.depot_charging === "partial") score += 4;
      if (input.depot_charging === "limited") score -= 16;
      if (input.payload_level === "heavy") score -= 8;
      if (input.service_readiness === "high") score += 6;
      if (input.service_readiness === "low") score -= 10;
      if (input.esg_pressure === "high") score += 5;
      if (input.policy_support === "high") score += 4;
    }

    if (item.id === "fcev") {
      if (input.payload_level === "heavy") score += 10;
      if (input.annual_mileage === "very_high") score += 10;
      if (input.policy_support === "high") score += 8;
      if (input.service_readiness === "low") score -= 11;
      if (input.policy_support === "low") score -= 10;
      if (input.route_predictability === "low") score -= 4;
    }

    if (item.id === "v2g") {
      if (input.depot_charging === "available") score += 14;
      if (input.route_predictability === "high") score += 6;
      if (input.service_readiness === "high") score += 8;
      if (input.policy_support === "high") score += 8;
      if (input.depot_charging === "limited") score -= 16;
      if (input.service_readiness === "low") score -= 12;
    }

    return Math.round(clamp(score, 12, 96));
  }

  function readinessBand(value) {
    if (value >= 72) return "high";
    if (value >= 50) return "medium";
    return "low";
  }

  function dependencyLabel(key) {
    const labels = {
      fuel_price: { zh: "燃料價格", en: "Fuel price", ja: "燃料価格" },
      emissions_policy: { zh: "排放政策", en: "Emissions policy", ja: "排出政策" },
      maintenance_network: { zh: "維修網絡", en: "Maintenance network", ja: "整備ネットワーク" },
      payload: { zh: "載重", en: "Payload", ja: "積載" },
      route_mix: { zh: "路線組合", en: "Route mix", ja: "ルート構成" },
      driver_behavior: { zh: "駕駛行為", en: "Driver behavior", ja: "運転行動" },
      service_training: { zh: "服務訓練", en: "Service training", ja: "サービス教育" },
      energy_price: { zh: "能源價格", en: "Energy price", ja: "エネルギー価格" },
      route_stability: { zh: "路線穩定", en: "Route stability", ja: "ルート安定性" },
      depot_power: { zh: "場站電力", en: "Depot power", ja: "拠点電力" },
      charging_window: { zh: "充電時窗", en: "Charging window", ja: "充電時間帯" },
      battery_soh: { zh: "電池 SOH", en: "Battery SOH", ja: "電池 SOH" },
      hydrogen_station: { zh: "氫能站點", en: "Hydrogen station", ja: "水素ステーション" },
      fuel_supply: { zh: "燃料供應", en: "Fuel supply", ja: "燃料供給" },
      safety_training: { zh: "安全訓練", en: "Safety training", ja: "安全教育" },
      policy_support: { zh: "政策支持", en: "Policy support", ja: "政策支援" },
      grid_rule: { zh: "電網規則", en: "Grid rules", ja: "電網ルール" },
      bidirectional_charger: { zh: "雙向充電器", en: "Bidirectional charger", ja: "双方向充電器" },
      battery_warranty: { zh: "電池保固", en: "Battery warranty", ja: "電池保証" },
      energy_market: { zh: "能源市場", en: "Energy market", ja: "エネルギー市場" },
      data_governance: { zh: "資料治理", en: "Data governance", ja: "データガバナンス" }
    };
    return localized(labels[key]) || key;
  }

  function renderControls() {
    const container = document.querySelector("[data-energy-inputs]");
    if (!container) return;

    container.innerHTML = INPUT_KEYS.map((key) => {
      const options = state.data?.optionLabels?.[key] || [];
      return `
        <div class="energy-input-group" role="group" aria-label="${escapeHtml(inputLabel(key))}">
          <h4>${escapeHtml(inputLabel(key))}</h4>
          <div class="energy-segmented">
            ${options.map((option) => `
              <button class="energy-option-button" type="button" data-energy-input="${escapeHtml(key)}" data-energy-value="${escapeHtml(option)}" aria-pressed="${String(state.inputs[key] === option)}">
                ${escapeHtml(optionLabel(option))}
              </button>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");
  }

  function renderPowertrains() {
    const container = document.querySelector("[data-energy-powertrains]");
    if (!container) return;

    container.innerHTML = (state.data?.powertrains || []).map((item) => {
      const fit = computeFit(item);
      const isActive = item.id === state.selectedId;
      return `
        <button class="energy-path-button energy-path-button--${escapeHtml(readinessBand(fit))}" type="button" data-energy-path="${escapeHtml(item.id)}" aria-pressed="${String(isActive)}">
          <span>${escapeHtml(statusLabel(item.status))}</span>
          <strong>${escapeHtml(powertrainName(item))}</strong>
          <em>${escapeHtml(label("energy.fitScore", "Fit score"))}: ${fit}</em>
        </button>
      `;
    }).join("");
  }

  function renderSelected() {
    const item = selectedPowertrain();
    if (!item) return;
    const fit = computeFit(item);
    const name = document.querySelector("[data-energy-selected-name]");
    const role = document.querySelector("[data-energy-selected-role]");
    const metrics = document.querySelector("[data-energy-selected-metrics]");
    const terms = document.querySelector("[data-energy-selected-terms]");
    const boundary = document.querySelector("[data-energy-boundary]");

    if (name) name.textContent = powertrainName(item);
    if (role) role.textContent = localized(item.role);
    if (boundary) boundary.textContent = localized(state.data?.meta?.publicBoundary);
    if (metrics) {
      metrics.innerHTML = `
        <span><strong>${fit}</strong>${escapeHtml(label("energy.fitScore", "Fit score"))}</span>
        <span><strong>${item.serviceReadiness}</strong>${escapeHtml(label("energy.serviceReadiness", "Service readiness"))}</span>
        <span><strong>${item.residualValueWatch}</strong>${escapeHtml(label("energy.residualWatch", "Residual-value watch"))}</span>
        <span>${escapeHtml(statusLabel(item.status))}</span>
      `;
    }
    if (terms) {
      terms.innerHTML = (item.glossaryTerms || []).map((termId) => `
        <button class="energy-term" type="button" data-glossary-term="${escapeHtml(termId)}">${escapeHtml(termLabel(termId))}</button>
      `).join("");
    }
  }

  function getCostSeries() {
    const model = state.data?.crossoverModel;
    const years = model?.years || [];
    const seriesConfig = model?.series || {};
    const result = {};
    const ids = ["diesel", "hybrid", "bev", "fcev", "v2g"];

    ids.forEach((id) => {
      const config = id === "v2g"
        ? { start: 142, annual: 4.4, infraPenalty: 10, policyBenefit: 4.5 }
        : seriesConfig[id];
      if (!config) return;
      result[id] = years.map((year, index) => {
        let value = config.start + config.annual * index;
        if (id === "diesel" || id === "hybrid") {
          if (state.inputs.esg_pressure === "high") value += (config.carbonPenalty || 0) * index;
          if (state.inputs.policy_support === "high") value += (config.carbonPenalty || 0) * 0.65 * index;
          if (state.inputs.energy_price_stability === "low") value += 1.7 * index;
        }
        if (id === "bev") {
          if (state.inputs.depot_charging === "limited") value += config.infraPenalty;
          if (state.inputs.depot_charging === "partial") value += config.infraPenalty * 0.45;
          if (state.inputs.service_readiness === "low") value += 4.5;
          if (state.inputs.route_predictability === "high" && (state.inputs.annual_mileage === "high" || state.inputs.annual_mileage === "very_high")) value -= config.mileageBenefit * index * 0.32;
          if (state.inputs.depot_charging === "available") value -= 1.3 * index;
        }
        if (id === "fcev") {
          if (state.inputs.policy_support === "low") value += config.infraPenalty;
          if (state.inputs.service_readiness === "low") value += 8;
          if (state.inputs.policy_support === "high" && state.inputs.payload_level === "heavy") value -= config.policyBenefit * index * 0.28;
        }
        if (id === "v2g") {
          if (state.inputs.depot_charging !== "available") value += config.infraPenalty;
          if (state.inputs.service_readiness === "low") value += 7;
          if (state.inputs.policy_support === "high" && state.inputs.service_readiness === "high") value -= config.policyBenefit * Math.max(0, index - 3) * 0.35;
        }
        return { year, value: Number(value.toFixed(1)) };
      });
    });
    return result;
  }

  function renderTimeline() {
    const container = document.querySelector("[data-energy-timeline]");
    const summary = document.querySelector("[data-energy-timeline-summary]");
    if (!container) return;

    const width = 820;
    const rowHeight = 56;
    const top = 48;
    const left = 190;
    const right = 34;
    const years = state.data?.crossoverModel?.years || [];
    const height = top + rowHeight * (state.data?.powertrains?.length || 0) + 42;
    const x = (year) => left + ((year - 2026) / 9) * (width - left - right);
    const rowY = (index) => top + index * rowHeight;

    const segments = state.data?.roadmapSegments || [];
    const rows = (state.data?.powertrains || []).map((item, index) => {
      const y = rowY(index);
      const isSelected = item.id === state.selectedId;
      const rowSegments = segments.filter((segment) => segment.powertrainId === item.id);
      return `
        <g class="energy-timeline-row ${isSelected ? "is-selected" : ""}" data-energy-timeline-path="${escapeHtml(item.id)}" tabindex="0" role="button" aria-label="${escapeHtml(powertrainName(item))}">
          <text class="energy-timeline-label" x="22" y="${y + 27}">${escapeHtml(powertrainName(item))}</text>
          <line class="energy-timeline-track" x1="${left}" y1="${y + 22}" x2="${width - right}" y2="${y + 22}"></line>
          ${rowSegments.map((segment) => {
            const start = x(segment.start);
            const end = x(segment.end);
            return `
              <rect class="energy-timeline-segment energy-timeline-segment--${escapeHtml(segment.type)}" x="${start.toFixed(1)}" y="${y + 10}" width="${Math.max(12, end - start).toFixed(1)}" height="24" rx="8"></rect>
              <text class="energy-timeline-segment-label" x="${(start + 8).toFixed(1)}" y="${y + 26}">${escapeHtml(segmentLabel(segment.type))}</text>
            `;
          }).join("")}
        </g>
      `;
    }).join("");

    container.innerHTML = `
      <svg class="energy-timeline-svg" viewBox="0 0 ${width} ${height}" aria-labelledby="energyTimelineTitle">
        <title id="energyTimelineTitle">${escapeHtml(label("energy.timelineTitle", "Energy timing"))}</title>
        ${years.map((year) => `
          <text class="energy-year-label" x="${x(year).toFixed(1)}" y="24" text-anchor="middle">${year}</text>
          <line class="energy-year-grid" x1="${x(year).toFixed(1)}" y1="36" x2="${x(year).toFixed(1)}" y2="${height - 24}"></line>
        `).join("")}
        ${rows}
      </svg>
    `;

    if (summary) {
      const item = selectedPowertrain();
      summary.textContent = t("energy.timelineSummary", {
        name: powertrainName(item),
        status: statusLabel(item?.status)
      });
    }
  }

  function renderCrossover() {
    const container = document.querySelector("[data-energy-crossover]");
    const summary = document.querySelector("[data-energy-crossover-summary]");
    if (!container) return;

    const series = getCostSeries();
    const years = state.data?.crossoverModel?.years || [];
    const allValues = Object.values(series).flat().map((point) => point.value);
    const minValue = Math.floor(Math.min(...allValues) / 10) * 10;
    const maxValue = Math.ceil(Math.max(...allValues) / 10) * 10;
    const width = 760;
    const height = 430;
    const margin = { top: 42, right: 38, bottom: 58, left: 62 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const x = (year) => margin.left + ((year - 2026) / 9) * plotWidth;
    const y = (value) => margin.top + (1 - (value - minValue) / (maxValue - minValue)) * plotHeight;

    const paths = Object.entries(series).map(([id, points]) => {
      const d = points.map((point, index) => `${index === 0 ? "M" : "L"} ${x(point.year).toFixed(1)} ${y(point.value).toFixed(1)}`).join(" ");
      const item = findPowertrain(id);
      const isSelected = id === state.selectedId || (state.selectedId === "v2g" && id === "v2g");
      const last = points[points.length - 1];
      return `
        <g class="energy-cost-line energy-cost-line--${escapeHtml(id)} ${isSelected ? "is-selected" : ""}">
          <path d="${d}"></path>
          <text x="${x(last.year) - 4}" y="${y(last.value) - 6}" text-anchor="end">${escapeHtml(powertrainName(item) || id)}</text>
        </g>
      `;
    }).join("");

    container.innerHTML = `
      <svg class="energy-crossover-svg" viewBox="0 0 ${width} ${height}" aria-labelledby="energyCrossoverTitle">
        <title id="energyCrossoverTitle">${escapeHtml(label("energy.crossoverTitle", "TCO crossover sensitivity"))}</title>
        ${[minValue, minValue + (maxValue - minValue) / 2, maxValue].map((tick) => `
          <line class="energy-chart-grid" x1="${margin.left}" y1="${y(tick).toFixed(1)}" x2="${width - margin.right}" y2="${y(tick).toFixed(1)}"></line>
          <text class="energy-axis-label" x="${margin.left - 10}" y="${y(tick).toFixed(1) + 4}" text-anchor="end">${Math.round(tick)}</text>
        `).join("")}
        ${years.map((year) => `
          <text class="energy-axis-label" x="${x(year).toFixed(1)}" y="${height - 22}" text-anchor="middle">${year}</text>
        `).join("")}
        <line class="energy-axis" x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}"></line>
        <line class="energy-axis" x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${height - margin.bottom}"></line>
        ${paths}
      </svg>
    `;

    if (summary) {
      summary.textContent = t("energy.crossoverSummary", { name: powertrainName(selectedPowertrain()) });
    }
  }

  function computeDepotCapacity() {
    const capacityMap = { limited: 42, partial: 68, available: 92 };
    const mileageDemand = { low: 36, medium: 52, high: 70, very_high: 84 };
    let demand = mileageDemand[state.inputs.annual_mileage] || 52;
    if (state.inputs.payload_level === "heavy") demand += 12;
    if (state.inputs.route_predictability === "high") demand -= 7;
    if (state.inputs.route_predictability === "low") demand += 10;
    return {
      capacity: capacityMap[state.inputs.depot_charging] || 60,
      demand: clamp(demand, 24, 98)
    };
  }

  function renderDepot() {
    const container = document.querySelector("[data-energy-depot]");
    const summary = document.querySelector("[data-energy-depot-summary]");
    if (!container) return;

    const { capacity, demand } = computeDepotCapacity();
    const band = demand > capacity + 12 ? "high" : demand > capacity ? "medium" : "low";
    container.innerHTML = `
      <div class="energy-depot-bars" aria-label="${escapeHtml(label("energy.depotTitle", "Depot capacity"))}">
        <div>
          <span>${escapeHtml(label("energy.option.available", "Available"))}</span>
          <strong>${capacity}</strong>
          <i style="--energy-bar:${capacity}%"></i>
        </div>
        <div>
          <span>${escapeHtml(inputLabel("annual_mileage"))}</span>
          <strong>${demand}</strong>
          <i class="energy-depot-demand energy-depot-demand--${escapeHtml(band)}" style="--energy-bar:${demand}%"></i>
        </div>
      </div>
    `;
    if (summary) summary.textContent = t("energy.depotSummary");
  }

  function renderSoh() {
    const container = document.querySelector("[data-energy-soh]");
    if (!container) return;
    const item = selectedPowertrain();
    let value = item?.sohRelevance || 0;
    if (item?.id === "bev" && state.inputs.depot_charging === "limited") value += 8;
    if (item?.id === "v2g") value += 6;
    if (state.inputs.service_readiness === "low") value += 5;
    value = clamp(value, 0, 98);

    container.innerHTML = `
      <div class="energy-soh-gauge">
        <span>${escapeHtml(label("energy.sohTitle", "SOH watch"))}</span>
        <strong>${Math.round(value)}</strong>
        <i style="--energy-soh:${value}%"></i>
      </div>
      <p>${escapeHtml(label("energy.residualWatch", "Residual-value watch"))}: ${escapeHtml(String(item?.residualValueWatch || 0))}</p>
    `;
  }

  function renderCarbon() {
    const container = document.querySelector("[data-energy-carbon]");
    const summary = document.querySelector("[data-energy-carbon-summary]");
    if (!container) return;

    container.innerHTML = (state.data?.powertrains || []).map((item) => {
      let value = item.carbonRelative;
      if (item.id === "bev" && state.inputs.depot_charging === "limited") value += 8;
      if (item.id === "diesel" && state.inputs.esg_pressure === "high") value += 6;
      const isSelected = item.id === state.selectedId;
      return `
        <div class="energy-carbon-row ${isSelected ? "is-selected" : ""}">
          <span>${escapeHtml(powertrainName(item))}</span>
          <i style="--energy-carbon:${clamp(value, 0, 110)}%"></i>
          <strong>${Math.round(value)}</strong>
        </div>
      `;
    }).join("");

    if (summary) summary.textContent = `${t("energy.carbonSummary")} ${localized(state.data?.carbonPanel?.notes)}`;
  }

  function renderTextPanels() {
    const item = selectedPowertrain();
    const dependencies = document.querySelector("[data-energy-dependencies]");
    const risks = document.querySelector("[data-energy-risks]");
    const education = document.querySelector("[data-energy-education]");
    const suitability = document.querySelector("[data-energy-suitability]");

    if (dependencies) {
      dependencies.innerHTML = (item?.dependencies || []).map((key) => `<li>${escapeHtml(dependencyLabel(key))}</li>`).join("");
    }
    if (risks) {
      risks.innerHTML = localized(item?.risks).map((risk) => `<li>${escapeHtml(risk)}</li>`).join("");
    }
    if (education) {
      education.innerHTML = localized(item?.dealerEducation).map((topic) => `<li>${escapeHtml(topic)}</li>`).join("");
    }
    if (suitability) {
      suitability.textContent = localized(item?.customerSuitability);
    }
  }

  function renderAll() {
    if (!state.data) return;
    renderControls();
    renderPowertrains();
    renderSelected();
    renderTimeline();
    renderCrossover();
    renderDepot();
    renderSoh();
    renderCarbon();
    renderTextPanels();
    if (window.ProjectGlossary) window.ProjectGlossary.refresh();
  }

  async function loadEnergyData() {
    const base = window.ProjectI18n ? window.ProjectI18n.projectBase() : "./";
    const response = await fetch(`${base}data/energy_roadmap.json`);
    if (!response.ok) throw new Error(`Unable to load energy_roadmap.json: ${response.status}`);
    state.data = await response.json();
    state.inputs = { ...(state.data.defaultInputs || {}) };
    state.selectedId = state.data.powertrains?.some((item) => item.id === state.selectedId) ? state.selectedId : state.data.powertrains?.[0]?.id;
  }

  function wireEvents() {
    document.addEventListener("click", (event) => {
      const pathButton = event.target.closest("[data-energy-path], [data-energy-timeline-path]");
      if (pathButton && root()) {
        state.selectedId = pathButton.dataset.energyPath || pathButton.dataset.energyTimelinePath;
        renderAll();
        return;
      }

      const inputButton = event.target.closest("[data-energy-input][data-energy-value]");
      if (inputButton && root()) {
        state.inputs[inputButton.dataset.energyInput] = inputButton.dataset.energyValue;
        renderAll();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const pathTarget = event.target.closest("[data-energy-path], [data-energy-timeline-path]");
      if (pathTarget && root()) {
        event.preventDefault();
        state.selectedId = pathTarget.dataset.energyPath || pathTarget.dataset.energyTimelinePath;
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
      await loadEnergyData();
      renderAll();
      if (window.ProjectI18n) window.ProjectI18n.onChange(renderAll);
    } catch (error) {
      console.error(error);
      const role = document.querySelector("[data-energy-selected-role]");
      if (role) role.textContent = label("energy.loadError", "Energy roadmap data could not be loaded.");
    }
  }

  document.addEventListener("DOMContentLoaded", init);

  window.ProjectEnergyRoadmap = {
    getState: () => ({
      selectedId: state.selectedId,
      inputs: { ...state.inputs },
      selectedFit: selectedPowertrain() ? computeFit(selectedPowertrain()) : null
    }),
    render: renderAll
  };
})();
