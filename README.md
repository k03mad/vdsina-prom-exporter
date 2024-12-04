# [VDSina — Prometheus] exporter

— [Get token](https://cp.vdsina.ru/user/list) \
— [Use correct Node.JS version](.nvmrc) \
— Start exporter:

```bash
# one time
npm run setup

# start app
npm run start --token=1234321 --port=11000 --turnoff=vdsina_balance
# or with envs
VDSINA_API_TOKEN=1234321 VDSINA_EXPORTER_PORT=11000 VDSINA_EXPORTER_METRICS_TURN_OFF=vdsina_balance npm run start
```

[grafana-dashboards](https://github.com/k03mad/grafana-dashboards/tree/master/export)
