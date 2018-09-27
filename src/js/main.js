const Data = require('./dataHandler.js');

const app = () => {
  let accessToken = Data.get("x-access-token");
  if(window.isUndefined(accessToken)){
    window.__showScreen({name:"Login"});
  } else {
    // Navigate to user flow
  }
}

exports.app = app;