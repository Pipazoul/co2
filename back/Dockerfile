FROM alpine:3 as downloader

RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.13.4/pocketbase_0.13.4_linux_amd64.zip \
    && unzip pocketbase_0.13.4_linux_amd64.zip \
    && chmod +x /pocketbase

FROM alpine:3
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*

EXPOSE 8090

COPY --from=downloader /pocketbase /usr/local/bin/pocketbase

RUN mkdir /pb_data
COPY ./pb_migrations /pb_migrations

RUN pocketbase migrate --migrationsDir=/pb_migration --dir=/pb_data/

RUN ls -la /pb_data

ENTRYPOINT ["/usr/local/bin/pocketbase", "serve", "--http=0.0.0.0:8900", "--dir=/pb_data", "--migrationsDir=/pb_migration"]