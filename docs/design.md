Diseño y arquitectura de la aplicación
Introducción

PulseWear es una aplicación fullstack desarrollada utilizando React, TypeScript, Tailwind CSS, Node.js y Express.

La aplicación sigue una arquitectura cliente-servidor donde el frontend consume una API REST para acceder a productos y pedidos.

El objetivo principal es mantener una separación clara entre la interfaz de usuario, la lógica de negocio y la gestión de datos.

Arquitectura general
Frontend (React)
       │
       ▼
API Client (fetch + TypeScript)
       │
       ▼
API REST Express
       │
       ▼
Controllers
       │
       ▼
Services
       │
       ▼
Data Storage (JSON)
Frontend

El frontend está desarrollado con React y TypeScript.

Se organiza utilizando una estructura modular.

src/
│
├── api/
├── components/
├── context/
├── hooks/
├── pages/
├── types/
├── utils/
└── router/
Components

Contiene componentes reutilizables:

Navbar
Footer
ProductCard
ReviewCard
HeroSection

Estos componentes pueden utilizarse en distintas páginas sin duplicar código.

Pages

Contiene las páginas principales:

HomePage
CatalogPage
ProductDetailPage
ComparePage
CheckoutPage
AdminPage
AdminOrdersPage
NotFoundPage
Context

Se utiliza Context API para compartir estado global.

Contextos implementados:

CartContext

Gestiona:

Productos añadidos al carrito.
Eliminación de productos.
Vaciado del carrito.
OrderContext

Gestiona:

Obtención de pedidos.
Creación de pedidos.
Actualización de estados.
Eliminación de pedidos.
Hooks

Se utilizan hooks personalizados para encapsular lógica reutilizable.

useProducts

Responsable de:

Obtener productos desde la API.
Gestionar estados loading.
Gestionar estados error.
Backend

El backend está desarrollado utilizando Node.js y Express.

Se utiliza una arquitectura por capas para separar responsabilidades.

server/
│
└── src/
    │
    ├── routes/
    ├── controllers/
    ├── services/
    ├── types/
    └── data/
Routes

Las rutas reciben las peticiones HTTP y las envían al controlador correspondiente.

Ejemplos:

GET /products
GET /orders
POST /orders
PATCH /orders/:id/status
DELETE /orders/:id
Controllers

Los controladores:

Reciben la petición HTTP.
Validan datos básicos.
Llaman a los servicios.
Devuelven respuestas HTTP.

Ejemplo:

OrderController

Funciones:

getAll()
create()
updateStatus()
delete()
Services

Los servicios contienen la lógica de negocio.

Ejemplo:

OrderService

Responsabilidades:

Crear pedidos.
Actualizar estados.
Eliminar pedidos.
Leer y guardar información.
Almacenamiento de datos

Para simplificar el proyecto no se utiliza una base de datos real.

Los datos se almacenan mediante:

orders.json

Esto permite simular persistencia sin necesidad de configurar un sistema externo.

API REST

La API utiliza recursos REST.

Productos
GET /api/v1/products

Obtiene todos los productos.

Pedidos
GET /api/v1/orders

Obtiene todos los pedidos.

POST /api/v1/orders

Crea un pedido.

PATCH /api/v1/orders/:id/status

Actualiza el estado.

DELETE /api/v1/orders/:id

Elimina un pedido.

Gestión del estado

La estrategia de estado utilizada es:

Estado local

Gestionado mediante:

useState

Utilizado para:

Inputs.
Filtros.
Selección de talla.
Mensajes temporales.
Estado global

Gestionado mediante:

Context API

Utilizado para:

Carrito.
Pedidos.
Tipado TypeScript

Toda la aplicación utiliza interfaces para garantizar consistencia entre frontend y backend.

Ejemplos:

Product
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}
Order
interface Order {
  id: number;
  customerName: string;
  email: string;
  address: string;
  phone: string;
  total: number;
  items: OrderItem[];
  status: string;
}
Flujo de datos

Cuando un usuario realiza una compra:

Usuario
   │
   ▼
Checkout
   │
   ▼
OrderContext
   │
   ▼
API Client
   │
   ▼
POST /orders
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
orders.json

La respuesta sigue el camino inverso hasta actualizar la interfaz.

Decisiones técnicas

Durante el desarrollo se tomaron las siguientes decisiones:

Utilizar React con TypeScript para mejorar la seguridad del código.
Utilizar Tailwind CSS para acelerar el diseño visual.
Utilizar Context API para evitar prop drilling.
Utilizar arquitectura por capas en Express.
Mantener una API REST sencilla y tipada.
Utilizar almacenamiento basado en JSON para simplificar el proyecto académico.
Conclusión

La arquitectura implementada permite separar responsabilidades, mantener el código organizado y facilitar futuras ampliaciones. El uso combinado de React, TypeScript, Express y una API REST proporciona una base sólida para una aplicación fullstack moderna.