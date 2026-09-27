#!/bin/bash
# Launcher script for INCEL Localhost
PROJECT_DIR="/Users/danielsantander/Documents/INCEL"
SUPPORT_DIR="/Users/danielsantander/Library/Application Support/INCEL"
PLIST_PATH="$HOME/Library/LaunchAgents/com.losmanejadores.incel.server.plist"
PORT=8080

echo "=========================================="
echo "  🚀 INICIANDO INCEL - LOCALHOST SERVICIOS"
echo "=========================================="

# Sincronizar archivos al directorio de servicio persistente
if [ -d "$PROJECT_DIR" ] && [ -d "$SUPPORT_DIR" ]; then
    rsync -u -a "$PROJECT_DIR/" "$SUPPORT_DIR/" 2>/dev/null
fi

# Asegurar que el servicio persistente de launchd esté activo
if ! lsof -i :$PORT > /dev/null 2>&1; then
    echo "⚡ Reactivando servicio permanente de INCEL..."
    launchctl load -w "$PLIST_PATH" 2>/dev/null || true
    sleep 1
fi

if lsof -i :$PORT > /dev/null 2>&1; then
    echo "✅ Servidor local activo permanentemente en http://localhost:$PORT"
else
    echo "⚡ Arrancando servidor de respaldo en puerto $PORT..."
    cd "$SUPPORT_DIR" 2>/dev/null || cd "$PROJECT_DIR"
    nohup /usr/bin/python3 -m http.server $PORT > /dev/null 2>&1 &
    sleep 1
fi

echo "🌐 Abriendo http://localhost:$PORT en tu navegador..."
open "http://localhost:$PORT"

echo "=========================================="
echo "✨ INCEL está corriendo en http://localhost:$PORT"
echo "=========================================="
