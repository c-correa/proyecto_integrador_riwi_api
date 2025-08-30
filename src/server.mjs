import express from "express";
import cors from "cors";
import sequelize from "./utils/config.mjs";

// 🛠 Importa tus routers
import ownerRoutes from "./owners/owners.router.mjs";
import storesRoutes from "./stores/stores.router.mjs";
import publicationsRoutes from "./publications/publications.router.mjs";
import storesBranchRoutes from "./storesBranch/storesBranch.router.mjs";
import auth from "./auth/auth.router.mjs";

// Inicializa app
const app = express();

// 🌍 Configurar CORS (aceptar solo desde Vite)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// 📝 Permitir JSON en requests
app.use(express.json());

// 🛠 Middleware para logging (debug)
app.use((req, res, next) => {
  console.log(`📩 [${req.method}] ${req.url}`, req.body || "");
  next();
});

// 🔗 Rutas principales
app.use("/owners", ownerRoutes);
app.use("/stores", storesRoutes);
app.use("/publications", publicationsRoutes);
app.use("/store-branches", storesBranchRoutes);
app.use("/auth", auth);


// 🛑 Manejo global de errores (por si algo se escapa)
app.use((err, req, res, next) => {
  console.error("❌ Error no controlado:", err);
  if (res.headersSent) return next(err);
  res.status(err.status || 500).json({
    name: err.name || "ServerError",
    message: err.message || "Error interno del servidor",
    stack: err.stack,
  });
});

// Puerto
const PORT = process.env.PORT || 3000;

async function main() {
  try {
    // 1️⃣ Conexión a BD
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos establecida correctamente");

    // 2️⃣ Sincronización de modelos
    await sequelize.sync({
      alter: true, // ajusta tablas sin borrar datos
      logging: console.log, // muestra queries de Sequelize
    });
    console.log("✅ Modelos sincronizados correctamente");

    // 3️⃣ Levantar servidor SOLO después de sync
    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error.message);
    process.exit(1);
  }
}

main();
