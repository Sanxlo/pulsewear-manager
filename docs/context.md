Context API y estado global
Introducción

Durante el desarrollo de PulseWear se utilizó Context API para compartir información entre múltiples componentes sin necesidad de pasar propiedades manualmente a través de varios niveles de componentes.

Esta técnica permite centralizar información importante y facilita la gestión del estado global de la aplicación.

¿Qué es Context API?

Context API es una herramienta proporcionada por React que permite compartir datos entre componentes de forma global.

Sin Context API, la información tendría que enviarse mediante props desde componentes padres hasta componentes hijos, lo que puede generar código difícil de mantener.

Context API evita este problema permitiendo que cualquier componente acceda directamente a los datos compartidos.

Contextos implementados

En PulseWear se implementaron dos contextos principales:

CartContext

Responsable de gestionar el carrito de compra.

OrderContext

Responsable de gestionar los pedidos obtenidos desde la API.

CartContext
Objetivo

Gestionar todos los productos añadidos al carrito.

Información almacenada
interface CartItem {
  id: number;
  name: string;
  price: number;
  size: string;
}
Funcionalidades
Añadir productos.
Eliminar productos.
Vaciar carrito.
Compartir el carrito entre páginas.
Provider

El Provider envuelve toda la aplicación.

<CartProvider>
  <App />
</CartProvider>

De esta forma cualquier componente puede acceder al carrito.

Consumo

Para acceder al carrito se utiliza:

const {
  cart,
  addToCart,
  removeFromCart,
  clearCart,
} = useCart();
OrderContext
Objetivo

Gestionar los pedidos conectados con la API REST.

Información almacenada
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
Funcionalidades
Obtener pedidos.
Crear pedidos.
Actualizar estados.
Eliminar pedidos.
Compartir información administrativa.
Provider
<OrderProvider>
  <App />
</OrderProvider>
Consumo
const {
  orders,
  loading,
  error,
  createOrder,
  updateOrderStatus,
  deleteOrder,
} = useOrders();
Relación con la API

OrderContext actúa como intermediario entre la interfaz y la API.

Flujo:

Componente
    ↓
OrderContext
    ↓
API Client
    ↓
Backend

Gracias a esta estructura los componentes no necesitan conocer los detalles de las peticiones HTTP.

Ventajas obtenidas

El uso de Context API permitió:

Evitar prop drilling.
Compartir datos globales fácilmente.
Centralizar lógica de negocio.
Reducir código repetido.
Mejorar la organización del proyecto.
Casos de uso

CartContext se utiliza en:

ProductDetailPage
CheckoutPage
Navbar

OrderContext se utiliza en:

CheckoutPage
AdminOrdersPage
Comparación con useState

useState se utiliza para información local de un componente.

Ejemplos:

Inputs.
Filtros.
Búsquedas.
Selección de talla.

Context API se utiliza para información global.

Ejemplos:

Carrito.
Pedidos.
Conclusión

Context API fue una herramienta fundamental para el desarrollo de PulseWear. Gracias a CartContext y OrderContext fue posible compartir información entre múltiples componentes de forma sencilla, manteniendo una arquitectura limpia y escalable.