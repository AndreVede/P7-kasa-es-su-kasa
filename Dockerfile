# Build
FROM node:18-alpine3.16 AS builder

WORKDIR /app

ADD ./ ./

RUN npm i

RUN npm run build

# Utilise l'image alpine-httpd comme image de base
FROM httpd:alpine

# Copie les fichiers du build de l'application React dans le dossier de base d'Apache
COPY --from=builder /app/build/ /usr/local/apache2/htdocs/

# Copie le fichier de configuration httpd.conf dans le répertoire de configuration Apache
COPY httpd.conf /usr/local/apache2/conf/httpd.conf

# Suppression des .map

RUN find /usr/local/apache2/htdocs/ -type f -name "*.map" -delete
