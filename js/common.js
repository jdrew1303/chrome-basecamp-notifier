require.config({
  baseUrl: "js",
  paths: {
    "jquery": "vendor/jquery/jquery",
    "underscore": "vendor/underscore-amd/underscore",
    "backbone": "vendor/backbone-amd/backbone",
    "backbone.deferred": "vendor/backbone.deferred/index",
    "text": "vendor/text/text",
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
