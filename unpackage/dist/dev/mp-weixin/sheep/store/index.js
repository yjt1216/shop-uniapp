"use strict";
const common_vendor = require("../../common/vendor.js");
const files = /* @__PURE__ */ Object.assign({});
const modules = {};
Object.keys(files).forEach((key) => {
  modules[key.replace(/(.*\/)*([^.]+).*/gi, "$2")] = files[key].default;
});
const setupPinia = (app) => {
  const pinia = common_vendor.createPinia();
  pinia.use(common_vendor.index);
  app.use(pinia);
};
exports.setupPinia = setupPinia;
