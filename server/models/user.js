import { guidService } from "../services";

export class User {
    constructor({ 
        id = guidService.getUniqueId(), 
        email, 
        name
    }) {
        this.id = id;
        this.email = email;
        this.name = name;
    }

    getUserDetails(){
        return {
            id: this.id,
            email: this.email,
            name: this.name,
        }
    }
}