import fetch from 'isomorphic-unfetch';

import {parseParams, doesInclude, parseXML} from './helpers/utils';
import {BaseURL} from './helpers/constants';

class SteamResolver {
    static BaseURL: string;

    /**
     * From id to custom url
     */
    async toCustomURL(steamID: string) {
        const formattedID = parseParams(steamID);

        const url: string = `${BaseURL}/profiles/${formattedID}`;

        return this._request(url, 'customURL');
    }

    /**
     * From custom url to id
     */
    async fromCustomURL(customURL: string) {
        const formattedID = parseParams(customURL);

        const url: string = `${BaseURL}/id/${formattedID}`;

        return this._request(url, 'steamID64');
    }

    /**
     * From ID to full information
     */
    async fromIDToProfile(steamID: string) {
        const formattedID = parseParams(steamID);

        const url: string = `${BaseURL}/profiles/${formattedID}`;

        return this._request(url);
    }

    /**
     * From custom to full information
     */
    async fromCustomToProfile(customURL: string) {
        const formattedID = parseParams(customURL);

        const url: string = `${BaseURL}/id/${formattedID}`;

        return this._request(url);
    }

    /**
     * From group custom url to id
     */
    async fromGroupURLToID(groupURL: string) {
        const formattedID = parseParams(groupURL);

        const url: string = `${BaseURL}/groups/${formattedID}/memberslistxml`;

        return this._request(url, 'groupID64');
    }

    /**
     * From GID to Custom Group Url
     */
    async fromGIDToCustomURL(gid: string) {
        const formattedID = parseParams(gid);

        const url: string = `${BaseURL}/gid/${formattedID}/memberslistxml`;

        const res = await this._request(url, 'groupDetails');

        // The response on this endpoint is abit different to the others
        // so so is the response
        // @ts-ignore
        return res.groupURL[0];
    }

    /**
     * From group url to full information
     */
    async fromGroupUrlToProfile(groupURL: string) {
        const formattedID = parseParams(groupURL);

        const url: string = `${BaseURL}/groups/${formattedID}/memberslistxml`;

        return this._request(url);
    }

    /**
     * From group url to full information
     */
    async fromGIDToProfile(gid: string) {
        const formattedID = parseParams(gid);

        const url: string = `${BaseURL}/gid/${formattedID}/memberslistxml`;

        return this._request(url);
    }

    /**
     * Send requests then parses
     */
    async _request(url: string, output?: string) {
        return new Promise((resolve, reject) => {
            fetch(`${url}?xml=1`)
                .then((res: any) => res.text())
                .then(async (data: string) => {
                    if (!doesInclude(data, '<?xml') && doesInclude(data, '<error>')) {
                        // Check if output is steam group xml data before parsing it in order to provide correct group not found message
                        reject(new Error('Resource cannot be found'));
                    }

                    const parsedData = await parseXML(data);

                    // @ts-ignore
                    if (output) resolve(parsedData[output][0]);

                    resolve(parsedData);
                })
                .catch((e: Error) => reject(e));
        });
    }
}

SteamResolver.BaseURL = BaseURL;

export {SteamResolver, SteamResolver as default};
