import fetch from 'isomorphic-unfetch';

import Utils from './helpers/utils.js';
import Constants from './helpers/constants.js';

/**
 * @class SteamResolver
 * @author Demian <devaccdemiann@gmail.com>
 * @description A Node.js custom url to id and the other way around resolver for steam
 * @example
 *     const SteamResolver = require('@QGIsK/steamResolver');
 *     const client = new SteamResolver();
 * @public
 * @license MIT
 */
class SteamResolver {
    /**
     * @function toCustomURL
     * @description From id to custom url
     *
     * @param {String} steamID
     *
     * @return {Promise<Object>}
     */
    async toCustomURL(steamID) {
        const formattedID = Utils.parseParams(steamID);

        const url = `${Constants.BaseURL}/profiles/${formattedID}`;

        return this._request(url, 'customURL');
    }

    /**
     * @function fromCustomURL
     * @description From custom url to id
     *
     * @param {String} customURL
     *
     * @return {Promise<Object>}
     */
    async fromCustomURL(customURL) {
        const formattedID = Utils.parseParams(customURL);

        const url = `${Constants.BaseURL}/id/${formattedID}`;

        return this._request(url, 'steamID64');
    }

    /**
     * @function fromIDToProfile
     * @description From ID to full information
     *
     * @param {String} steamID
     *
     * @return {Promise<Object>}
     */
    async fromIDToProfile(steamID) {
        const formattedID = Utils.parseParams(steamID);

        const url = `${Constants.BaseURL}/profiles/${formattedID}`;

        return this._request(url);
    }

    /**
     * @function fromCustomToProfile
     * @description From custom to full information
     *
     * @param {String} customURL
     *
     * @return {Promise<Object>}
     */
    async fromCustomToProfile(customURL) {
        const formattedID = Utils.parseParams(customURL);

        const url = `${Constants.BaseURL}/id/${formattedID}`;

        return this._request(url);
    }

    /**
     * @function fromCustomToProfile
     * @description From group custom url to id
     *
     * @param {String} groupURL
     *
     * @return {Promise<Object>}
     */
    async fromGroupURLToID(groupURL) {
        const formattedID = Utils.parseParams(groupURL);

        const url = `${Constants.BaseURL}/groups/${formattedID}/memberslistxml`;

        return this._request(url, 'groupID64');
    }

    /**
     * @function fromGIDToCustomURL
     * @description From GID to Custom Group Url
     *
     * @param {String} gid
     *
     * @return {Promise<String>}
     */
    async fromGIDToCustomURL(gid) {
        const formattedID = Utils.parseParams(gid);

        const url = `${Constants.BaseURL}/gid/${formattedID}/memberslistxml`;

        const res = await this._request(url, 'groupDetails');

        // The response on this endpoint is abit different to the others
        // so so is the response
        // @ts-ignore
        return res.groupURL[0];
    }

    /**
     * @function fromCustomToProfile
     * @description From group url to full information
     *
     * @param {String} groupURL
     *
     * @return {Promise<Object>}
     */
    async fromGroupUrlToProfile(groupURL) {
        const formattedID = Utils.parseParams(groupURL);

        const url = `${Constants.BaseURL}/groups/${formattedID}/memberslistxml`;

        return this._request(url);
    }

    /**
     * @function fromGIDToProfile
     * @description From group url to full information
     *
     * @param {String} gid
     *
     * @return {Promise<Object>}
     */
    async fromGIDToProfile(gid) {
        const formattedID = Utils.parseParams(gid);

        const url = `${Constants.BaseURL}/gid/${formattedID}/memberslistxml`;

        return this._request(url);
    }

    /**
     * @function _request
     * @description Formats endpoint and params into a url
     *
     * @param {String} url
     * @param {String} [output]
     *
     * @return {Promise<String | Object>}
     */
    async _request(url, output) {
        return new Promise((resolve, reject) => {
            fetch(`${url}?xml=1`)
                .then((/** @type {{ text: () => any; }} */ res) => res.text())
                .then(async (/** @type {string | import("xml2js").convertableToString} */ data) => {
                    if (!Utils.doesInclude(data, '<?xml') && Utils.doesInclude(data, '<error>')) {
                        // Check if output is steam group xml data before parsing it in order to provide correct group not found message
                        reject(new Error('Resource cannot be found'));
                    }

                    const parsedData = await Utils.parseXML(data);

                    // @ts-ignore
                    if (output) resolve(parsedData[output][0]);

                    resolve(parsedData);
                })
                .catch((/** @type {Error} */ e) => reject(e));
        });
    }
}

SteamResolver.BaseURL = Constants.BaseURL;

export default SteamResolver;
