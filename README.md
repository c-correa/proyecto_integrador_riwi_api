# PawCare - Pet Care Services Platform

Description
This project is a **REST API** developed with **Node.js, Express, PostgreSQL, and Sequelize** as ORM.  
Its goal is to provide a modular, scalable, and maintainable architecture based on controllers, services, and models.  

The application implements a generic reusable CRUD for each entity, which speeds up the development of new features and keeps the logic decoupled.

---

## Technologies used
- **Node.js** → JavaScript runtime.
- **Express** → Framework for building APIs.
- **PostgreSQL** → Relational database.
- **Sequelize** → ORM that facilitates the definition of models and queries.
- **dotenv** → Environment variable management.

- ## Project structure


├── PostMan/ # API test collection
│ └── test_api.json
├── src/
│ ├── auth/ # Authentication module
│ │ ├── model/
│ │ │ └── auth.model.mjs # Sequelize model definition
│ │ ├── auth.controller.mjs # Controller (handles requests/responses)
│ │ ├── auth.router.mjs # Authentication routes
│ │ └── auth.service.mjs # Business logic (uses generic Service)
│ │
│ ├── department/ # Department module
│ ├── owners/ # Owners module
│ ├── stores/ # Stores module
│ ├── storesBranch/ # Branches module
│ │ └── model/ # Each module follows the same pattern
│ │
│ ├──  utils/
│ │ ├── config.mjs # Configuration and connection to the database
│ │ ├── controller.mjs # Generic controller
│ │ ├── initModel.mjs # Initialization of models
│ │ └── service.mjs # Generic CRUD service class
│ │
│ └── server.mjs # Main application entry point
│
├── .env # Environment variables (database, ports, etc.)
├── package.json # Dependencies and scripts
└── package-lock.json

--

## Installation and execution

Clone the repository:

```bash```
git clone https://github.com/c-correa/proyecto_integrador_riwi_api.git
cd riwi_api_integrator_project


npm install


npm run dev



The server will be available to consume the API.

## Architecture

Models (model/)
Each model extends the modelInit class (located in utils/initModel.mjs).
The models define the schemas that Sequelize translates into tables in the database.

Services (*.service.mjs)
A generic Service class (in utils/service.mjs) is implemented that abstracts CRUD operations.
Each module injects its model and inherits these operations, avoiding code duplication.

Controllers (*.controller.mjs)
They contain the logic to receive HTTP requests, execute services, and return structured responses.

Routes (*.router.mjs)
Define the exposed endpoints and their connection to the controllers.

Configuration (utils/config.mjs)
Contains the configuration and connection to the PostgreSQL database using Sequelize.

Server (server.mjs)
This is the entry point that initializes Express, loads middleware, routes, and connects to the database.


## Conclusion

This project implements a modular architecture with a generic and reusable CRUD in services, integrating Node.js, Express, and Sequelize on PostgreSQL.
This allows the API to be scalable, easy to maintain, and extendable for future modules.

