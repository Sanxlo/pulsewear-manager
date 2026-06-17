# Documentación API - PulseWear

## URL base

```txt
http://localhost:3001/api/v1

## Productos

### Obtener todos los productos

```http
GET /products
```

### Obtener producto por ID

```http
GET /products/:id
```

---

## Pedidos

### Obtener todos los pedidos

```http
GET /orders
```

### Crear pedido

```http
POST /orders
```

Body:

```json
{
  "customerName": "Santiago",
  "email": "santiago@example.com",
  "address": "Calle Principal 123",
  "phone": "600123456",
  "total": 59.99
}
```

### Actualizar estado

```http
PATCH /orders/:id/status
```

Body:

```json
{
  "status": "Confirmado"
}
```

Estados válidos:

```txt
Pendiente
Confirmado
Enviado
```

---

## Persistencia

Los pedidos se guardan en:

```txt
server/src/data/orders.json
```