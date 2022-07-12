import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './sql-graph/index.js'
import cors from 'cors';
import { Users } from './sql-graph/entities/users.js';

const main = async () => {


    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(3001, () => {
        console.log('server is running on port 3001');
    });

}

main().catch((err) => {
    console.log(err);
})