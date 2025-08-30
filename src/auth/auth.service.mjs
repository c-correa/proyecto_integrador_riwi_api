import { ownerService } from "../owners/owners.service.mjs";
import Service from "../utils/service.mjs";
import { Auth } from "./model/auth.model.mjs";
import { v4 as uuidv4 } from "uuid";

class AuthService extends Service {
  async login(email, password) {
    const [record] = await this.findOneBy({ where: email });
    if (record.password !== password) throw new Error("not found")
    await this.create({
      access_token: uuidv4(),
      refresh_token: uuidv4(),
      owner_id: record.id,
    });
    return {ok: true}
  }

    async create(data) {
    const [record] = await this.findOneBy({ where: email });
    if (record) throw new Error("usuario exite")

    await ownerService.create(data);
    return {ok: true}
  }
}

export const authService = new AuthService(Auth);
