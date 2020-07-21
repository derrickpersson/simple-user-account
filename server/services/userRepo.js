import { ConnectionError } from "../models";

export class UserRepo {
    static mockDb = [];

    static getUser(id){
        return new Promise((resolve, reject) => {
            const user = this.mockDb.find((user) => user.id === id);
            if(!user){
                reject(new Error('User not found'));
            }

            resolve(user);    
        });
    }

    static createUser(userDetails) {
        return new Promise((resolve, reject) => {
            // Simulate Connection Error
            if(Math.random() > 0.5){
                reject(new ConnectionError())
            }

            const isDuplicateUserId = !!this.mockDb.find((user) => user.id === userDetails.id);
            if(isDuplicateUserId) {
                reject(new Error('Duplicate ID found'));
            }
            this.mockDb.push(userDetails);
            resolve(userDetails);
        });
    }
}