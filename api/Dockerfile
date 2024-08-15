# Basis-Image für Bun.js
FROM oven/bun:latest

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere das Projekt in das Arbeitsverzeichnis
COPY . .

# Installiere Abhängigkeiten
RUN bun install

# Exponiere den Port (falls die API z.B. auf Port 3000 läuft)
EXPOSE 3000

# Starte die API-Anwendung
CMD ["bun", "run", "index.ts"]
