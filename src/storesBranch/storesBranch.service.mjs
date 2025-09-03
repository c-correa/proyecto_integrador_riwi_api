import { where } from "sequelize";
import Service from "../utils/service.mjs";
import { StoreBranch} from "./model/storesBranch.model.mjs"

class StoresBranchService extends Service {
    async getAllByStore(store_id){
        const record = await this.findOneBy({where:{store_id}})
        return [record]
     }
}

export const storesBranchService = new StoresBranchService(StoreBranch)
