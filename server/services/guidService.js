import { v4 as uuidv4 } from 'uuid';

export class GuidService {
    getUniqueId() {
        return uuidv4();
    }
}

export default new GuidService();