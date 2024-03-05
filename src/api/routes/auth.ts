import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { login, register } from "../controllers/authController"

export const authRoute = async (app: FastifyInstance) => {
    app.post('/login', login);

    app.post('/register', register);
}
