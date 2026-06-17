Despliegue de la aplicación
Introducción

Una vez finalizado el desarrollo de PulseWear se procedió a preparar la aplicación para su despliegue en producción.

El objetivo del despliegue es permitir que cualquier usuario pueda acceder a la aplicación desde Internet sin necesidad de ejecutar el proyecto localmente.

Plataforma utilizada

Para el despliegue se eligió Vercel.

Motivos
Integración sencilla con GitHub.
Despliegue automático.
Soporte para aplicaciones React.
Configuración rápida.
Entorno gratuito para proyectos educativos.
Despliegue del frontend

El frontend desarrollado con React y Vite fue desplegado utilizando Vercel.

Pasos realizados
Crear una cuenta en Vercel.
Conectar el repositorio de GitHub.
Seleccionar el proyecto PulseWear.
Configurar el framework como Vite.
Ejecutar el despliegue.
Variables de entorno

Para facilitar futuras modificaciones se recomienda utilizar variables de entorno.

Ejemplo:

VITE_API_URL=https://api-pulsewear.vercel.app/api/v1

Posteriormente la aplicación puede acceder a ella mediante:

const API_URL = import.meta.env.VITE_API_URL;
Despliegue del backend

El backend desarrollado con Node.js y Express puede desplegarse en:

Vercel
Render
Railway

Durante el desarrollo se utilizó:

http://localhost:3001/api/v1

En producción deberá sustituirse por la URL real del servidor.

Verificaciones realizadas

Tras el despliegue se comprobaron los siguientes aspectos:

Frontend
Página principal.
Catálogo.
Comparador.
Checkout.
Administración.
Backend
Obtener productos.
Obtener pedidos.
Crear pedidos.
Actualizar estados.
Eliminar pedidos.
Integración frontend y backend

La comunicación entre frontend y backend se realiza mediante peticiones HTTP utilizando Fetch API.

Flujo:

Frontend → API Client → Backend → Datos

Posibles mejoras futuras
Base de datos real.
Dominio personalizado.
HTTPS avanzado.
Monitorización.
Sistema de autenticación.
URLs del proyecto
Frontend
(Añadir URL de Vercel una vez desplegado)
Backend
(Añadir URL de la API una vez desplegada)
Conclusión

El despliegue permitió convertir PulseWear en una aplicación accesible desde Internet. Gracias a Vercel y a la arquitectura desarrollada, el proceso de publicación resultó sencillo y escalable para futuras mejoras.