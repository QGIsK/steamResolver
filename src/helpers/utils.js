const xmlParser = require('xml2js');

/**
 * @description Internal helper to check if parameter is a string
 * @function isString
 * @param {*} str
 * @returns {boolean}
 */
const isString = (str) => {
  return typeof str === 'string' || str instanceof String;
};

/**
 * @description Internal helper to check if parameter is an array
 * @function isArray
 * @param {*} arr
 * @returns {boolean}
 */
const isArray = (arr) => {
  return Array.isArray(arr);
};

/**
 * @description Internal helper to check if string is empty
 * @function isStringEmpty
 * @param {*} str
 * @returns {boolean}
 */
const isStringEmpty = (str) => {
  if (!isString(str)) return false;
  return str.length === 0;
};

/**
 * @description Internal helper to check if parameter is a date
 * @function isDate
 * @param {*} date
 * @returns {boolean}
 */
const isDate = (date) => {
  if (isString(date) || isArray(date) || date === undefined || date === null) return false;
  return date && Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date);
};

/**
 * @description Internal helper to check if parameter is an object
 * @function isObject
 * @param {*} obj
 * @returns {boolean}
 */
const isObject = (obj) => {
  if (isArray(obj) || isDate(obj)) return false;
  return obj !== null && typeof obj === 'object';
};

/**
 * @description Internal helper to check if parameter is a number
 * @function isNumber
 * @param {*} num
 * @returns {boolean}
 */
const isNumber = (num) => {
  // eslint-disable-next-line radix
  return !Number.isNaN(num) && !Number.isNaN(parseInt(num));
};

/**
 * @description Internal helper to check if string includes
 * @function doesInclude
 * @param {String} string
 * @returns {boolean}
 */
const doesInclude = (string, includes) => {
  return String(string).includes(includes);
};

const parseXML = (data) =>
  new xmlParser.Parser()
    .parseStringPromise(data)
    .then((parsed) => {
      if (parsed.profile) return parsed.profile;
      if (parsed.memberList) return parsed.memberList;

      return new Error('Resource cannot be found.');
    })
    .catch((e) => e);

const parseParams = (param) => {
  if (param.includes('steamcommunity.com/')) {
    // check if full url was provided
    const split = param.split('/');

    const index = param.endsWith('/') ? 2 : 1;

    return split[split.length - index];
  }
  // if the user already provided only the important part then just return the parameter again
  return param;
};

module.exports = {
  isString,
  isStringEmpty,
  isDate,
  isObject,
  isNumber,
  isArray,
  doesInclude,
  parseXML,
  parseParams,
};
