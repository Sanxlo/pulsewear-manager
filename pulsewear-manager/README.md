PulseWear

PulseWear es una aplicación web fullstack desarrollada con React, TypeScript, Tailwind CSS, Node.js y Express.

La aplicación simula una tienda online de ropa deportiva permitiendo a los usuarios explorar productos, compararlos, añadirlos al carrito y realizar pedidos. Además incluye un panel administrativo para gestionar pedidos y controlar el flujo de ventas.

Características principales
Cliente
Catálogo de productos.
Búsqueda por nombre.
Filtrado por categorías.
Detalle de producto.
Selección de talla.
Productos relacionados.
Comparador de productos.
Carrito de compra.
Checkout.
Validación de formularios.
Diseño responsive.
Administración
Gestión de pedidos.
Búsqueda de clientes.
Filtrado por estado.
Actualización de estados.
Eliminación automática de pedidos recibidos.
Resumen de ventas.
Backend
API REST propia.
Arquitectura por capas.
Validación de datos.
Persistencia mediante archivos JSON.
Tecnologías utilizadas
Frontend
React
TypeScript
Tailwind CSS
React Router
Context API
Fetch API
Backend
Node.js
Express
TypeScript
Gestión del proyecto
Git
GitHub
Trello
Estructura del proyecto
PulseWear/
│
├── docs/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── types/
│   └── utils/
│
├── server/
│   └── src/
│       ├── routes/
│       ├── controllers/
│       ├── services/
│       ├── data/
│       └── types/
│
└── README.md
Instalación
Clonar repositorio
git clone https://github.com/TU-USUARIO/pulsewear.git
cd pulsewear
Instalación frontend
npm install

Ejecutar:

npm run dev

Frontend:

http://localhost:5173
Instalación backend

Entrar al directorio del servidor:

cd server

Instalar dependencias:

npm install

Ejecutar:

npm run dev

Backend:

http://localhost:3001
API REST
Productos
Obtener productos
GET /api/v1/products
Pedidos
Obtener pedidos
GET /api/v1/orders
Crear pedido
POST /api/v1/orders
Actualizar estado
PATCH /api/v1/orders/:id/status
Eliminar pedido
DELETE /api/v1/orders/:id
Gestión de estado

La aplicación utiliza:

useState

Para estados locales.

useEffect

Para carga de datos.

useMemo

Para optimización de filtros y búsquedas.

useCallback

Para optimización de funciones reutilizadas.

Context API
CartContext

Gestión global del carrito.

OrderContext

Gestión global de pedidos.

Funcionalidades implementadas
Home moderna.
Navbar con menú desplegable.
Footer.
Catálogo avanzado.
Filtros.
Comparador.
Selección de tallas.
Carrito.
Checkout.
Información de pago.
Administración.
Gestión de pedidos.
API REST.
Arquitectura por capas.
Metodología de trabajo

Durante el desarrollo se utilizó Kanban mediante Trello para organizar las tareas.

Columnas utilizadas:

Backlog
Todo
In Progress
Review
Done
Documentación

Toda la documentación del proyecto se encuentra en:

docs/

Incluye:

Agile
Arquitectura
Componentes
Hooks
Context API
Routing
Formularios
API
Cliente API
Testing
Deployment
Retrospectiva
Tablero Trello

Añadir enlace del tablero:

https://trello.com/tu-tablero
Despliegue

Frontend:

Añadir URL de Vercel

Backend:

Añadir URL de la API
Autor

Proyecto desarrollado por Santiago Falla Romero como práctica de desarrollo fullstack utilizando React, TypeScript, Express y metodologías ágiles.

Licencia

Proyecto desarrollado con fines educativos.