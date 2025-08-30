import { ownerService } from "../owners/owners.service.mjs";
import Service from "../utils/service.mjs";
import { Auth } from "./model/auth.model.mjs";
import { v4 as uuidv4 } from "uuid";

class AuthService extends Service {
  async login(email, password) {
    const record = await ownerService.findOneBy({ where: {email} });
if (!record || record.password !== password) {
  throw new Error("not found");
}

   return await this.create({
      access_token: uuidv4(),
      refresh_token: uuidv4(),
      owner_id: record.id,
    });
  }
}

export const authService = new AuthService(Auth);
