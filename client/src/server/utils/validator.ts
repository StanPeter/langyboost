export class Validator {
    static emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    static isValidEmail(email: string): boolean {
        return this.emailRegex.test(email);
    }
}
