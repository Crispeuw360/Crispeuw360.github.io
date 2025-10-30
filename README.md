# Igor Portfolio

Frontend-only portfolio with dark theme (black/gray) and green accent.

## Structure
- `index.html`: structure and content
- `styles.css`: styles (responsive, dark)
- `script.js`: interactions (mobile nav, smooth scroll)
- `assets/`: favicon and assets

## Run locally
Open `index.html` in your browser.

## Docker Deployment

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed
- Docker Desktop must be running before executing any docker commands

**Nota:** Si ves un error de conexión, asegúrate de que Docker Desktop esté iniciado en Windows.

### Quick Start

#### Option 1: Using Docker Compose (Recomendado)
```bash
# Construir y ejecutar el contenedor
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener el contenedor
docker-compose down
```

El portfolio estará disponible en: `http://localhost`

#### Option 2: Using Docker directly
```bash
# Construir la imagen
docker build -t portfolio-nginx .

# Ejecutar el contenedor
docker run -d -p 80:80 --name portfolio portfolio-nginx

# Ver logs
docker logs -f portfolio

# Detener el contenedor
docker stop portfolio
docker rm portfolio
```

### Desarrollo con Hot-reload

Para habilitar el hot-reload durante el desarrollo, descomenta las líneas de `volumes` en el archivo `docker-compose.yml`:

```yaml
volumes:
  - ./index.html:/usr/share/nginx/html/index.html
  - ./proyectos.html:/usr/share/nginx/html/proyectos.html
  - ./curriculum.html:/usr/share/nginx/html/curriculum.html
  # ... etc
```

Luego reinicia el contenedor:
```bash
docker-compose down
docker-compose up -d
```

### Comandos útiles

```bash
# Reconstruir la imagen
docker-compose build --no-cache

# Ver estado del contenedor
docker-compose ps

# Acceder al contenedor
docker-compose exec portfolio sh

# Ver health check
curl http://localhost/health
```

### Health Check

El contenedor incluye un endpoint de health check en `/health` para monitoreo.

### Personalización de Nginx

Edita el archivo `nginx.conf` para personalizar la configuración de Nginx (compresión, caché, etc.).

## Deploy to GitHub Pages
1. Create a repo on GitHub (e.g., `portfolio`).
2. In this folder, run:
```bash
git init
git add .
git commit -m "feat: first portfolio version"
git branch -M main
git remote add origin https://github.com/<your-user>/portfolio.git
git push -u origin main
```
3. On GitHub: Settings -> Pages
   - Source: Deploy from a branch
   - Branch: main, Folder: /(root)
   - Save
4. After a minute, your site is live at: `https://<your-user>.github.io/portfolio/`

## Customize
- Update texts in sections
- Replace demo/code links
- Update social links in footer

## License
MIT
