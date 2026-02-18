Hora de inicio: 7:00 AM

# BACK

## API REST - CRUD de Notas con Autenticación

### Descripción

Este proyecto consiste en un servicio API REST desarrollado con Node.js y Express que permite gestionar notas con autenticación mediante JWT.

La API incluye:

- Sistema de autenticación (registro y login)
- CRUD completo de notas
- Persistencia con base de datos SQLite
- Documentación básica

---

### Tecnologías utilizadas

- Node.js
- Express
- SQLite
- JSON Web Token (JWT)
- bcrypt
- Nodemon

---

### Dependencias

#### Dependencias principales

- express → Framework para crear la API
- sqlite3 → Base de datos local persistente
- jsonwebtoken → Autenticación con tokens
- bcryptjs → Encriptación de contraseñas
- cors → Permitir solicitudes externas

#### Dependencias de desarrollo

- nodemon → Reinicio automático del servidor

---

### Instalación

1. Clonar el repositorio o descargar el proyecto

2. Instalar dependencias:

npm install express sqlite3 jsonwebtoken bcryptjs cors dotenv
npm install --save-dev nodemon

3. Correr la API con **npm run dev**

# FRONT

## Gestión de Notas

### Descripción

Aplicación Frontend Básica que consume API REST de notas con autenticación JWT.

### Estructura del Proyecto

/
├── index.html              # Página principal
└── js/
    ├── config.js          # Configuración de la API
    ├── auth.js            # Autenticación (registro/login/logout)
    └── notas.js           # CRUD de notas

### Endpoints

#### Método Endpoint Descripción

     POST	        /auth/register	    Registro de usuario
     POST	        /auth/login	        Inicio de sesión
     GET	        /notas	            Obtener todas las notas
     POST	        /notas	            Crear nueva nota
     PUT	        /notas/:id	        Actualizar nota
     DELETE	        /notas/:id	        Eliminar nota

### Funcionalidades

- **Autenticación**
- **Registro:** Crear nueva cuenta de usuario
- **Login:** Iniciar sesión y obtener token JWT
- **Logout:** Cerrar sesión y limpiar localStorage
- **Persistencia:** Mantiene sesión activa al recargar
- **Listar:** Muestra todas las notas del usuario
- **Crear:** Agrega nueva nota (título, cuerpo, marca)
- **Editar:** Carga datos de nota para actualizar
- **Eliminar:** Borra nota con confirmación
- **Limpiar:** Reinicia el formulario

### Interfaz

- Sección superior: Estado de sesión y botón logout
- Registro/Login: Formularios lado a lado
- Crear nota: Campos para título, cuerpo y marca
- Lista de notas: Muestra todas las notas con botones Editar/Eliminar

### Tecnologías

- HTML5 con Tailwind CSS
- JavaScript Vanilla
- Fetch API
- LocalStorage (JWT)

# Autor

Daniel Galvis - Prueba técnica

# ¿QUE HARÍA SI TUVIERA MÁS TIEMPO?

## Mejoras en la aplicación

### Gestión de Usuarios
- **Perfil de usuario**: Ver y editar información personal
- **Cambio de contraseña**: Formulario seguro para actualizar contraseña
- **Recuperación de cuenta**: Sistema de recuperación por email
- **Roles y permisos**: Administrador, usuario estándar, invitado
- **Listado de usuarios**: Vista solo para administradores
- **Eliminar cuenta**: Opción para que usuarios eliminen su cuenta
- **Avatar personalizado**: Subida de foto de perfil

### Seguridad
- Agregar validación de formularios en tiempo real
- Proteger rutas del frontend redirigiendo al login si no hay token
- Encriptar datos sensibles en localStorage

### Experiencia de Usuario
- Agregar loaders y estados de carga en peticiones HTTP
- Implementar mensajes de error más descriptivos
- Crear modales de confirmación personalizados (en lugar de alert)
- Diseño responsive mejorado y temas claro/oscuro

### Funcionalidades de Notas
- Paginación para listas largas de notas
- Búsqueda y filtrado por título o marca
- Fecha de creación/actualización en cada nota
- Categorías y etiquetas para organizar notas

### Escalabilidad
- Migrar a un framework moderno (Angular)
- Crear componentes reutilizables

Hora de finalización: 11:40 am
