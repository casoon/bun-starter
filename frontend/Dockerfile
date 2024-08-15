# Basis-Image für Bun.js
FROM oven/bun:latest

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere das Projekt in das Arbeitsverzeichnis
COPY . .

# Installiere Abhängigkeiten
RUN bun install

# Baue das Astro-Projekt
RUN bun run astro build

# Exponiere den Port
EXPOSE 3001

# Starte den Astro-Server
CMD ["bun", "run", "astro", "preview"]
