import { db } from "../../../config/config";
import { IRegisterUser } from "../interface/register_user.molde";

export const registerUserSchema = async (registerUser: IRegisterUser) => {
    try {
        const newRegisterUser = await db("user").insert(registerUser).returning("*");
        return newRegisterUser;
    } catch (error) {
        console.error("Error inserting user into database:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}