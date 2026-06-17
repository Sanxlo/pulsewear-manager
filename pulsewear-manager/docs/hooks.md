Hooks de React
Introducción

Durante el desarrollo de PulseWear se utilizaron varios hooks de React para gestionar estado, efectos secundarios y optimización de rendimiento.

Los hooks permiten reutilizar lógica, simplificar componentes y mejorar la organización del código.

Los principales hooks utilizados fueron:

useState
useEffect
useMemo
Custom Hook: useProducts
useState
Descripción

useState permite almacenar y actualizar datos dentro de un componente.

Cada vez que el estado cambia, React vuelve a renderizar el componente mostrando la información actualizada.

Uso en PulseWear

Se utilizó para:

Formularios del checkout.
Buscadores.
Filtros de categoría.
Selección de tallas.
Mensajes de error y confirmación.
Comparador de productos.
Ejemplo
const [search, setSearch] = useState("");

En este caso se almacena el texto introducido por el usuario en el buscador del catálogo.

useEffect
Descripción

useEffect permite ejecutar código cuando un componente se monta o cuando cambian determinadas dependencias.

Se utiliza principalmente para:

Llamadas a APIs.
Suscripciones.
Actualizaciones automáticas.
Efectos secundarios.
Uso en PulseWear

Se utiliza para:

Obtener pedidos desde la API.
Obtener productos desde la API.
Cargar información inicial de la aplicación.
Ejemplo
useEffect(() => {
  loadOrders();
}, []);

Este efecto se ejecuta únicamente una vez cuando el componente se monta.

useMemo
Descripción

useMemo permite memorizar cálculos costosos para evitar que se vuelvan a ejecutar en cada renderizado.

Solo recalcula el resultado cuando cambian sus dependencias.

Uso en PulseWear

Se utiliza para:

Filtrar productos del catálogo.
Filtrar pedidos del panel de administración.
Calcular comparaciones entre productos.
Ejemplo
const filteredProducts = useMemo(() => {
  return products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );
}, [products, search]);

Gracias a useMemo el filtrado solo se recalcula cuando cambian los productos o el texto de búsqueda.

useProducts (Custom Hook)
Descripción

Se creó un hook personalizado para centralizar toda la lógica relacionada con la obtención de productos.

De esta forma se evita repetir código en diferentes componentes.

Responsabilidades
Solicitar productos a la API.
Gestionar el estado loading.
Gestionar errores.
Devolver los datos tipados.
Estructura general
const {
  products,
  loading,
  error,
} = useProducts();
Ventajas
Código más limpio.
Reutilización de lógica.
Menor duplicación.
Mejor mantenimiento.
Gestión de estados de red

Los hooks implementan los tres estados básicos de cualquier llamada a una API.

Loading

Mientras se espera la respuesta del servidor.

if (loading) {
  return <p>Cargando...</p>;
}
Error

Cuando ocurre un problema durante la petición.

if (error) {
  return <p>{error}</p>;
}
Éxito

Cuando los datos se reciben correctamente.

return products.map(...);
Beneficios de los hooks

El uso de hooks permitió:

Simplificar componentes.
Compartir lógica reutilizable.
Reducir código repetido.
Mejorar el rendimiento.
Facilitar el mantenimiento de la aplicación.
Relación con TypeScript

Todos los hooks trabajan con tipos definidos mediante interfaces.

Por ejemplo:

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

Esto permite que los datos obtenidos desde la API sean consistentes en toda la aplicación.

Conclusión

Los hooks fueron una parte fundamental del desarrollo de PulseWear. Gracias a useState, useEffect, useMemo y al custom hook useProducts fue posible gestionar el estado, consumir la API y optimizar el rendimiento de forma sencilla y organizada.