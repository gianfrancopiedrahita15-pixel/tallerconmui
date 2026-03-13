🎮 PlayStation Store — React + MUI
Tienda virtual de videojuegos desarrollada con React y Material UI, que simula una experiencia de compra estilo PlayStation Store con carrito de compras, favoritos y autenticación de usuarios.

📋 Descripción
Aplicación web de comercio electrónico temática de videojuegos construida como proyecto académico. Permite explorar un catálogo de juegos, agregarlos al carrito o a favoritos, y gestionar la sesión del usuario. El proyecto fue desplegado en GitHub Pages.

✨ Características Principales

Catálogo de productos con imágenes, descripción y precio
Carrito de compras con drawer lateral
Sistema de favoritos
Autenticación de usuarios (Login)
Navegación entre secciones (Ofertas, Artículos)
Diseño responsive con Material UI
Desplegado en GitHub Pages


🖥️ Interfaz Gráfica
La interfaz está construida con Material UI (MUI) e incluye:

Header con navegación, acceso a favoritos y carrito
Cards de productos con imagen, nombre, descripción y precio
CarritoDrawer — panel lateral deslizante para gestionar compras
Footer con información del sitio
Página de Login para autenticación
Paleta de colores inspirada en la identidad visual de PlayStation (azul #0070D1)


🗂️ Arquitectura del Proyecto
src/
├── features/
│   ├── articles/
│   │   ├── componentes/
│   │   │   ├── Articles.jsx
│   │   │   └── Offers.jsx
│   │   └── hooks/
│   │       └── UseState.jsx
│   ├── auth/
│   │   ├── components/
│   │   └── hooks/
│   │       └── pages/
│   │           └── Login.jsx
│   └── layout/
│       ├── components/
│       │   ├── CarritoDrawer.jsx
│       │   ├── Content.jsx
│       │   ├── Footer.jsx
│       │   └── Header.jsx
│       └── hooks/
│           ├── useCarrito.js
│           ├── useFavoritos.js
│           └── useLogin.js
├── App.jsx
└── main.jsx
La arquitectura sigue el patrón Feature-Based, separando la lógica por funcionalidades. Cada feature contiene sus propios componentes y hooks personalizados para mantener el código modular y escalable.

🪝 Hooks Personalizados
HookDescripciónuseCarrito.jsGestiona el estado del carrito: agregar, eliminar y calcular totaluseFavoritos.jsControla la lista de productos marcados como favoritosuseLogin.jsManeja la autenticación y el estado de sesión del usuarioUseState.jsxHook de estado para el módulo de artículos

🛠️ Tecnologías Utilizadas

React — Biblioteca principal de UI
Material UI (MUI) — Componentes de diseño
Vite — Bundler y entorno de desarrollo
gh-pages — Despliegue en GitHub Pages


🚀 Instalación y Uso
bash# Clonar el repositorio
git clone https://github.com/gianfrancopiedrahita15-pixel/taller_3_react_mui.git

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Desplegar en GitHub Pages
npm run deploy

👤 Autor
Gianfranco Piedrahita

GitHub: @gianfrancopiedrahita15-pixel
Proyecto académico desarrollado como taller de React con Material UI
Institución: Pixel / Curso de Desarrollo Frontend
