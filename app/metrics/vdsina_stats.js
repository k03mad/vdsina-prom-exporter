import VDSina from '../api/vdsina.js';
import {getCurrentFilename} from '../helpers/paths.js';

export default {
    name: getCurrentFilename(import.meta.url),
    help: 'Stats',
    labelNames: ['type', 'server'],

    async collect(ctx) {
        ctx.reset();

        const servers = await VDSina.getServers();

        await Promise.all(
            servers.map(async server => {
                const data = await VDSina.getServerStatId(server.id);
                const {stat} = data.at(-1);

                Object.entries(stat).forEach(([key, value]) => {
                    ctx.labels(key, server.name).set(Number(value.toFixed(2)));
                });
            }),
        );
    },
};
