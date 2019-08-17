const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

app.use(bodyParser.json());

app.use('/graphql',
 graphqlHttp({
    schema: buildSchema(`
        type RootQuery {
            events: [String!]!
        }

        type RootMutation {
            createEvent(none: String): String
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
        events: () => {
            return ['Dolar Compra', 'Dolar Venta', 'Euro Compra']
        },
        createEvent: (args) => {
            const eventName = args.name;
            return eventName;
        }
    }
}));

app.get('/', (req, res, next) => {
    res.send('Hello World!');
});

app.listen(4000);