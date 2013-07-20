require.config({
  baseUrl: "js",
  paths: {
    "jquery": "vendor/jquery/jquery",
    "underscore": "vendor/underscore-amd/underscore",
    "backbone": "vendor/backbone-amd/backbone",
    "backbone.deferred": "vendor/backbone.deferred/index",
    "backbone.local_storage": "vendor/backbone.localStorage/backbone.localStorage",
    "backbone.dual_storage": "vendor/backbone.dualstorage/backbone.dualstorage",
    "ejs": "vendor/ejs/ejs",
    "app": "app"
  },
  shim: {
    "backbone.deferred": {
      deps: ["underscore", "backbone"],
      exports: "deferred"
    },
    "backbone.dual_storage": {
      deps: ["underscore", "backbone"],
      exports: "DualStorage"
    }
  }
});
