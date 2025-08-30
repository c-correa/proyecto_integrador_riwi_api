import { authService } from "./auth.service.mjs";

export async function findAll(req, res) {
    const records = await authService.findAll()
    return res.json(records)
}

export async function findOne(req, res) {
    const { id } = req.params
    const record = await authService.findOne(+id)
    return res.json(record)
}

export async function create(req, res) {
    await authService.create(req.body) 
    return res.status(201).json({message: 'Product created successfully'})
}

export async function remove(req, res) {
    const { id } = req.params
    await authService.delete(+id)
    return res.status(201).json({message: 'Product removed successfully'})
}

export async function update(req, res) {
    const { id } = req.params
    const record = await await authService.update(+id, req.body)
    return res.status(201).json({message: 'Product updated successfully', data: record})
}