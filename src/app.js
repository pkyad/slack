import "./stylesheets/main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";
import "../node_modules/angular/angular.min.js"
import "../node_modules/angular/angular.min.js"
import "./ngBase.js"
import "../node_modules/@uirouter/angularjs/release/angular-ui-router.min.js"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote } from "electron";
import jetpack from "fs-jetpack";
import { greet } from "./hello_world/hello_world";
import env from "env";

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read("package.json", "json");

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

// document.querySelector("#app").style.display = "block";
// document.querySelector("#greet").innerHTML = greet();
// document.querySelector("#os").innerHTML = osMap[process.platform];
// document.querySelector("#env").innerHTML = env.name;
// document.querySelector("#electron-version").innerHTML =
  // process.versions.electron;
