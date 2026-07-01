Cliente de API y capa de red
Introducción

Para conectar el frontend con el backend se implementó una capa de red tipada utilizando TypeScript y la API Fetch.

El objetivo de esta capa es centralizar todas las peticiones HTTP en un único lugar y evitar duplicar código dentro de los componentes.

Gracias a esta estructura, los componentes solo consumen funciones y no necesitan conocer los detalles de las peticiones realizadas al servidor.

Estructura

La capa de red se encuentra en:

src/api/client.ts

Este archivo contiene todas las funciones encargadas de comunicarse con la API REST.

URL base de la API
const API_URL = "http://localhost:3001/api/v1";

Todas las peticiones utilizan esta URL como punto de entrada.

Endpoints consumidos
Obtener productos
getProducts()

Petición:

GET /products

Respuesta:

Product[]

Uso:

const products = await getProducts();
Obtener pedidos
getOrders()

Petición:

GET /orders

Respuesta:

Order[]

Uso:

const orders = await getOrders();
Crear pedido
createOrder()

Petición:

POST /orders

Datos enviados:

{
  customerName: string;
  email: string;
  address: string;
  phone: string;
  total: number;
  items: OrderItem[];
}

Respuesta:

Order
Actualizar estado
updateOrderStatus()

Petición:

PATCH /orders/:id/status

Datos enviados:

{
  status: string;
}

Respuesta:

Order
Eliminar pedido
deleteOrder()

Petición:

DELETE /orders/:id

Respuesta:

void
Tipado de datos

Todos los datos intercambiados entre frontend y backend utilizan interfaces TypeScript.

Product
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}
OrderItem
interface OrderItem {
  id: number;
  name: string;
  price: number;
  size: string;
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
Gestión de estados de red

La aplicación implementa tres estados fundamentales.

Loading

Mientras se espera una respuesta del servidor.

Ejemplo:

if (loading) {
  return <p>Cargando...</p>;
}
Error

Cuando ocurre un problema durante la petición.

Ejemplo:

if (error) {
  return <p>{error}</p>;
}
Success

Cuando la respuesta se recibe correctamente.

Ejemplo:

setOrders(data);
Integración con Context API

La capa de red no se consume directamente desde todos los componentes.

En su lugar:

Componentes
      ↓
Context API
      ↓
API Client
      ↓
Backend

Esto mejora la organización y reduce el acoplamiento.

Ventajas de la capa de red

La implementación del cliente API aporta:

Centralización de peticiones.
Reutilización de código.
Tipado seguro.
Menor duplicación.
Mejor mantenimiento.
Mayor escalabilidad.
Relación con el backend

La capa de red está alineada con la arquitectura del servidor.

Frontend
   ↓
API Client
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
JSON Storage

Esto garantiza consistencia entre ambos lados de la aplicación.

Conclusión

La implementación de un cliente de API tipado permitió conectar React y Express de forma segura y organizada. Gracias a TypeScript fue posible mantener coherencia entre los datos enviados y recibidos, reduciendo errores y facilitando el desarrollo de la aplicación.