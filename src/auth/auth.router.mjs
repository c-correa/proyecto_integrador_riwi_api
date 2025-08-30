import { Router } from "express";
import { controller } from "../utils/controller.mjs";
import { login } from "./auth.controller.mjs";

const router = Router();

router.post('/login', controller(login))

export default router;