# Pruebas del proyecto - PulseWear

## Objetivo

Comprobar que las funcionalidades principales de PulseWear funcionan correctamente.

---

## Servidores necesarios

Frontend:

```txt
http://localhost:5173
```

Backend:

```txt
http://localhost:3001
```

Comandos:

```powershell
npm.cmd run dev
npm.cmd run server
```

---

## Pruebas frontend

### Página de inicio

URL:

```txt
http://localhost:5173/
```

Resultado esperado:

- Se muestra el hero principal.
- Se muestran beneficios.
- Se muestran productos destacados.
- Se muestran opiniones de clientes.

---

### Catálogo

URL:

```txt
http://localhost:5173/catalog
```

Resultado esperado:

- Se muestran productos desde la API.
- La búsqueda filtra productos.
- El selector de categoría filtra correctamente.
- El botón "Ver detalle" abre la página del producto.

---

### Detalle de producto

URL ejemplo:

```txt
http://localhost:5173/products/1
```

Resultado esperado:

- Se muestra la información del producto.
- Se muestra imagen, precio, categoría y valoración.
- El botón "Añadir al carrito" aumenta el contador del carrito.

---

### Checkout

URL:

```txt
http://localhost:5173/checkout
```

Resultado esperado:

- Se muestra el resumen del carrito.
- El formulario valida campos vacíos.
- Al completar el formulario se crea un pedido correctamente.

---

### Panel de administración

URL:

```txt
http://localhost:5173/admin
```

Resultado esperado:

- Se muestran métricas generales.
- Se muestra número de productos.
- Se muestra número de pedidos.
- Se muestran ventas totales.
- Se muestra cantidad de pedidos pendientes.

---

### Gestión de pedidos

URL:

```txt
http://localhost:5173/admin/orders
```

Resultado esperado:

- Se muestran los pedidos registrados.
- Se puede cambiar el estado de un pedido.
- El cambio de estado se mantiene tras reiniciar el backend.

---

## Pruebas backend

### Obtener productos

URL:

```txt
http://localhost:3001/api/v1/products
```

Resultado esperado:

- Devuelve un array JSON de productos.

---

### Obtener pedidos

URL:

```txt
http://localhost:3001/api/v1/orders
```

Resultado esperado:

- Devuelve un array JSON de pedidos.

---

## Prueba de persistencia

1. Crear un pedido desde el checkout.
2. Abrir el archivo:

```txt
server/src/data/orders.json
```

3. Comprobar que el pedido aparece guardado.
4. Reiniciar el backend.
5. Abrir `/admin/orders`.
6. Comprobar que el pedido sigue apareciendo.

---

## Resultado final

Las funcionalidades principales han sido probadas correctamente:

- Navegación.
- Catálogo.
- Detalle de producto.
- Carrito.
- Checkout.
- API REST.
- Persistencia JSON.
- Panel de administración.
- Gestión de pedidos.