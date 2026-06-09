(function () {
  const STORAGE_KEY = "project5.language.v2";
  const SUPPORTED_LANGUAGES = ["zh", "en", "ja"];
  const DOCUMENT_LANG = {
    zh: "zh-Hant",
    en: "en",
    ja: "ja"
  };

  const state = {
    lang: readStorage(STORAGE_KEY) || "zh",
    dictionary: {},
    ready: null,
    listeners: []
  };

  function projectBase() {
    const script = Array.from(document.scripts).find((item) => {
      const src = item.getAttribute("src") || "";
      return src.includes("assets/js/");
    });
    if (!script) return "./";
    const src = script.getAttribute("src") || "";
    const index = src.indexOf("assets/js/");
    return index >= 0 ? src.slice(0, index) : "./";
  }

  function readStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // localStorage is an enhancement only.
    }
  }

  function isSupportedLanguage(lang) {
    return SUPPORTED_LANGUAGES.includes(lang);
  }

  function getValue(key) {
    const active = state.dictionary[state.lang] || {};
    const fallback = state.dictionary.en || {};
    return active[key] || fallback[key] || key;
  }

  function interpolate(value, params) {
    return Object.keys(params || {}).reduce((text, key) => {
      return text.replaceAll(`{${key}}`, params[key]);
    }, value);
  }

  function t(key, params) {
    return interpolate(getValue(key), params || {});
  }

  function updateElementText(element) {
    const value = t(element.dataset.i18n);
    element.textContent = value;
  }

  function updateElementAttribute(element, attributeName, keyName) {
    const key = element.dataset[keyName];
    if (key) element.setAttribute(attributeName, t(key));
  }

  function applyI18n(lang, options) {
    if (lang && isSupportedLanguage(lang)) state.lang = lang;

    document.documentElement.lang = DOCUMENT_LANG[state.lang] || "en";
    if (!options || options.persist !== false) writeStorage(STORAGE_KEY, state.lang);

    document.querySelectorAll("[data-i18n]").forEach(updateElementText);
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      updateElementAttribute(element, "aria-label", "i18nAriaLabel");
    });
    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      updateElementAttribute(element, "title", "i18nTitle");
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      updateElementAttribute(element, "alt", "i18nAlt");
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      updateElementAttribute(element, "placeholder", "i18nPlaceholder");
    });

    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.langOption === state.lang));
    });

    state.listeners.forEach((listener) => listener(state.lang));
  }

  function onChange(listener) {
    state.listeners.push(listener);
    return function unsubscribe() {
      state.listeners = state.listeners.filter((item) => item !== listener);
    };
  }

  async function loadDictionary() {
    const response = await fetch(`${projectBase()}data/i18n.json`);
    if (!response.ok) {
      throw new Error(`Unable to load i18n.json: ${response.status}`);
    }
    state.dictionary = await response.json();
    if (!isSupportedLanguage(state.lang)) state.lang = "zh";
    applyI18n(state.lang);
    return state.dictionary;
  }

  state.ready = new Promise((resolve, reject) => {
    document.addEventListener("DOMContentLoaded", () => {
      loadDictionary().then(resolve).catch((error) => {
        console.error(error);
        state.dictionary = { en: {} };
        applyI18n("en", { persist: false });
        reject(error);
      });
    });
  });

  window.ProjectI18n = {
    ready: state.ready,
    t,
    applyI18n,
    getLanguage: () => state.lang,
    getSupportedLanguages: () => [...SUPPORTED_LANGUAGES],
    onChange,
    projectBase
  };
})();
