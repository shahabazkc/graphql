import { EntitySchema } from 'typeorm';

export const Users = new EntitySchema({
    name: "Users",
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            length: 255
        },
        username: {
            type: "varchar",
            length: 255
        },
        password: {
            type: "varchar",
            length: 255
        }
    }
})