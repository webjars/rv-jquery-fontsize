requirejs.config({
    paths: { "rv-jquery-fontsize": webjars.path("rv-jquery-fontsize", "rv-jquery-fontsize") },
    shim: { "rv-jquery-fontsize": [ "jquery", "store.js" ] }
});
