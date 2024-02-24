import { FastifyReply, FastifyRequest } from "fastify"
import { IRegisterUser } from "../db/interface/register_user.molde"
import { registerUserSchema } from "../db/schema/auth"

export const login = async (req: FastifyRequest, res: FastifyReply) => {
    return res.status(200).send({
        message: "Login Successfull",
        status: 200
    })
}

export const register = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const { name, email, password, role } = req.body as IRegisterUser;

        // Check if all required fields are provided
        if (!name || !email || !password || !role) {
            return res.status(400).send({
                message: "Bad Request",
                error: "All fields are required",
                status: 400
            });
        }

        // Create a new user object
        const newUser = await registerUserSchema({ name, email, password, role });

        // Return success response with the new user data
        return res.status(200).send({
            message: "Register Successful",
            status: 200,
            result: newUser
        });
    } catch (error) {
        // Handle any errors that occur during registration
        console.error("Error registering user:", error);
        return res.status(500).send({
            message: "Internal Server Error",
            error: "Failed to register user",
            status: 500
        });
    }
};
