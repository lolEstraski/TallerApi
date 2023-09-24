FROM mysql:8.0

ENV DIRECTORY='/home/db/'
WORKDIR ${DIRECTORY}

ENV MYSQL_ROOT_PASSWORD=3106316813
ENV MYSQL_DATABASE=users

COPY create-db.sql /docker-entrypoint-initdb.d/
COPY dataset.sql   /docker-entrypoint-initdb.d/

EXPOSE 3306