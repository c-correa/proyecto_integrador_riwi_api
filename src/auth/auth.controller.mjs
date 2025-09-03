import { authService } from "./auth.service.mjs";

export async function login(req, res) {
    try {
        const {email, password} = req.body
        const records = await authService.login(email, password)
        return res.json(records)
    } catch (error) {
        console.error("Login error:", error);
        return res.status(401).json({ error: error.message });
    }
}
