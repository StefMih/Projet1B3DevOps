FROM nginx:stable

# Copier les fichiers statiques dans le dossier web par défaut de Nginx
COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
