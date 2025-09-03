import { ownerService } from "./owners.service.mjs";

export async function findAll(req, res) {
    const records = await ownerService.findAll()
    return res.json(records)
}

export async function findOne(req, res) {
    const { id } = req.params
    const record = await ownerService.findOne(+id)
    return res.json(record)
}

export async function create(req, res) {
    const record = await ownerService.create(req.body) 
    return res.status(201).json({data: record})
}

export async function remove(req, res) {
    const { id } = req.params
    await ownerService.delete(+id)
    return res.status(201).json({message: 'Product removed successfully'})
}

export async function update(req, res) {
    const { id } = req.params
    const record = await await ownerService.update(+id, req.body)
    return res.status(201).json({message: 'Product updated successfully', data: record})
}