import { FastifyReply, FastifyRequest } from "fastify"
import { ILoginUser, IRegisterUser } from "../interface/register_user.molde"
import { loginSchema, registerUserSchema } from "../schema/auth"

export const login = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const { email, password } = req.body as ILoginUser

        if (!email || !password) {
            return res.status(400).send({
                message: "Bad Request",
                error: "Please provide an email and password",
                status: 400
            });
        } else {

            // Create a new user object
            const loginUser = await loginSchema({ email, password });

            if (loginUser.length !== 0) {
                return res.status(200).send({
                    message: "Login Successful",
                    status: 200,
                    result: loginUser
                });
            } else {
                return res.status(401).send({
                    message: "Unauthorized",
                    error: "Invalid email or password",
                    status: 401
                });
            }
        }

    } catch (error) {
        return res.status(500).send({
            message: "Internal Server Error",
            error: "Failed to register user",
            status: 500
        });
    }
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
