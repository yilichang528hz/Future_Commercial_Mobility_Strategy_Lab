(function () {
  const state = {
    data: null,
    filter: "all",
    selectedId: null,
    demoStepIndex: 0
  };

  function roadmapRoot() {
    return document.querySelector("[data-roadmap-root]");
  }

  function demoRoot() {
    return document.querySelector("[data-guided-demo-root]");
  }

  function activeLanguage() {
    return window.ProjectI18n ? window.ProjectI18n.getLanguage() : "en";
  }

  function basePath() {
    return window.ProjectI18n ? window.ProjectI18n.projectBase() : "./";
  }

  function localized(value) {
    if (!value) return "";
    if (typeof value !== "object") return String(value);
    const lang = activeLanguage();
    return value[lang] || value.en || value.zh || value.ja || "";
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function label(key) {
    return localized(state.data?.labels?.[key]) || key;
  }

  function meta(key) {
    return localized(state.data?.meta?.[key]) || "";
  }

  function themes() {
    return state.data?.themes || [];
  }

  function periods() {
    return state.data?.periods || [];
  }

  function items() {
    return state.data?.roadmapItems || [];
  }

  function demoSteps() {
    return state.data?.guidedDemoSteps || [];
  }

  function themeById(id) {
    return themes().find((theme) => theme.id === id);
  }

  function selectedItem() {
    return items().find((item) => item.id === state.selectedId) || filteredItems()[0] || items()[0];
  }

  function filteredItems() {
    return state.filter === "all" ? items() : items().filter((item) => item.theme === state.filter);
  }

  function arrayValue(value) {
    const localizedValue = localized(value);
    return Array.isArray(localizedValue) ? localizedValue : localizedValue ? [localizedValue] : [];
  }

  function setText(selector, value, scope) {
    const target = (scope || document).querySelector(selector);
    if (target) target.textContent = value || "";
  }

  function renderLocalizedMeta() {
    document.querySelectorAll("[data-roadmap-meta]").forEach((element) => {
      element.textContent = meta(element.dataset.roadmapMeta);
    });
    document.querySelectorAll("[data-guided-demo-meta]").forEach((element) => {
      element.textContent = meta(`guidedDemo${element.dataset.guidedDemoMeta.charAt(0).toUpperCase()}${element.dataset.guidedDemoMeta.slice(1)}`);
    });
    document.querySelectorAll("[data-roadmap-label]").forEach((element) => {
      element.textContent = label(element.dataset.roadmapLabel);
    });
    const boundary = document.querySelector("[data-roadmap-boundary]");
    if (boundary) boundary.textContent = localized(state.data?.meta?.publicBoundary);
    const reviewNote = document.querySelector("[data-roadmap-review-note]");
    if (reviewNote) {
      reviewNote.textContent = activeLanguage() === "zh"
        ? " 邊界、資料品質、客戶情境、政策來源與服務準備度，正式使用前都需要覆核。"
        : activeLanguage() === "ja"
          ? " の境界、データ品質、顧客文脈、政策出典、サービス準備度は正式利用前に確認が必要です。"
          : " boundaries, data quality, customer context, policy sources, and service readiness need review before formal use.";
    }
  }

  function renderFilters() {
    const toolbar = document.querySelector("[data-roadmap-filters]");
    if (!toolbar) return;
    const options = [
      { id: "all", name: label("filterAll") },
      ...themes().map((theme) => ({ id: theme.id, name: localized(theme.name) }))
    ];
    toolbar.setAttribute("aria-label", label("filterLabel"));
    toolbar.innerHTML = options.map((option) => `
      <button
        type="button"
        class="roadmap-filter-button"
        data-roadmap-filter="${escapeHtml(option.id)}"
        aria-pressed="${String(state.filter === option.id)}"
      >${escapeHtml(option.name)}</button>
    `).join("");
  }

  function renderChart() {
    const root = document.querySelector("[data-roadmap-chart]");
    if (!root) return;

    const visibleThemes = state.filter === "all" ? themes() : themes().filter((theme) => theme.id === state.filter);
    const visibleItems = filteredItems();
    if (!visibleItems.some((item) => item.id === state.selectedId)) {
      state.selectedId = visibleItems[0]?.id || items()[0]?.id || null;
    }

    const startYear = 2026;
    const endYear = 2035;
    const yearCount = endYear - startYear + 1;
    const width = 960;
    const left = 156;
    const right = 30;
    const top = 64;
    const rowHeight = 68;
    const chartWidth = width - left - right;
    const yearWidth = chartWidth / yearCount;
    const height = top + visibleThemes.length * rowHeight + 54;

    const yearLabels = Array.from({ length: yearCount }, (_, index) => {
      const year = startYear + index;
      const x = left + index * yearWidth + yearWidth / 2;
      const gridX = left + index * yearWidth;
      return `
        <line class="roadmap-grid-line" x1="${gridX}" y1="38" x2="${gridX}" y2="${height - 28}"></line>
        <text class="roadmap-year-label" x="${x}" y="30" text-anchor="middle">${year}</text>
      `;
    }).join("");

    const periodBands = periods().map((period) => {
      const x = left + (period.start - startYear) * yearWidth;
      const bandWidth = (period.end - period.start + 1) * yearWidth;
      return `
        <rect class="roadmap-period-band" x="${x}" y="40" width="${bandWidth}" height="${height - 74}" rx="8"></rect>
        <text class="roadmap-period-label" x="${x + 10}" y="${height - 14}">${period.start}-${period.end}</text>
      `;
    }).join("");

    const trackRows = visibleThemes.map((theme, index) => {
      const y = top + index * rowHeight;
      return `
        <line class="roadmap-track-line" x1="${left}" y1="${y + rowHeight / 2}" x2="${width - right}" y2="${y + rowHeight / 2}"></line>
        <text class="roadmap-track-label" x="18" y="${y + rowHeight / 2 + 5}">${escapeHtml(localized(theme.name))}</text>
      `;
    }).join("");

    const bars = visibleItems.map((item) => {
      const trackIndex = visibleThemes.findIndex((theme) => theme.id === item.theme);
      if (trackIndex < 0) return "";
      const x = left + (item.startYear - startYear) * yearWidth + 8;
      const y = top + trackIndex * rowHeight + 17;
      const barWidth = Math.max(52, (item.endYear - item.startYear + 1) * yearWidth - 16);
      const isSelected = item.id === state.selectedId;
      const title = localized(item.strategyTheme);
      const period = periods().find((entry) => entry.id === item.periodId);
      const aria = `${title}, ${localized(period?.label)}, ${localized(themeById(item.theme)?.name)}`;
      const alignRight = x + barWidth > width - right - 24;
      const labelX = alignRight ? x + barWidth - 12 : x + 12;
      const labelAnchor = alignRight ? "end" : "start";
      return `
        <g
          class="roadmap-item-button"
          data-roadmap-select="${escapeHtml(item.id)}"
          data-theme="${escapeHtml(item.theme)}"
          tabindex="0"
          role="button"
          aria-pressed="${String(isSelected)}"
          aria-label="${escapeHtml(aria)}"
        >
          <title>${escapeHtml(aria)}</title>
          <rect class="roadmap-bar" x="${x}" y="${y}" width="${barWidth}" height="34" rx="17"></rect>
          <text class="roadmap-bar-label" x="${labelX}" y="${y + 22}" text-anchor="${labelAnchor}">${escapeHtml(title)}</text>
        </g>
      `;
    }).join("");

    root.innerHTML = `
      <svg class="roadmap-svg" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="roadmapSvgTitle roadmapSvgDesc">
        <title id="roadmapSvgTitle">${escapeHtml(meta("title"))}</title>
        <desc id="roadmapSvgDesc">${escapeHtml(makeSummary())}</desc>
        ${periodBands}
        ${yearLabels}
        <line class="roadmap-axis-line" x1="${left}" y1="40" x2="${width - right}" y2="40"></line>
        ${trackRows}
        ${bars}
      </svg>
    `;
  }

  function listMarkup(values) {
    const items = arrayValue(values);
    return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function renderTerms(item) {
    const root = document.querySelector("[data-roadmap-terms]");
    if (!root) return;
    root.innerHTML = (item?.glossaryTerms || []).map((term) => `
      <button type="button" data-glossary-term="${escapeHtml(term)}">${escapeHtml(term.toUpperCase())}</button>
    `).join("");
  }

  function renderDetail() {
    const item = selectedItem();
    if (!item) return;
    const period = periods().find((entry) => entry.id === item.periodId);
    const theme = themeById(item.theme);
    setText("[data-roadmap-active-period]", localized(period?.label) || "2026-2035");
    setText("[data-roadmap-count]", `${filteredItems().length} ${filteredItems().length === 1 ? "item" : "items"}`);
    setText("[data-roadmap-detail-title]", localized(item.strategyTheme));
    setText("[data-roadmap-detail-body]", `${localized(theme?.name)} · ${arrayValue(item.targetSegments).join(" / ")} · ${arrayValue(item.customerScenarios).join(" / ")}`);
    document.querySelector("[data-roadmap-actions]").innerHTML = listMarkup(item.recommendedActions);
    document.querySelector("[data-roadmap-required-data]").innerHTML = listMarkup(item.requiredData);
    document.querySelector("[data-roadmap-dealer-education]").innerHTML = listMarkup(item.dealerEducationTasks);
    document.querySelector("[data-roadmap-poc]").textContent = arrayValue(item.customerPocSuggestions).join(" ");
    document.querySelector("[data-roadmap-metrics]").innerHTML = listMarkup(item.successMetrics);
    document.querySelector("[data-roadmap-risks]").innerHTML = listMarkup(item.risks);
    document.querySelector("[data-roadmap-validation]").innerHTML = listMarkup(item.validationNeeds);
    renderTerms(item);
  }

  function makeSummary() {
    const visible = filteredItems();
    const item = selectedItem();
    if (!item) return "";
    const themeName = localized(themeById(item.theme)?.name);
    const title = localized(item.strategyTheme);
    if (activeLanguage() === "zh") {
      return `目前顯示 ${visible.length} 個 demo 路線圖項目。選取項目為 ${title}，主題為 ${themeName}，時間為 ${item.startYear} 至 ${item.endYear}。這是企劃節奏，不是產品上市承諾。`;
    }
    if (activeLanguage() === "ja") {
      return `現在 ${visible.length} 件の demo ロードマップ項目を表示しています。選択項目は ${title}、テーマは ${themeName}、期間は ${item.startYear} から ${item.endYear} です。これは企画リズムであり、発売約束ではありません。`;
    }
    return `Showing ${visible.length} demo roadmap items. Selected item: ${title}, theme: ${themeName}, period: ${item.startYear} to ${item.endYear}. This is a planning cadence, not a launch commitment.`;
  }

  function renderSummary() {
    setText("[data-roadmap-summary]", makeSummary());
  }

  function renderRoadmap() {
    if (!roadmapRoot() || !state.data) return;
    renderLocalizedMeta();
    renderFilters();
    renderChart();
    renderDetail();
    renderSummary();
    if (window.ProjectGlossary) window.ProjectGlossary.refresh();
  }

  function renderGuidedDemo() {
    if (!demoRoot() || !state.data) return;
    renderLocalizedMeta();
    const steps = demoSteps();
    if (!steps.length) return;
    if (state.demoStepIndex < 0) state.demoStepIndex = 0;
    if (state.demoStepIndex >= steps.length) state.demoStepIndex = steps.length - 1;
    const step = steps[state.demoStepIndex];
    setText("[data-guided-demo-step-label]", `${label("demoStep")} ${state.demoStepIndex + 1} / ${steps.length}`);
    setText("[data-guided-demo-duration]", `${step.durationSeconds}s`);
    setText("[data-guided-demo-title]", localized(step.title));
    setText("[data-guided-demo-body]", localized(step.body));
    const progress = document.querySelector("[data-guided-demo-progress]");
    if (progress) {
      progress.innerHTML = steps.map((entry, index) => `
        <button
          type="button"
          class="guided-demo-step-button"
          data-guided-demo-step="${index}"
          aria-current="${index === state.demoStepIndex ? "step" : "false"}"
          role="listitem"
        >
          <small>${index + 1}</small>
          <strong>${escapeHtml(localized(entry.title))}</strong>
          <span>${entry.durationSeconds}s</span>
        </button>
      `).join("");
    }
    const summary = document.querySelector("[data-guided-demo-summary]");
    if (summary) {
      summary.textContent = activeLanguage() === "zh"
        ? `導覽目前停在第 ${state.demoStepIndex + 1} 步：${localized(step.title)}。目標區塊為 ${step.targetId}。`
        : activeLanguage() === "ja"
          ? `現在のデモは ${state.demoStepIndex + 1} ステップ目、${localized(step.title)} です。対象セクションは ${step.targetId} です。`
          : `Guided demo is on step ${state.demoStepIndex + 1}: ${localized(step.title)}. Target section: ${step.targetId}.`;
    }
  }

  function renderAll() {
    renderRoadmap();
    renderGuidedDemo();
  }

  function wireEvents() {
    document.addEventListener("click", (event) => {
      const filter = event.target.closest("[data-roadmap-filter]");
      if (filter && roadmapRoot()) {
        state.filter = filter.dataset.roadmapFilter || "all";
        state.selectedId = filteredItems()[0]?.id || state.selectedId;
        renderRoadmap();
        return;
      }

      const selector = event.target.closest("[data-roadmap-select]");
      if (selector && roadmapRoot()) {
        state.selectedId = selector.dataset.roadmapSelect;
        renderRoadmap();
        return;
      }

      const step = event.target.closest("[data-guided-demo-step]");
      if (step && demoRoot()) {
        state.demoStepIndex = Number(step.dataset.guidedDemoStep || 0);
        renderGuidedDemo();
        return;
      }

      if (event.target.closest("[data-guided-demo-prev]")) {
        state.demoStepIndex = Math.max(0, state.demoStepIndex - 1);
        renderGuidedDemo();
        return;
      }

      if (event.target.closest("[data-guided-demo-next]")) {
        state.demoStepIndex = Math.min(demoSteps().length - 1, state.demoStepIndex + 1);
        renderGuidedDemo();
        return;
      }

      if (event.target.closest("[data-guided-demo-reset]")) {
        state.demoStepIndex = 0;
        renderGuidedDemo();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const selector = event.target.closest("[data-roadmap-select], [data-guided-demo-step]");
      if (!selector) return;
      event.preventDefault();
      selector.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
  }

  async function loadData() {
    const response = await fetch(`${basePath()}data/strategy_roadmap.json`);
    if (!response.ok) throw new Error(`Unable to load strategy_roadmap.json: ${response.status}`);
    state.data = await response.json();
    state.selectedId = items()[0]?.id || null;
  }

  async function init() {
    if (!roadmapRoot() && !demoRoot()) return;
    wireEvents();
    if (window.ProjectI18n) {
      try {
        await window.ProjectI18n.ready;
      } catch (error) {
        console.error(error);
      }
    }
    try {
      await loadData();
      renderAll();
      if (window.ProjectI18n) window.ProjectI18n.onChange(renderAll);
    } catch (error) {
      console.error(error);
      setText("[data-roadmap-detail-title]", "Roadmap data could not be loaded.");
      setText("[data-guided-demo-title]", "Guided demo data could not be loaded.");
    }
  }

  document.addEventListener("DOMContentLoaded", init);

  window.ProjectStrategyRoadmap = {
    render: renderAll,
    getData: () => state.data ? JSON.parse(JSON.stringify(state.data)) : null,
    getSelectedItem: selectedItem
  };
})();
