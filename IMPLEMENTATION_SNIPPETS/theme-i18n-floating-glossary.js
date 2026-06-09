// IMPLEMENTATION_SNIPPETS/theme-i18n-floating-glossary.js
// Static GitHub Pages friendly implementation sketch. Codex may adapt it to app.js.
(function () {
  const state = {
    lang: localStorage.getItem('siteLang') || 'zh',
    theme: localStorage.getItem('siteTheme') || 'theme-a'
  };

  function setTheme(theme) {
    state.theme = theme;
    document.body.dataset.theme = theme;
    try { localStorage.setItem('siteTheme', theme); } catch (e) {}
    document.querySelectorAll('[data-theme-option]').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.dataset.themeOption === theme ? 'true' : 'false');
    });
  }

  function t(key) {
    const dict = window.PROJECT_I18N || {};
    return (dict[state.lang] && dict[state.lang][key]) || (dict.en && dict.en[key]) || key;
  }

  function applyI18n(lang) {
    state.lang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : lang;
    try { localStorage.setItem('siteLang', lang); } catch (e) {}
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
    });
    renderFloatingToc();
    renderGlossaryTerms();
  }

  function renderFloatingToc() {
    const list = document.querySelector('#floatingTocList');
    if (!list) return;
    const sections = Array.from(document.querySelectorAll('section[id][data-toc-key]'));
    list.innerHTML = sections.map(sec => `<li><button type="button" data-scroll-target="${sec.id}">${t(sec.dataset.tocKey)}</button></li>`).join('');
  }

  function renderGlossaryTerms() {
    // Keep this conservative: only enhance elements explicitly marked with data-glossary-term.
    document.querySelectorAll('[data-glossary-term]').forEach(el => {
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.classList.add('glossary-term');
    });
  }

  function openGlossary(termId) {
    const terms = window.GLOSSARY_TERMS || [];
    const term = terms.find(x => x.termId === termId || x.acronym === termId);
    if (!term) return;
    const modal = document.querySelector('#glossaryModal');
    if (!modal) return;
    modal.querySelector('[data-glossary-title]').textContent = state.lang === 'zh'
      ? `${term.fullNameZh}（${term.fullNameEn}, ${term.acronym}）`
      : state.lang === 'ja'
        ? `${term.fullNameJa}（${term.fullNameEn}, ${term.acronym}）`
        : `${term.fullNameEn} (${term.acronym})`;
    modal.querySelector('[data-glossary-definition]').textContent = term[`definition${state.lang === 'zh' ? 'Zh' : state.lang === 'ja' ? 'Ja' : 'En'}`] || term.definitionEn;
    modal.hidden = false;
    modal.querySelector('[data-glossary-close]').focus();
  }

  document.addEventListener('click', evt => {
    const themeBtn = evt.target.closest('[data-theme-option]');
    if (themeBtn) setTheme(themeBtn.dataset.themeOption);
    const langBtn = evt.target.closest('[data-lang-option]');
    if (langBtn) applyI18n(langBtn.dataset.langOption);
    const scrollBtn = evt.target.closest('[data-scroll-target]');
    if (scrollBtn) document.getElementById(scrollBtn.dataset.scrollTarget)?.scrollIntoView({ behavior: 'smooth' });
    const glossary = evt.target.closest('[data-glossary-term]');
    if (glossary) openGlossary(glossary.dataset.glossaryTerm);
    if (evt.target.closest('[data-glossary-close]')) document.querySelector('#glossaryModal').hidden = true;
  });

  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      document.querySelectorAll('.floating-panel[aria-hidden="false"]').forEach(p => p.setAttribute('aria-hidden', 'true'));
      const modal = document.querySelector('#glossaryModal');
      if (modal) modal.hidden = true;
    }
  });

  window.ProjectUi = { setTheme, applyI18n, t };
  document.addEventListener('DOMContentLoaded', () => { setTheme(state.theme); applyI18n(state.lang); });
})();
