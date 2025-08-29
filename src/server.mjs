import express from "express";
import cors from "cors";
import sequelize from "./utils/config.mjs";

// 🛠 Importa tus routers
import ownerRoutes from "./owners/owners.router.mjs";
import storesRoutes from "./stores/stores.router.mjs";
import publicationsRoutes from "./publications/publications.router.mjs";
import storesBranchRoutes from "./storesBranch/storesBranch.router.mjs";
import { findAll } from "./owners/owners.controller.mjs";

// Crea app
const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/owners", ownerRoutes);
app.use("/stores", storesRoutes);
app.use("/publications", publicationsRoutes);
app.use("/stores-branch", storesBranchRoutes);

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    // 1️⃣ Probar conexión
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos establecida correctamente");

    // 2️⃣ Sincronizar modelos
    await sequelize.sync({
      alter: true, // 👈 ajusta tablas sin borrar datos
      logging: console.log, // 👈 verás cada query que Sequelize ejecuta
    });
    console.log("✅ Modelos sincronizados correctamente");

    // 3️⃣ Levantar servidor SOLO después de sync
    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error.message);
    process.exit(1);
  }
}

main();
