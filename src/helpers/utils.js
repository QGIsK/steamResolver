/**
 * @typedef {import("xml2js").convertableToString} ConvertableToString
 */

import xmlParser from 'xml2js';

/**
 * @function isString
 * @description Internal helper to check if parameter is a string
 *
 * @param {any} str
 *
 * @return {boolean}
 */
const isString = str => {
    return typeof str === 'string' || str instanceof String;
};

/**
 * @function isArray
 * @description Internal helper to check if parameter is an array
 *
 * @param {any} arr
 *
 * @return {boolean}
 */
const isArray = arr => {
    return Array.isArray(arr);
};

/**
 * @function isStringEmpty
 * @description Internal helper to check if string is empty
 *
 * @param {any} str
 *
 * @return {boolean}
 */
const isStringEmpty = str => {
    if (!isString(str)) return false;
    return str.length === 0;
};

/**
 * @function isDate
 * @description Internal helper to check if parameter is a date
 *
 * @param {*} date
 *
 * @return {boolean}
 */
const isDate = date => {
    if (isString(date) || isArray(date) || date === undefined || date === null) return false;
    return date && Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date);
};

/**
 * @function isObject
 * @description Internal helper to check if parameter is an object
 *
 * @param {any} obj
 *
 * @return {boolean}
 */
const isObject = obj => {
    if (isArray(obj) || isDate(obj)) return false;
    return obj !== null && typeof obj === 'object';
};

/**
 * @function isNumber
 * @description Internal helper to check if parameter is a number
 *
 * @param {any} num
 *
 * @return {boolean}
 */
const isNumber = num => {
    return !Number.isNaN(num) && !Number.isNaN(parseInt(num));
};

/**
 * @function doesInclude
 * @description Internal helper to check if string includes
 *
 * @param {string | ConvertableToString} string
 * @param {string} includes
 *
 * @return {boolean}
 */
const doesInclude = (string, includes) => {
    return String(string).includes(includes);
};

/**
 * @function parseXML
 * @description Parses the XML into something we're able to work with
 *
 * @param {xmlParser.convertableToString} data
 *
 * @return {Error | Object | String | Number}
 */
const parseXML = data =>
    new xmlParser.Parser()
        .parseStringPromise(data)
        .then(parsed => {
            if (parsed.profile) return parsed.profile;
            if (parsed.memberList) return parsed.memberList;

            return new Error('Resource cannot be found.');
        })
        .catch(e => e);

/**
 * @function parseParams
 * @description Parses full steam links into just the id/custom section so we can always add a base.
 *
 * @param {string} param
 *
 * @return {string}
 */
const parseParams = param => {
    if (param.includes('steamcommunity.com/')) {
        // check if full url was provided
        const split = param.split('/');

        const index = param.endsWith('/') ? 2 : 1;

        return split[split.length - index];
    }

    // if the user already provided only the important part then just return the parameter
    return param;
};

export default {
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
