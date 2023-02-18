# Utilise l'image alpine-httpd comme image de base
FROM httpd:alpine

# Copie les fichiers du build de l'application React dans le dossier de base d'Apache
COPY build/ /usr/local/apache2/htdocs/

# Copie le fichier de configuration httpd.conf dans le répertoire de configuration Apache
COPY httpd.conf /usr/local/apache2/conf/httpd.conf

# Suppression des .map

RUN find /usr/local/apache2/htdocs/ -type f -name "*.map" -delete