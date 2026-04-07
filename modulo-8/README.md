# 🚀 Proyecto Backend - Módulo 8

## 📌 Descripción

Aplicación backend desarrollada con **Node.js y Express**, que permite:

* Gestión de usuarios (CRUD)
* Autenticación con JSON Web Tokens (JWT)
* Rutas protegidas
* Subida de archivos (imágenes)

---

## ⚙️ Instalación

1. Clonar o descargar el proyecto
2. Instalar dependencias:

```bash
npm install
```

---

## ▶️ Ejecutar el servidor

```bash
node app.js
```

Servidor disponible en:

```
http://localhost:3000
```

---

## 🔐 Autenticación

### Login

**POST** `/api/login`

Body (JSON):

```json
{
  "username": "usuario"
}
```

Respuesta:

```json
{
  "message": "Login exitoso 🔐",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

## 📡 Endpoints

### 👥 Usuarios (Rutas protegidas con JWT)

| Método | Endpoint       | Descripción        |
| ------ | -------------- | ------------------ |
| GET    | /api/users     | Obtener usuarios   |
| POST   | /api/users     | Crear usuario      |
| PUT    | /api/users/:id | Actualizar usuario |
| DELETE | /api/users/:id | Eliminar usuario   |

---

### 📂 Subida de archivos

**POST** `/api/upload`

#### Headers:

```
Authorization: Bearer TOKEN
```

#### Body:

* Tipo: `form-data`
* Key: `file`
* Tipo: `File`
* Valor: seleccionar imagen

#### Respuesta:

```json
{
  "message": "Archivo subido correctamente 📂",
  "file": {
    "filename": "archivo.jpg"
  }
}
```

---

## 🧠 Tecnologías utilizadas

* Node.js
* Express
* JSON Web Tokens (JWT)
* Multer

---

## 📂 Estructura del proyecto

```
modulo-8/
│
├── src/
│   ├── routes/
│   │   ├── user.routes.js
│   │   ├── auth.routes.js
│   │   └── upload.routes.js
│   │
│   ├── controllers/
│   │   ├── user.controller.js
│   │   └── auth.controller.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── upload.middleware.js
│
├── uploads/
├── app.js
├── package.json
```

---

## 🔒 Seguridad

Se implementó autenticación mediante JWT para proteger rutas sensibles, asegurando que solo usuarios autenticados puedan acceder a ciertas funcionalidades.

---

## 📸 Evidencias sugeridas

Para la entrega del proyecto se recomienda incluir capturas de:

* Login exitoso (token generado)
* Acceso denegado sin token
* Acceso permitido con token
* CRUD de usuarios
* Subida de archivos
* Carpeta `uploads/` con archivos guardados

---

## 🧠 Justificación técnica

El proyecto fue estructurado utilizando una arquitectura modular separando rutas, controladores y middlewares, lo que permite una mejor organización y escalabilidad del código.

Se implementó JWT para autenticación y autorización de usuarios, y Multer para la gestión de subida de archivos, cumpliendo con los requerimientos de una API RESTful moderna.

---

## 🚀 Estado del proyecto

✅ Funcional
✅ API REST completa
✅ Lista para consumo por frontend o clientes externos

---

## 👨‍💻 Autor

Proyecto desarrollado como parte del Módulo 8 - Backend con Node.js y Express.
