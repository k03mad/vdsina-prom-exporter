import VDSina from '../api/vdsina.js';
import {getCurrentFilename} from '../helpers/paths.js';

export default {
    name: getCurrentFilename(import.meta.url),
    help: 'Balance',
    labelNames: ['type'],

    async collect(ctx) {
        ctx.reset();

        const balance = await VDSina.getAccountBalance();

        Object.entries(balance).forEach(([key, value]) => {
            ctx.labels(key).set(Number(value));
        });
    },
};
