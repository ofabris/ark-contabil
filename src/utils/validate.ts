import { User } from "../types/user";

type Error = {
    [key: string]: string;
}

export const validade = (data: User) => {
    const errors: Error = {};

    if(!data.name) {
        errors['name'] = "O nome é obrigatório!"
    }

    if(!data.email) {
        errors['email'] = "O e-mail é obrigatório!"
    }

    if(!data.agree) {
        errors['agree'] = "É necessário concordar com os termos!"
    }
    return errors;
}