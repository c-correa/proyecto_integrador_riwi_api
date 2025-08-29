import { publicationsService } from "./publications.service.mjs";

export async function findAll(req, res) {
    const records = await publicationsService.findAll()
    return res.json(records)
}

export async function findOne(req, res) {
    const { id } = req.params
    const record = await publicationsService.findOne(+id)
    return res.json(record)
}

export async function create(req, res) {
    await publicationsService.create(req.body)
    return res.status(201).json({message: 'Product created successfully'})
}

export async function remove(req, res) {
    const { id } = req.params
    await publicationsService.delete(+id)
    return res.status(201).json({message: 'Product removed successfully'})
}

export async function update(req, res) {
    const { id } = req.params
    const record = await await publicationsService.update(+id, req.body)
    return res.status(201).json({message: 'Product updated successfully', data: record})
}