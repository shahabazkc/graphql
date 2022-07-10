import { buildSchema } from "graphql";

const schema = buildSchema(`
    type User {
        id: ID
        name: String
        email: String
        password: String
        nationality: String
        stack: Stack
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    type Query{
        getUser(id: ID): User
    }

    input UserInput {
        id: ID
        name: String!
        email: String!
        password: String!
        nationality: String
        stack: [Stack]
    }

    type Mutation {
        createUser(input: UserInput): User
    }

`);


export default schema;