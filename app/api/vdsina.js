import {request, requestCache} from '@k03mad/request';

import env from '../../env.js';

/** */
class VDSina {

    constructor() {
        this.url = 'https://userapi.vdsina.ru/v1/';
    }

    /**
     * @param {string} path
     * @returns {Promise<object>}
     */
    async _get(path) {
        const {body} = await request(this.url + path, {
            headers: {
                authorization: env.vdsina.token,
            },
        });

        return body.data;
    }

    /**
     * @param {string} path
     * @returns {Promise<object>}
     */
    async _getCache(path) {
        const {body} = await requestCache(this.url + path, {
            headers: {
                authorization: env.vdsina.token,
            },
        }, {expire: 1800});

        return body.data;
    }

    getAccountBalance() {
        return this._getCache('account.balance');
    }

    getServers() {
        return this._getCache('server');
    }

    getServerId(id) {
        return this._getCache(`server/${id}`);
    }

    getServerStatId(id) {
        return this._getCache(`server.stat/${id}`);
    }

}

export default new VDSina();
