import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("user").del();

    // Inserts seed entries
    return await knex("user").insert([
        { id: 1, name: "sreehari", email: "sreehari@gmail.com", password: "12345", role: "Super Admin" },
        { id: 2, name: "albin", email: "albin@gmail.com", password: "12345", role: "Admin" },
        { id: 3, name: "jithu", email: "jithu@gmail.com", password: "12345", role: "user" },
    ]);
};
