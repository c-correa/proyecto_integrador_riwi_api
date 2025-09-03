// Cambiar por:
import { AuthService } from "./auth.service.mjs";
// O si es export default:
import AuthService from "./auth.service.mjs";
export async function login(req, res) {
    // Agregar manejo de errores:
    try {
      const result = await AuthService.login(req.body);
      res.status(200).json(result);
    } catch (error) {
      console.error("Login error:", error);
      res.status(401).json({ error: error.message });
    }
}
