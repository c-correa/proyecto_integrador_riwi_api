import Service from "../utils/service.mjs";
import {Publication} from "./model/publications.model.mjs"

class PublicationsService extends Service {
    
}

export const publicationsService = new PublicationsService(Publication)
