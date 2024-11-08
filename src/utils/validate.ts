import { User } from "../types/user";

/**
 * Represents a collection of errors, where the keys are the field names and the values are the error messages.
 */
type Error = {
    [key: string]: string;
}

export const validade = (data: User) => {
    const errors: Error = {};

    if(!data.login) {
        errors['login'] = "O usuário ou email é obrigatório!"
    }

    if(!data.password) {
        errors['password'] = "A senha é obrigatória!"
    }
    return errors;
}