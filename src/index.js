const fetch = require('isomorphic-unfetch');

const Utils = require('./helpers/utils');
const Constants = require('./helpers/constants');

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
   * @description From id to custom url
   * @function toCustomURL()
   * @param {String} steamID
   * @returns {String}
   */
  async toCustomURL(steamID) {
    const formattedID = Utils.parseParams(steamID);

    const url = `${Constants.BaseURL}/profiles/${formattedID}`;

    return this._request(url, 'customURL');
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

    return this._request(url, 'steamID64');
  }

  /**
   * @description From ID to full information
   * @function fromIDToProfile()
   * @param {String} steamID
   * @returns {String}
   */
  async fromIDToProfile(steamID) {
    const formattedID = Utils.parseParams(steamID);

    const url = `${Constants.BaseURL}/profiles/${formattedID}`;

    return this._request(url);
  }

  /**
   * @description From custom to full information
   * @function fromCustomToProfile()
   * @param {String} customURL
   * @returns {String}
   */
  async fromCustomToProfile(customURL) {
    const formattedID = Utils.parseParams(customURL);

    const url = `${Constants.BaseURL}/id/${formattedID}`;

    return this._request(url);
  }

  /**
   * @description From group custom url to id
   * @function fromCustomToProfile()
   * @param {String} groupURL
   * @returns {String}
   */
  async fromGroupURLToID(groupURL) {
    const formattedID = Utils.parseParams(groupURL);

    const url = `${Constants.BaseURL}/groups/${formattedID}/memberslistxml`;

    return this._request(url, 'groupID64');
  }

  /**
   * @description From group url to full information
   * @function fromCustomToProfile()
   * @param {String} groupURL
   * @returns {Promise}
   */
  async fromGroupUrlToProfile(groupURL) {
    const formattedID = Utils.parseParams(groupURL);

    const url = `${Constants.BaseURL}/groups/${formattedID}/memberslistxml`;

    return this._request(url);
  }

  /**
   * @description Formats endpoint and params into a url
   * @function _request()
   * @param {String} url
   * @returns {Promise}
   */
  async _request(url, output) {
    return new Promise((resolve, reject) => {
      fetch(`${url}?xml=1`)
        .then((res) => res.text())
        .then(async (data) => {
          if (!Utils.doesInclude(data, '<?xml') && Utils.doesInclude(data, '<error>')) {
            // Check if output is steam group xml data before parsing it in order to provide correct group not found message
            reject(new Error('Resource cannot be found'));
          }

          const parsedData = await Utils.parseXML(data);

          if (output) {
            resolve(parsedData[output][0]);
          }

          resolve(parsedData);
        })
        .catch((e) => reject(e));
    });
  }
}

SteamResolver.BaseURL = Constants.BaseURL;

module.exports = SteamResolver;
