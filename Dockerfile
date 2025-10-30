# Dockerfile para Portfolio con Nginx
FROM nginx:alpine

# Copiar archivos estáticos al directorio de nginx
COPY index.html /usr/share/nginx/html/
COPY proyectos.html /usr/share/nginx/html/
COPY curriculum.html /usr/share/nginx/html/

# Copiar directorios
COPY Css /usr/share/nginx/html/Css
COPY Js /usr/share/nginx/html/Js
COPY Media /usr/share/nginx/html/Media
COPY assets /usr/share/nginx/html/assets

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Comando por defecto de nginx
CMD ["nginx", "-g", "daemon off;"]
