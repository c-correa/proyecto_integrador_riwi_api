export function controller(cb) {
  return (req, res) => {
    cb(req, res).catch((error) => {
      if (res.headersSent) {
        console.error("Respuesta ya enviada. Error:", error);
        return; // ✅ no intentes responder otra vez
      }

      const status = error.status || 500;
      return res.status(status).json({
        name: error.name || "ServerError",
        message: error.message || "server error",
        stack: error.stack,
      });
    });
  };
}
