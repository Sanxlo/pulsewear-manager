# Arquitectura del proyecto - PulseWear

## Visión general

PulseWear es una aplicación Full Stack para la venta de ropa deportiva.

La arquitectura sigue un modelo cliente-servidor:

```txt
Frontend React
      ↓
API REST Express
      ↓
Persistencia JSON
```

---

## Frontend

Tecnologías:

- React
- TypeScript
- Vite
- TailwindCSS
- React Router
- Context API

Estructura:

```txt
src/
├── api
├── components
├── context
├── hooks
├── layouts
├── pages
├── routes
├── types
└── utils
```

Responsabilidades:

- Mostrar catálogo
- Mostrar detalles de productos
- Gestionar carrito
- Gestionar checkout
- Administrar pedidos
- Consumir la API

---

## Backend

Tecnologías:

- Node.js
- Express
- TypeScript

Estructura:

```txt
server/src/
├── controllers
├── routes
├── services
├── data
├── types
└── index.ts
```

Responsabilidades:

- Servir productos
- Crear pedidos
- Actualizar estados
- Persistir información

---

## Persistencia

Pedidos:

```txt
server/src/data/orders.json
```

Productos:

```txt
server/src/data/products.ts
```

---

## Endpoints

```txt
GET    /api/v1/products
GET    /api/v1/products/:id

GET    /api/v1/orders
POST   /api/v1/orders
PATCH  /api/v1/orders/:id/status
```

---

## Flujo de compra

```txt
Usuario
   ↓
Catálogo
   ↓
Detalle producto
   ↓
Carrito
   ↓
Checkout
   ↓
POST /orders
   ↓
orders.json
   ↓
Panel Admin
```

---

## Tecnologías utilizadas

- React
- TypeScript
- TailwindCSS
- Vite
- Node.js
- Express
- JSON
- Git
- GitHub