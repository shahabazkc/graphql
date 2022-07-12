import { GraphQLList } from "graphql"
import { Users } from "../entities/users.js"
import { UserType } from "../type-defs/user.js"
import { QueryBuilder } from 'typeorm'
import sql from 'mysql2'
import { connection } from "../db/sql.js"

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    async resolve() {

        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM users`, (err, results) => {
                if (err) reject(err)
                else resolve(results)
            })
        })
    
    }
}