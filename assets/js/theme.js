(function () {
  const STORAGE_KEY = "project5.theme";
  const THEMES = ["theme-a", "theme-b", "theme-c", "theme-d"];

  const state = {
    theme: readStorage(STORAGE_KEY) || "theme-a"
  };

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

  function normalizeTheme(theme) {
    return THEMES.includes(theme) ? theme : "theme-a";
  }

  function setTheme(theme) {
    state.theme = normalizeTheme(theme);
    document.body.dataset.theme = state.theme;
    writeStorage(STORAGE_KEY, state.theme);
    document.querySelectorAll("[data-theme-option]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.themeOption === state.theme));
    });
  }

  function getTheme() {
    return state.theme;
  }

  document.addEventListener("DOMContentLoaded", () => setTheme(state.theme));

  window.ProjectTheme = {
    setTheme,
    getTheme,
    getThemes: () => [...THEMES]
  };
})();
