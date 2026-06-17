Routing y navegación
Introducción

PulseWear utiliza React Router para gestionar la navegación entre páginas sin necesidad de recargar la aplicación.

Esto permite ofrecer una experiencia más rápida y fluida al usuario.

La navegación se basa en una arquitectura SPA (Single Page Application), donde React renderiza dinámicamente cada vista.

React Router

Para implementar las rutas se utilizó:

react-router-dom

Esta librería permite:

Definir rutas.
Navegar entre páginas.
Obtener parámetros de URL.
Gestionar páginas no encontradas.
Estructura de rutas

La aplicación dispone de las siguientes rutas principales:

Página principal
/
Componente
HomePage
Función
Presentar la marca PulseWear.
Mostrar productos destacados.
Permitir acceso al catálogo.
Catálogo
/catalog
Componente
CatalogPage
Función
Mostrar todos los productos.
Buscar productos.
Filtrar por categorías.
Catálogo filtrado
/catalog?category=Sudaderas
/catalog?category=Entrenamiento
/catalog?category=Pantalones
/catalog?category=Accesorios
/catalog?category=Chaquetas
Función

Permitir acceder directamente a una categoría específica desde el menú desplegable de navegación.

Detalle de producto
/products/:id
Componente
ProductDetailPage
Función
Mostrar información detallada.
Seleccionar talla.
Añadir al carrito.
Mostrar productos relacionados.
Ejemplo
/products/1
Comparador
/compare
Componente
ComparePage
Función
Comparar productos.
Comparar precios.
Comparar valoraciones.
Comparar categorías.
Checkout
/checkout
Componente
CheckoutPage
Función
Mostrar carrito.
Introducir datos personales.
Introducir información de pago.
Crear pedidos.
Administración
/admin
Componente
AdminPage
Función

Panel principal de administración.

Permite acceder a las herramientas de gestión.

Gestión de pedidos
/admin/orders
Componente
AdminOrdersPage
Función
Visualizar pedidos.
Buscar clientes.
Filtrar estados.
Actualizar pedidos.
Eliminar pedidos recibidos.
Página 404
*
Componente
NotFoundPage
Función

Mostrar un mensaje cuando el usuario intenta acceder a una ruta inexistente.

Navegación mediante Link

Para evitar recargas completas se utiliza el componente:

<Link to="/catalog">
  Catálogo
</Link>

Ventajas:

Navegación rápida.
Mejor experiencia de usuario.
Menor consumo de recursos.
Navegación con parámetros

Se utilizan parámetros dinámicos para mostrar productos específicos.

Ejemplo:

/products/:id

Obtención del parámetro:

const { id } = useParams();

Esto permite reutilizar la misma página para todos los productos.

Navegación mediante Query Params

Se utilizan parámetros de consulta para filtrar categorías.

Ejemplo:

/catalog?category=Sudaderas

Obtención del parámetro:

const [searchParams] = useSearchParams();

Ventajas:

URLs más útiles.
Compartir enlaces filtrados.
Mejor experiencia de usuario.
Flujo de navegación
HomePage
   │
   ├──► CatalogPage
   │          │
   │          ├──► ProductDetailPage
   │          │          │
   │          │          └──► CheckoutPage
   │          │
   │          └──► ComparePage
   │
   └──► AdminPage
                 │
                 └──► AdminOrdersPage
Beneficios obtenidos

La implementación de React Router permitió:

Navegación rápida.
URLs limpias.
Separación clara de páginas.
Gestión sencilla de parámetros.
Mejor organización de la aplicación.
Conclusión

La navegación de PulseWear se construyó utilizando React Router, permitiendo una experiencia SPA moderna y eficiente. Gracias a las rutas dinámicas, parámetros de consulta y páginas independientes, la aplicación mantiene una estructura clara y fácil de ampliar.