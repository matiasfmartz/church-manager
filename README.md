# Church Manager

Church Manager es una aplicación web desarrollada en React (con Vite y Tailwind CSS) para la gestión integral de una iglesia. Permite administrar miembros, grupos, asistencias, áreas y otras actividades relacionadas con la vida de la iglesia.

## Características principales

- **Gestión de miembros:**
  - Listado, filtrado y búsqueda de miembros (activos, inactivos, nuevos).
  - Agregado de miembros individualmente o en lote.
  - Visualización y edición de detalles de cada miembro.
- **Gestión de grupos y áreas:**
  - Administración de grupos de integración y áreas ministeriales.
- **Control de asistencias:**
  - Registro de asistencias de miembros, obreros y líderes a diferentes tipos de reuniones.
- **Escuela de vida:**
  - Sección dedicada a la gestión de la escuela bíblica o de discipulado.
- **Interfaz moderna:**
  - Componentes reutilizables, tablas, modales y filtros para una experiencia de usuario intuitiva.

## Tecnologías utilizadas

- **Frontend:** React 18, Vite, Tailwind CSS
- **Routing:** React Router DOM
- **Consumo de API:** Axios
- **Componentes UI:** React Icons, React Select
- **Estilos:** Tailwind CSS

## Estructura del proyecto

```
/ (raíz)
├── src/
│   ├── components/         # Componentes organizados por dominio (Miembros, Grupos, Asistencias, etc.)
│   ├── config/             # Configuración de la API
│   ├── hooks/              # Hooks personalizados (formularios, fetch, servicios)
│   ├── logic/              # Lógica de negocio
│   ├── services/           # Servicios para consumo de API
│   ├── App.jsx             # Componente principal
│   └── main.jsx            # Punto de entrada
├── public/                 # Recursos estáticos
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
└── README.md               # Documentación del proyecto
```

## Instalación y ejecución

1. **Clonar el repositorio:**
   ```zsh
   git clone <url-del-repo>
   cd church-manager
   ```
2. **Instalar dependencias:**
   ```zsh
   npm install
   ```
3. **Configurar la API:**
   - Por defecto, la URL de la API está en `src/config/config.js` (`http://localhost:3000/api/v1`). Modifícala si es necesario.
4. **Iniciar la aplicación:**
   ```zsh
   npm run dev
   ```
5. **Abrir en el navegador:**
   - Accede a `http://localhost:5173` (o el puerto que indique la terminal).

## Estructura de carpetas destacada

- `src/components/`: Componentes React organizados por dominio (Miembros, Grupos, Asistencias, etc.).
- `src/hooks/`: Hooks personalizados para formularios, peticiones y lógica de servicios.
- `src/services/`: Funciones para interactuar con la API REST.
- `src/logic/`: Lógica de negocio para el procesamiento de datos.
- `src/config/`: Configuración de la URL base de la API.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o pull request para sugerencias o mejoras.

## Licencia

Este proyecto es de uso privado para la gestión de iglesias. Consulta con el autor para permisos de uso o distribución.
