import VDSina from '../api/vdsina.js';
import {getCurrentFilename} from '../helpers/paths.js';

export default {
    name: getCurrentFilename(import.meta.url),
    help: 'Bandwidth',
    labelNames: ['type', 'server'],

    async collect(ctx) {
        ctx.reset();

        const servers = await VDSina.getServers();

        await Promise.all(
            servers.map(async server => {
                const {bandwidth, data} = await VDSina.getServerId(server.id);

                ctx.labels('current', server.name).set(bandwidth.current_month);
                ctx.labels('limit', server.name).set(data.traff.bytes);
            }),
        );
    },
};
