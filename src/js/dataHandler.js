const set = window.localStorage.setItem ;

const get = (key, defaultVal) => {
  try{
    let value = localStorage.getItem(key);
    return (window.isUndefined(value) ? defaultVal : value);
  } catch (err){
    console.error("Error while retrieving data from localStorage : ",err);
    return defaultVal;
  }
}

exports["set"] = set;
exports["get"] = get;