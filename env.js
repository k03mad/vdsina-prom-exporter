import {codeText, errorText} from './app/helpers/colors.js';

const TOKEN_ENV_NAME = 'VDSINA_API_TOKEN';
const TOKEN_NPM_PARAM_NAME = 'token';

const env = {
    server: {
        port: process.env.npm_config_port
            || process.env.VDSINA_EXPORTER_PORT
            || 11_015,
    },
    vdsina: {
        token: process.env[TOKEN_ENV_NAME]
            || process.env[`npm_config_${TOKEN_NPM_PARAM_NAME}`],
    },
    metrics: {
        turnOff: process.env.npm_config_turnoff
            || process.env.VDSINA_EXPORTER_METRICS_TURN_OFF,
    },
    debug: process.env.DEBUG,
};

if (!env.vdsina.token) {
    console.error([
        errorText(' VDSina API token is not specified '),
        `> use env variable: ${codeText(TOKEN_ENV_NAME)}`,
        `> or npm parameter: ${codeText(`--${TOKEN_NPM_PARAM_NAME}`)}`,
        '> see readme',
    ].join('\n'));

    process.exit(1);
}

export default env;
