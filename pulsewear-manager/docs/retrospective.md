Retrospectiva del proyecto
Introducción

PulseWear fue desarrollado como una aplicación fullstack utilizando React, TypeScript, Tailwind CSS, Node.js y Express.

El proyecto permitió aplicar conocimientos de frontend, backend, APIs REST, gestión de estado y metodologías ágiles dentro de una única aplicación.

Qué aprendí

Durante el desarrollo aprendí a construir una aplicación completa conectando múltiples tecnologías.

Entre los principales aprendizajes destacan:

Creación de interfaces modernas con React.
Uso de TypeScript para mejorar la seguridad del código.
Diseño responsive con Tailwind CSS.
Gestión de estado mediante Context API.
Creación de hooks personalizados.
Desarrollo de APIs REST con Express.
Organización del código mediante arquitectura por capas.
Consumo de APIs desde React.
Integración entre frontend y backend

Uno de los aspectos más importantes del proyecto fue la conexión entre React y Express.

El flujo implementado fue:

Usuario
   ↓
React
   ↓
Context API
   ↓
API Client
   ↓
Express
   ↓
Services
   ↓
Datos

Esta estructura permitió separar claramente las responsabilidades de cada parte de la aplicación.

Problemas encontrados

Durante el desarrollo surgieron varios desafíos.

Gestión de tipos

Fue necesario mantener sincronizadas las interfaces TypeScript entre frontend y backend.

Si una propiedad cambiaba en uno de los lados podían aparecer errores de compilación.

Integración de pedidos

La creación de pedidos evolucionó desde una estructura sencilla hasta incluir:

Productos.
Tallas.
Estados.
Eliminación de pedidos recibidos.

Esto obligó a actualizar múltiples partes del proyecto simultáneamente.

Estado global

Inicialmente algunas funcionalidades dependían demasiado de props.

La incorporación de Context API permitió simplificar la comunicación entre componentes.

Gestión del carrito

Fue necesario implementar:

Añadir productos.
Eliminar productos.
Vaciar carrito.
Mantener las tallas seleccionadas.
Tecnologías utilizadas
Frontend
React
TypeScript
Tailwind CSS
React Router
Backend
Node.js
Express
Organización
Git
GitHub
Trello
Uso de Inteligencia Artificial

La Inteligencia Artificial fue utilizada como herramienta de apoyo durante el desarrollo.

Se utilizó para:

Resolver dudas técnicas.
Mejorar componentes.
Optimizar estilos.
Diseñar estructuras de código.
Generar documentación.
Detectar errores.
Comprender conceptos de React y Express.

La IA permitió acelerar el desarrollo, aunque todas las decisiones finales fueron revisadas y adaptadas al proyecto.

Funcionalidades implementadas

Durante el proyecto se desarrollaron:

Página principal.
Catálogo de productos.
Filtros por categoría.
Detalle de producto.
Selección de tallas.
Carrito de compra.
Checkout.
Información de pago.
Comparador de productos.
Panel de administración.
Gestión de pedidos.
API REST.
Cliente API tipado.
Aspectos que mejoraría

Si continuara desarrollando PulseWear incorporaría:

Base de datos real.
Sistema de usuarios.
Login y registro.
Gestión de stock.
Pasarela de pago Stripe.
Historial de pedidos.
Dashboard con estadísticas.
Gestión avanzada de productos.
Valoración personal

Este proyecto permitió comprender cómo se construye una aplicación fullstack moderna desde cero.

La combinación de React, TypeScript y Express ayudó a consolidar conocimientos tanto de frontend como de backend, además de reforzar conceptos de arquitectura, reutilización de código y comunicación mediante APIs.

Conclusión

PulseWear cumplió los objetivos planteados al inicio del proyecto, proporcionando una tienda online funcional con gestión de productos y pedidos. Además, el desarrollo permitió aplicar de forma práctica los conocimientos adquiridos durante el curso y comprender el flujo completo de una aplicación web moderna.