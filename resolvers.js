import { nanoid } from 'nanoid';

import neo4j from "neo4j-driver";

class User {
    constructor(id, {
        name,
        email,
        password,
        nationality,
        stack
    }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.nationality = nationality;
        this.stack = stack;
    }
}

const userHolder = {};

const driver = neo4j.driver(
    "bolt://localhost:7687",
    neo4j.auth.basic("neo4j", "1234")
);

const resolvers = {
    getUser: ({ id }) => {
        return new User(id, userHolder[id])
    },
    createUser: ({ input }) => {
        let id = nanoid();
        let session = driver.session();
        let query = `INSERT INTO User (id, name, email, password) VALUES ('${id}', '${input.name}', '${input.email}', '${input.password}')`;
        return session.run(query).then((result) => {
                return result;
        }).catch((err) => {
            console.log(" something went wrong",err);
        })
       // userHolder[id] = input;
       // return new User(id, input);
    },
    getAllUsers: () => {
        return Object.values(userHolder).map(user => new User(user.id, user));
    }
}

export const createResolver = (resolver) => {
    return {
        ...resolver,
        id: () => nanoid()
    }
};


export default resolvers;