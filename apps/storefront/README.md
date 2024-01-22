# Sentry Clean

```bash
docker exec -it sentry_web sentry cleanup --days 7
docker exec -it onpremise_postgres_1 vacuumdb -U postgres -d sentry -t nodestore_node -v -f --analyze
```
