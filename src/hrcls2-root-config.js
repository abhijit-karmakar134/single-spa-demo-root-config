import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@hrcls2/single-spa-demo-cls-react-navbar",
  app: () => System.import("@hrcls2/single-spa-demo-cls-react-navbar"),
  activeWhen: ["/"],
  customProps : {domElement: document.getElementById('nav-container-cls')}
});

registerApplication({
  name: "@hrcls2/single-spa-demo-cls-react-cls-page",
  app: () => System.import("@hrcls2/single-spa-demo-cls-react-cls-page"),
  activeWhen: ["/cls"],
  customProps : {domElement: document.getElementById('cls-page-1')}
});

registerApplication({
  name: "@hrcls2/single-spa-demo-cls-vue-cls-page1",
  app: () => System.import("@hrcls2/single-spa-demo-cls-vue-cls-page1"),
  activeWhen: ["/dms"],
  customProps : {domElement: document.getElementById('dms-page-2')}
});

start({
  urlRerouteOnly: true,
});
