import React from "react";
import ReactDOM from "react-dom";

import Login from "./views/login";

const main  = require("./js/main.js");
const globalFn = require("./js/globalHelpers.js");

const screen = {
  "Login" : <Login />
}

/*
 * Here screenInfo is a JSON object has property of name (screen name that need to be rendered)
 * and data (data that need to be feed for current screen)
 */
window.__showScreen = (screenInfo) => {
  let curentScreen = screen[screenInfo.name];
  if(window.isUndefined(curentScreen)){
    console.error("currentScreen [",screenInfo.name,"] is not present in the screen tag. please verify and add to the screen object in index.js");
  } else {
    try {
      ReactDOM.render( curentScreen, document.getElementById('root'));
    } catch(e) {
      console.error(e)
    }
  }
}

main.app();