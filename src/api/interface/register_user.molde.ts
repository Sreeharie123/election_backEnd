export interface IRegisterUser {
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface ILoginUser {
    password: string;
    email: string;
}