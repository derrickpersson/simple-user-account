export class ConnectionError extends Error {
    constructor(message) {
        super(message);
        this.message = "Connection Error";
    }
}