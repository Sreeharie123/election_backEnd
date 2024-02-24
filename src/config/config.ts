import knex from "knex";
const config = require("../../knexfile")
const environment = process.env.NODE_ENV || "development";
export const db = knex(config[environment]);