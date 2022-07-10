import { nanoid } from 'nanoid';


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

const resolvers = {
    getUser: ({ id }) => {
        return new User(id, userHolder[id])
    },
    createUser: ({ input }) => {
        let id = nanoid();
        userHolder[id] = input;
        return new User(id, input);
    }
}

export const createResolver = (resolver) => {
    return {
        ...resolver,
        id: () => nanoid()
    }
};


export default resolvers;