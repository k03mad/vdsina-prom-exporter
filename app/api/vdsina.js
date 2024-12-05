import {requestCache} from '@k03mad/request';

import env from '../../env.js';

/** */
class VDSina {

    constructor() {
        this.url = 'https://userapi.vdsina.ru/v1/';
    }

    /**
     * @param {string} path
     * @param {object} opts
     * @param {number} opts.expire
     * @returns {Promise<object>}
     */
    async _getCache(path, {expire = 3600} = {}) {
        const {body} = await requestCache(this.url + path, {
            headers: {
                authorization: env.vdsina.token,
            },
        }, {expire});

        return body.data;
    }

    /**
     * @param {string} path
     * @returns {Promise<object>}
     */
    _get(path) {
        return this._getCache(path, {expire: 60});
    }

    getAccountBalance() {
        return this._getCache('account.balance');
    }

    getServers() {
        return this._getCache('server');
    }

    getServerId(id) {
        return this._get(`server/${id}`);
    }

    getServerStatId(id) {
        return this._get(`server.stat/${id}`);
    }

}

export default new VDSina();
