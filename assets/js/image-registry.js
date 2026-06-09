(function () {
  const REQUIRED_FIELDS = [
    "fileName",
    "path",
    "altZh",
    "altEn",
    "altJa",
    "promptPath",
    "phaseName",
    "moduleId",
    "conversionStatus",
    "usedInFiles"
  ];

  let registry = {
    assets: []
  };

  function projectBase() {
    return window.ProjectI18n ? window.ProjectI18n.projectBase() : "./";
  }

  function normalize(data) {
    if (Array.isArray(data)) return { assets: data };
    if (data && Array.isArray(data.assets)) return data;
    return { assets: [] };
  }

  function validateAsset(asset) {
    return REQUIRED_FIELDS.every((field) => Object.prototype.hasOwnProperty.call(asset, field));
  }

  async function loadRegistry() {
    const response = await fetch(`${projectBase()}data/imageAssetRegistry.json`);
    if (!response.ok) throw new Error(`Unable to load imageAssetRegistry.json: ${response.status}`);
    registry = normalize(await response.json());
    registry.validation = {
      requiredFields: REQUIRED_FIELDS,
      invalidAssets: registry.assets.filter((asset) => !validateAsset(asset)).map((asset) => asset.fileName || asset.path || "unknown")
    };
    document.body.dataset.imageRegistry = registry.validation.invalidAssets.length ? "needs-review" : "ready";
    return registry;
  }

  function getAssets() {
    return [...(registry.assets || [])];
  }

  function getAssetsByModule(moduleId) {
    return getAssets().filter((asset) => asset.moduleId === moduleId);
  }

  document.addEventListener("DOMContentLoaded", () => {
    loadRegistry().catch((error) => {
      document.body.dataset.imageRegistry = "unavailable";
      console.error(error);
    });
  });

  window.ProjectImageRegistry = {
    loadRegistry,
    getAssets,
    getAssetsByModule,
    getRequiredFields: () => [...REQUIRED_FIELDS]
  };
})();
