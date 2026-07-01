PulseWear Manager

Aplicación fullstack para la gestión y venta online de ropa deportiva.








Descripción

PulseWear Manager es una tienda online desarrollada con React, TypeScript, Tailwind CSS y una API REST.

El proyecto permite visualizar productos, filtrar por categorías, comparar artículos, seleccionar tallas, añadir productos al carrito, realizar pedidos y gestionar esos pedidos desde un panel de administración.

La aplicación fue creada como proyecto fullstack, aplicando arquitectura por capas en el backend, cliente de API tipado en el frontend y una organización basada en metodologías ágiles.

Demo

Frontend desplegado:

(https://pulsewear-manager-ke21.vercel.app/)

API de productos:

(https://pulsewear-manager-ke21.vercel.app/api/v1/products)

Trello:
https://trello.com/b/w42j7TUe/pulsewear-desarrollo-fullstack

Home
Catálogo
Detalle de producto
Checkout
Panel de administración
Funcionalidades principales
Catálogo de productos.
Filtro por categorías.
Buscador de productos.
Página de detalle.
Selección de talla.
Productos relacionados.
Comparador de productos.
Carrito de compra.
Eliminación de productos del carrito.
Checkout con validación.
Panel de administración.
Gestión de pedidos.
Cambio de estado de pedidos.
API REST.
Despliegue en Vercel.
Tecnologías utilizadas
Frontend
React
TypeScript
Vite
Tailwind CSS
React Router
Context API
Lucide React
Framer Motion
Backend
Node.js
Express
TypeScript
API REST
JSON como almacenamiento simulado
Funciones serverless en Vercel
Organización
Git
GitHub
Trello
Documentación en Markdown
Estructura del proyecto
pulsewear-manager/
│
├── api/
│   └── [...path].ts
│
├── docs/
│   ├── agile.md
│   ├── idea.md
│   ├── project-management.md
│   ├── design.md
│   ├── components.md
│   ├── hooks.md
│   ├── context.md
│   ├── routing.md
│   ├── forms.md
│   ├── api.md
│   ├── api-client.md
│   ├── testing.md
│   ├── deployment.md
│   └── retrospective.md
│
├── public/
│   └── products/
│
├── server/
│   ├── README.md
│   └── src/
│       ├── controllers/
│       ├── data/
│       ├── routes/
│       ├── services/
│       └── types/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── types/
│   └── utils/
│
├── package.json
├── vercel.json
└── README.md

Instalación y ejecución local
1. Clonar el repositorio
git clone https://github.com/Sanxlo/pulsewear-manager.git
2. Entrar en el proyecto
cd pulsewear-manager
3. Instalar dependencias
npm install
4. Ejecutar frontend
npm run dev

El frontend se ejecutará en:

http://localhost:5173
5. Ejecutar backend local
npm run server

El backend local se ejecutará en:

http://localhost:3001
API

La API principal está documentada con más detalle en:

server/README.md

Endpoints principales:

GET /api/v1/products
GET /api/v1/orders
POST /api/v1/orders
PATCH /api/v1/orders/:id/status
DELETE /api/v1/orders/:id
Gestión del estado

El proyecto utiliza Context API para compartir estado global.

CartContext

Gestiona:

Productos añadidos al carrito.
Tallas seleccionadas.
Eliminación de productos.
Vaciado del carrito.
OrderContext

Gestiona:

Pedidos.
Creación de pedidos.
Actualización de estados.
Eliminación de pedidos.
Hooks utilizados

El proyecto utiliza:

useState
useEffect
useMemo
useCallback
Custom hook useProducts

También se implementó lazy loading con React.lazy y Suspense para mejorar la carga inicial de páginas.

Documentación

Toda la documentación técnica del proyecto se encuentra en la carpeta:

docs/

Incluye investigación Agile, diseño de arquitectura, componentes, hooks, contextos, rutas, formularios, API, testing, deployment y retrospectiva final.

Gestión del proyecto

El trabajo fue organizado mediante un tablero Kanban en Trello.

Columnas utilizadas:

Backlog
Todo
In Progress
Review
Done

Enlace al tablero:

Pega aquí tu enlace de Trello
Despliegue

La aplicación fue desplegada en Vercel.

Configuración utilizada:

Install Command: npm install
Build Command: npx vite build
Output Directory: dist

La API se desplegó usando funciones serverless dentro de la carpeta api/.

Autor

Santiago Falla Romero

Desarrollador junior fullstack en formación.

Tecnologías principales:

React
TypeScript
Tailwind CSS
Node.js
Express
APIs REST
Git y GitHub
Estado del proyecto

Proyecto finalizado como práctica fullstack.

Posibles mejoras futuras:

Autenticación de usuarios.
Base de datos real.
Gestión avanzada de stock.
Pasarela de pago real.
Dashboard con estadísticas.
Sistema de favoritos.
Panel para crear y editar productos.
Licencia

Proyecto desarrollado con fines educativos.