# NestJS Movie API 🎥

Un backend construido con NestJS que proporciona una API para la aplicación de películas. Esta API permite obtener detalles de películas, gestionar favoritos, filtrar por género, entre otros.

## 📋 Características

- 📄 **API RESTful**: Proporciona endpoints para obtener información de películas y gestionar favoritos.
- 🔄 **Integración con Base de Datos**: Almacena y recupera datos utilizando una base de datos.
- ⚙️ **Modular y Escalable**: Basado en una arquitectura modular de NestJS.
- 📊 **Validación y Manejo de Errores**: Validación de entradas y manejo de errores centralizado.
- 🔐 **Autenticación y Autorización**: Autenticación mediante JWT para proteger los endpoints.

## 🛠 Tecnologías Utilizadas

- [NestJS](https://nestjs.com/) - Framework para aplicaciones del lado del servidor.
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript tipado.
- [Moongoose](https://mongoosejs.com/) - ORM para manejar la base de datos.
- [MongoDB](https://www.mongodb.com/) - Base de datos relacional.
- [JWT](https://jwt.io/) - JSON Web Tokens para autenticación.

## 🚀 Instalación

### Prerrequisitos

- **Node.js**: Requiere Node.js versión 14 o superior.
- **NPM o Yarn**: Gestor de paquetes de Node.js.
- **MongoDV**: Base de datos para almacenar la información.

### Pasos de Instalación

1. **Clona este repositorio:**

    ```bash
    git clone https://github.com/Juan-rojas75/backend_app_movie_Quickbetdmovies
    ```

2. **Instala las dependencias:**

    Usando npm:

    ```bash
    npm install
    ```

    O usando yarn:

    ```bash
    yarn install
    ```

3. **Configura las Variables de Entorno:**

    Crea un archivo `.development.env` en la raíz del proyecto y añade las siguientes variables de entorno:

    ```bash
    DATABASE_USER="5432"
    DATABASE_PASSWORD="tu_contraseña"
    TMDB_API_KEY="API"
    TMDB_API_KEY_HEADER="API"
    JWT_SECRET_KEY="SECRET"
    ```

4. **Configura la Base de Datos:**

    Crea una base de datos en Mongo con el nombre especificado en `DATABASE_NAME`.


5. **Inicia el Servidor de Desarrollo:**

    Usando npm:

    ```bash
    npm run start:dev
    ```

    La API estará disponible en `http://localhost:3000`.

## 📂 Estructura del Proyecto

```plaintext
.
├── src                       # Código fuente de la aplicación
│   ├── modules               # Módulos de la aplicación
│   ├── common                # Clases y utilidades compartidas
│   ├── config                # Archivos de configuración
│   ├── main.ts               # Punto de entrada de la aplicación
│   └── app.module.ts         # Módulo principal de la aplicación
├── test                      # Pruebas unitarias y de integración
├── .development.env          # Variables de entorno
├── nest-cli.json             # Configuración de CLI de NestJS
├── package.json              # Dependencias y scripts del proyecto
└── README.md                 # Documentación del proyecto
