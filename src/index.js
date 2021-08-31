const fetch = require('isomorphic-unfetch');
// const _ = require('lodash');

const Utils = require('./helpers/utils');
const Constants = require('./helpers/constants');

/**
 * @class SteamResolver
 * @author Demian <devaccdemiann@gmail.com>
 * @description A Node.js custom url to id and the other way around resolver for steam
 * @example
 *     const SteamResolver = require('@faceit-helpers/steamResolver');
 *     const client = new SteamResolver();
 * @public
 * @version 1.0.0
 * @license MIT
 */
class SteamResolver {
  /**
   * @description From id to custom url
   * @function toCustomURL()
   * @param {String} steamID
   * @returns {String}
   */
  async toCustomURL(steamID) {
    const formattedID = Utils.parseParams(steamID);

    const url = `${Constants.BaseURL}/profiles/${formattedID}`;

    const res = await this._request(url);

    return res.customURL[0];
  }

  /**
   * @description From custom url to id
   * @function fromCustomURL()
   * @param {String} customURL
   * @returns {String}
   */
  async fromCustomURL(customURL) {
    const formattedID = Utils.parseParams(customURL);

    const url = `${Constants.BaseURL}/id/${formattedID}`;

    const res = await this._request(url);

    return res.steamID64[0];
  }

  /**
   * @description From 64 to full information
   * @function from64ToFull()
   * @param {String} steamID
   * @returns {String}
   */
  async from64ToFull(steamID) {
    const formattedID = Utils.parseParams(steamID);

    const url = `${Constants.BaseURL}/profiles/${formattedID}`;

    const res = await this._request(url);

    return res;
  }

  /**
   * @description From custom to full information
   * @function fromCustomToFull()
   * @param {String} customURL
   * @returns {String}
   */
  async fromCustomToFull(customURL) {
    const formattedID = Utils.parseParams(customURL);

    const url = `${Constants.BaseURL}/id/${formattedID}`;

    const res = await this._request(url);

    return res;
  }

  /**
   * @description From group custom url to id
   * @function fromCustomToFull()
   * @param {String} groupURL
   * @returns {String}
   */
  async fromGroupURLToID(groupURL) {
    const formattedID = Utils.parseParams(groupURL);

    const url = `${Constants.BaseURL}/groups/${formattedID}/memberslistxml`;

    const res = await this._request(url);

    return res.groupID64[0];
  }

  /**
   * @description From group url to full information
   * @function fromCustomToFull()
   * @param {String} groupURL
   * @returns {Promise}
   */
  async fromGroupUrlToFull(groupURL) {
    const formattedID = Utils.parseParams(groupURL);

    const url = `${Constants.BaseURL}/groups/${formattedID}/memberslistxml`;

    const res = await this._request(url);

    return res;
  }

  /**
   * @description Formats endpoint and params into a url
   * @function _request()
   * @param {String} url
   * @returns {Promise}
   */
  async _request(url) {
    return fetch(`${url}?xml=1`)
      .then((res) => res.text())
      .then((output) => {
        if (!Utils.doesInclude(output, '<?xml') && Utils.doesInclude(output, '<error>')) {
          // Check if output is steam group xml data before parsing it in order to provide correct group not found message
          Utils._WARN_('Not found', 'Resource cannot be found.');
        }

        return Utils.parseXML(output);
      })
      .catch((e) => Utils._WARN_('Error', `Error trying to reach Steam: ${e}`));
  }
}

SteamResolver.BaseURL = Constants.BaseURL;

module.exports = SteamResolver;
