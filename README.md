# Instalar las dependencias
npm install
# Iniciar el servidor de desarrollo
npm start
## Instalar Compodoc globalmente:
npm install -g @compodoc/compodoc
## Generar la documentación:
npx compodoc -p tsconfig.json -d docs --language es
## Levantar el servidor de documentación en localhost:8080:
npx compodoc -s -d docs