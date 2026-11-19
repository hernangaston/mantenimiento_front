# Sistema de gestión de mantenimiento — Frontend

Interfaz web del sistema de gestión de mantenimiento: activos, ubicaciones, tareas, operarios y órdenes de trabajo.

Proyecto final de la Tecnicatura Universitaria en Programación (UTN), 2024. El backend está en [mantenimiento](https://github.com/hernangaston/mantenimiento).

<!-- Agregar capturas: docs/capturas/*.png -->

## Qué incluye

- Login y registro de usuarios.
- Dashboard de inicio.
- Altas, bajas, modificaciones y listados de activos, edificios, pisos, sectores, ubicaciones, tags, tareas, tipos de tarea y órdenes de trabajo.
- Acceso por rol: un guard para usuarios autenticados (`AuthorizationGuard`) y otro para operarios (`operarioGuard`).
- Un interceptor HTTP agrega el token JWT a cada pedido y, si la API responde 401, cierra la sesión y vuelve al login.

## Stack

- Angular 18 y TypeScript
- Un servicio por recurso para consumir la API REST
- Documentación del código con Compodoc

## Estructura

```
src/app/components/   Una carpeta por pantalla o recurso
src/app/service/      Servicios HTTP hacia la API
src/app/guards/       Guards de autenticación y de rol
src/app/interceptors/ Interceptor que agrega el token a los pedidos
src/app/interfaces/   Tipos de los recursos
```

## Correr en local

Requiere el [backend](https://github.com/hernangaston/mantenimiento) corriendo en `http://localhost:3000`.

```bash
npm install
npm start
# http://localhost:4200
```

## Documentación del código

```bash
npx compodoc -p tsconfig.json -d docs --language es
npx compodoc -s -d docs
# http://localhost:8080
```

## Pendientes

- Mover la URL de la API a los archivos `environment` en lugar de tenerla fija en cada servicio.
- El rol se guarda en una cookie para decidir qué pantallas mostrar; los permisos por rol todavía no se validan en el backend.
