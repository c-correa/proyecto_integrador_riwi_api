import { authService } from "./auth.service.mjs";

export async function login(req, res) {
    const {email, password} = req.body
    const records = await authService.login(email, password)
    return res.json(records)
}