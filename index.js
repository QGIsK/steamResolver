// Initial credit https://github/HerrEurobeat/node-steamid-resolver

const https = require('https');
const xml2js = require('xml2js');

const steamBase = 'https://steamcommunity.com';

/**
 * Internal function to get the XML information of a user or group
 * @param {String} url Full URL of the user or group to steamcommunity
 * @returns {Promise} Promise object of the user's or group's full information or an error with description
 */
function getXMLinfo(url) {
  return new Promise((resolve, reject) => {
    try {
      let output = '';

      https.get(`${url}?xml=1`, function (result) {
        result.on('data', function (chunk) {
          output += chunk;
        });

        result.on('end', () => {
          if (!String(output).includes('<?xml') && !String(output).includes('<error>')) {
            // Check if output is steam group xml data before parsing it in order to provide correct group not found message
            reject(new Error('The specified group could not be found.'));
          }

          new xml2js.Parser().parseString(output, function (err, parsed) {
            // parse the XML data from Steam into an object
            if (err) {
              reject(new Error(`Error parsing user info xml: ${err}`));
            }

            if (parsed.response && parsed.response.error) {
              reject(new Error(parsed.response.error));
            }

            if (parsed.profile || parsed.memberList) {
              if (parsed.profile) resolve(parsed.profile); // resolve promise and pass data back to caller
              if (parsed.memberList) resolve(parsed.memberList);
            } else {
              reject(new Error('No profile information returned'));
            }
          });
        });
      });
    } catch (err) {
      reject(new Error(`Error trying to reach Steam: ${err}`)); // TODO: also check for status code to see if Steam is down
    }
  });
}

/**
 * Internal function to process the id parameter in order to also accept urls from the user
 * @param {String} param The parameter which the user provided
 * @returns {String} The processed parameter
 */
function processParameter(param) {
  if (param.includes('steamcommunity/')) {
    // check if full url was provided
    const split = param.split('/');

    return split[split.length - 1];
  }
  // if the user already provided only the important part then just return the parameter again
  return param;
}

/**
 * Get the custom profile url of a user as String by their steamID64 or full URL
 * @param {String} steamID64 steamID64 or full URL of the user
 * @param {function} [callback] Called with `err` (String) and `customURL` (String) parameters on completion
 */
module.exports.steamID64ToCustomUrl = (steamID64) => {
  steamID64 = processParameter(steamID64);

  return getXMLinfo(`${steamBase}/profiles/${steamID64}`)
    .then((res) => {
      return res.customURL[0];
    })
    .catch((err) => {
      return err;
    });
};

/**
 * Get the steamID64 of a user as String by their custom profile url or full URL
 * @param {String} customID Custom ID or full URL of the user as String
 * @param {function} [callback] Called with `err` (String) and `steamID64` (String) parameters on completion
 */
module.exports.customUrlTosteamID64 = (customID) => {
  customID = processParameter(customID);

  return getXMLinfo(`${steamBase}/id/${customID}`)
    .then((res) => {
      return res.steamID64[0];
    })
    .catch((err) => {
      return err;
    });
};

/**
 * Get the full information of a user as Object by their steamID64 or full URL
 * @param {String} steamID64 steamID64 or full URL of the user as String
 * @param {function} [callback] Called with `err` (String) and `info` (Object) parameters on completion
 */
module.exports.steamID64ToFullInfo = (steamID64) => {
  steamID64 = processParameter(steamID64);

  return getXMLinfo(`${steamBase}/profiles/${steamID64}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

/**
 * Get the full information of a user as Object by their custom profile url or full URL
 * @param {String} customID Custom ID or full URL of the user as String
 * @param {function} [callback] Called with `err` (String) and `info` (Object) parameters on completion
 */
module.exports.customUrlToFullInfo = (customID) => {
  customID = processParameter(customID);

  return getXMLinfo(`${steamBase}/id/${customID}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

/**
 * Get the group64ID of a group as String by groupURL or full URL
 * @param {String} groupURL Custom Name of the group or full URL as String
 * @param @param {function} [callback] Called with `err` (String) and `groupID64` (String) parameters on completion
 */
module.exports.groupUrlToGroupID64 = (groupURL) => {
  groupURL = processParameter(groupURL);

  return getXMLinfo(`${steamBase}/groups/${groupURL}/memberslistxml`)
    .then((res) => {
      return res.groupID64[0];
    })
    .catch((err) => {
      return err;
    });
};

/**
 * Get the full information of a group as Object by groupURL or full URL
 * @param {String} groupURL Custom Name of the group or full URL as String
 * @param {function} [callback] Called with `err` (String) and `info` (Object) parameters on completion
 */
module.exports.groupUrlToFullInfo = (groupURL) => {
  groupURL = processParameter(groupURL);

  return getXMLinfo(`${steamBase}/groups/${groupURL}/memberslistxml`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
