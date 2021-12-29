import {Parser, convertableToString} from 'xml2js';

/**
 * Internal helper to check if str is type string
 */
const isString = (str: any): boolean => {
    return typeof str === 'string' || str instanceof String;
};

/**
 * Internal helper to check if parameter is an array
 */
const isArray = (arr: any): boolean => {
    return Array.isArray(arr);
};

/**
 * Internal helper to check if string is empty
 */
const isStringEmpty = (str: any): boolean => {
    return !isString(str) || !str || str.trim().length === 0;
};

/**
 * Internal helper to check if parameter is a date
 */
const isDate = (date: any): boolean => {
    if (isString(date) || isArray(date) || date === undefined || date === null) return false;
    return date && Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date);
};

/**
 * Internal helper to check if parameter is an object
 */
const isObject = (obj: any): boolean => {
    if (isArray(obj) || isDate(obj)) return false;
    return obj !== null && typeof obj === 'object';
};

/**
 *  Internal helper to check if parameter is a number
 */
const isNumber = (num: any): boolean => {
    return !Number.isNaN(num) && !Number.isNaN(parseInt(num));
};

/**
 * Internal helper to check if string includes
 */
const doesInclude = (string: string, includes: string): boolean => {
    return String(string).includes(includes);
};

/**
 *  Parses the XML into something we're able to work with
 */
const parseXML = (data: convertableToString): object =>
    new Parser()
        .parseStringPromise(data)
        .then((parsed: object) => {
            // @ts-ignore
            if (parsed.profile) return parsed.profile;
            // @ts-ignore
            if (parsed.memberList) return parsed.memberList;

            return new Error('Resource cannot be found.');
        })
        .catch((e: Error) => e);

/**
 * Parses full steam links into just the id/custom section so we can always add a base.
 */
const parseParams = (param: string): string => {
    if (param.includes('steamcommunity.com/')) {
        // check if full url was provided
        const split = param.split('/');

        const index = param.endsWith('/') ? 2 : 1;

        return split[split.length - index];
    }

    // if the user already provided only the important part then just return the parameter
    return param;
};

export  {
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
