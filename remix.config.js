export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  // routes(defineRoutes) {
  //   return defineRoutes((route) => {
  //     route("/", "pages/Home/route.tsx", { index: true });
  //     route("arc-workflow-builder", "pages/ARCWorkflowBuilder/route.tsx");
  //   });
  // },
  postcss: (config) => {
    config.plugins.push(require("tailwindcss"), require("autoprefixer"));
    return config;
  },
};