Deployment
Objetivo

El objetivo del despliegue fue publicar la aplicación completa para que pudiera utilizarse desde cualquier navegador sin necesidad de ejecutar el entorno local.

La aplicación está compuesta por:

Frontend desarrollado con React y TypeScript.
API REST desplegada mediante funciones serverless en Vercel.
Plataforma utilizada

Se utilizó Vercel debido a su integración directa con GitHub y su compatibilidad con proyectos creados con Vite.

Sitio oficial:

https://vercel.com

Preparación del proyecto

Antes del despliegue se verificó:

Correcta compilación del frontend.
Funcionamiento de React Router.
Funcionamiento de la API.
Ausencia de errores críticos en consola.
Configuración del repositorio GitHub.
Despliegue del frontend
Paso 1

Subir el proyecto a GitHub.

Paso 2

Acceder a Vercel.

Paso 3

Seleccionar:

Add New Project

Paso 4

Importar el repositorio:

pulsewear-manager

Paso 5

Configurar:

Build Command:

npm run build

Output Directory:

dist

Install Command:

npm install
Paso 6

Pulsar Deploy.

Despliegue de la API

La API se desplegó utilizando funciones serverless de Vercel.

Se creó una carpeta:

api/

con un manejador que expone los endpoints necesarios.

Endpoints disponibles:

Productos
GET /api/v1/products
Pedidos
GET /api/v1/orders
POST /api/v1/orders
PATCH /api/v1/orders/:id/status
Pruebas realizadas

Tras el despliegue se verificó:

Catálogo
Carga correcta de productos.
Visualización de imágenes.
Detalle de producto
Visualización correcta de información.
Selección de talla.
Comparador
Comparación entre productos.
Carrito
Añadir productos.
Eliminar productos.
Checkout
Envío correcto de pedidos.
Administración
Listado de pedidos.
Filtrado por estado.
Actualización de estados.
Eliminación de pedidos recibidos.
Responsive
Ordenador.
Tablet.
Móvil.
Resultado final

La aplicación quedó desplegada correctamente y accesible desde Internet.

Frontend:

Pegar URL de Vercel.

API:

Pegar URL de Vercel seguida de:

/api/v1/products
Conclusión

El despliegue permitió publicar tanto el frontend como la API utilizando una única plataforma. Esto facilitó la integración entre cliente y servidor y permitió validar el funcionamiento completo de la aplicación en un entorno de producción.