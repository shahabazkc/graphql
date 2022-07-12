import { GraphQLString } from "graphql";
import { connection } from "../db/sql.js";
import { UserType } from "../type-defs/user.js";


export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    resolve(parent, args) {
        const { name, username, password } = args;

        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO users (name,username,password) VALUES ('${name}','${username}','${password}')`, (err, results) => {
                if (err){
                    reject(err)
                }
                else{
                    resolve(args)
                } 
            })
        })
    }
}