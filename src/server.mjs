import express from "express";
import cors from "cors";
import sequelize from "./utils/config.mjs";

import ownerRoutes from "./owners/owners.router.mjs";
import storesRoutes from "./stores/stores.router.mjs";
import publicationsRoutes from "./publications/publications.router.mjs";
import storesBranchRoutes from "./storesBranch/storesBranch.router.mjs";
import auth from "./auth/auth.router.mjs";
import departments from "./departament/departament.router.mjs";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:4173", 
    "https://proyecto-integrador-riwi-web-prod.onrender.com",
    "https://proyecto-integrador-riwi-web.onrender.com",
    "*"
  ],
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "Accept"]
}));

app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    message: "Backend funcionando correctamente",
    timestamp: new Date().toISOString()
  });
});

app.use("/owners", ownerRoutes);
app.use("/stores", storesRoutes);
app.use("/publications", publicationsRoutes);
app.use("/store-branches", storesBranchRoutes);
app.use("/auth", auth);
app.use("/departments", departments);


const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await sequelize.authenticate();
    console.log(" Conexión a la base de datos establecida correctamente");

    await sequelize.sync({
      alter: true,
      // force: true
      // logging: console.log, 
    });
    console.log("Modelos sincronizados correctamente");

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error.message);
    process.exit(1);
  }
}

main();
