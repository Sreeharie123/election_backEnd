import fastify from "fastify";
import dotenv from 'dotenv'
import { authRoute } from "./api/routes/auth"
const app = fastify();

// Configure the environment 
dotenv.config();


// Register routes here
app.register(authRoute, { prefix: '/api/v1' });










// Lister the servier
app.listen({ port: 4000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`server listening on ${address}`);
})
