PulseWear Manager

Aplicación web fullstack desarrollada con React, TypeScript, Tailwind CSS y una API REST basada en Express.

Descripción

PulseWear Manager es una tienda online de ropa deportiva que permite a los usuarios navegar por un catálogo de productos, comparar artículos, añadir productos al carrito, realizar pedidos y gestionar pedidos desde un panel de administración.

El proyecto ha sido desarrollado aplicando metodologías ágiles, arquitectura por capas en el backend y tipado completo con TypeScript tanto en frontend como en backend.

Tecnologías utilizadas
Frontend
React
TypeScript
Vite
Tailwind CSS
React Router
Context API
Lucide React
Backend
Node.js
Express
TypeScript
Despliegue
Vercel
Funcionalidades
Cliente
Visualización de catálogo de productos
Filtros por categoría
Vista de detalle de producto
Selección de talla
Comparador de productos
Carrito de compra
Checkout
Creación de pedidos
Administración
Visualización de pedidos
Búsqueda de pedidos
Filtrado por estado
Actualización de estados
Eliminación automática de pedidos recibidos
Estructura del proyecto
pulsewear-manager/
│
├── docs/
│
├── api/
│
├── public/
│
├── server/
│   └── src/
│       ├── controllers/
│       ├── services/
│       ├── routes/
│       ├── data/
│       └── types/
│
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── types/
│   └── utils/
│
└── README.md
API

Endpoints disponibles:

Productos

GET /api/v1/products

Obtiene todos los productos.

Pedidos

GET /api/v1/orders

Obtiene todos los pedidos.

POST /api/v1/orders

Crea un nuevo pedido.

PATCH /api/v1/orders//status

Actualiza el estado de un pedido.

Instalación

Clonar repositorio:

git clone https://github.com/Sanxlo/pulsewear-manager.git

Instalar dependencias:

npm install

Ejecutar frontend:

npm run dev

Ejecutar backend:

npm run server
Documentación

Toda la documentación del proyecto se encuentra dentro de la carpeta:

docs/

Documentos incluidos:

agile.md
idea.md
project-management.md
design.md
components.md
hooks.md
context.md
routing.md
forms.md
api.md
api-client.md
testing.md
deployment.md
retrospective.md
Tablero de trabajo

Trello utilizado para la gestión del proyecto:

Añadir aquí la URL de tu tablero.

URLs de producción

Frontend:
(https://pulsewear-manager-ke21.vercel.app/)

API:

https://pulsewear-manager-ke21.vercel.app/api/v1/products

Trello:
https://trello.com/b/w42j7TUe/pulsewear-desarrollo-fullstack

Autor

Santiago Falla Romero

Proyecto desarrollado como práctica de React, TypeScript, Express y arquitectura fullstack.