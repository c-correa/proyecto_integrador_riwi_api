export default class Service {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const now = new Date();
    return await this.model.create({
      ...data,
      deleted_at: null,
      created_at: now,
      updated_at: now,
    });
  }

  async findOne(id) {
    const record = await this.model.findByPk(id);
    if (!record || record.deleted_at) return null;
    return record;
  }

async findOneBy(optionsWhere) {
  const record = await this.model.findOne(optionsWhere);
  if (!record || record.deleted_at) return null;
  return record;
}


  async findAll() {
    return await this.model.findAll({
      where: { deleted_at: null },
    });
  }

  async update(id, data) {
    const record = await this.findOne(id);

    await record.update({
      ...data,
      updated_at: new Date(),
    });

    return record;
  }

  async delete(id) {
    const record = await this.model.findByPk(id);
    if (record || record.deleted_at) throw new Error('Record not found');

    await record.update({
      isActive: false,
      deleted_at: new Date(),
    });

    return true;
  }
}
