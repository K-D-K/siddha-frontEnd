"use-strict"

const isUndefined = val => ((typeof val == "undefined") || (val == null));

const isObject = val => (typeof val == "object");

const isArray = val => ((!isUndefined(val)) && (Array.isArray(val)));

if(!isUndefined(window)){
  window["isUndefined"] = isUndefined;
  window["isObject"] = isObject;
  window["isArray"] = isArray;
}