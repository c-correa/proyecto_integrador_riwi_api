import { Router } from "express";
import { controller } from "../utils/controller.mjs";
import { findAll, create, findOne, remove, update, findAllByStore } from "./storesBranch.controller.mjs";

const router = Router();

router.get('/', controller(findAll))
router.get('/by/:id', controller(findAllByStore))
router.get('/:id', controller(findOne))
router.post('/', controller(create))
router.delete('/:id', controller(remove))
router.patch('/:id', controller(update))

export default router;