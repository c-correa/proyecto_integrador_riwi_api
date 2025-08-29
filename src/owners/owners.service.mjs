import Service from "../utils/service.mjs";
import {Owner} from "./model/owners.model.mjs"

class OwnerService extends Service {
}

export const ownerService = new OwnerService(Owner)
