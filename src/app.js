const debug = require('debug')('app');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const { agenda } = require('./services');
const { jobSchema } = require('./schemas');
const { jobResolver } = require('./resolvers');

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: jobSchema,
    rootValue: jobResolver,
    graphiql: true,
  }),
);

const start = async () => {
  await agenda.start();

  app.listen(process.env.SERVER_PORT, () => {
    debug(`Server listening on http://localhost:${process.env.SERVER_PORT}`);
  });
};

const stop = async () => {
  debug('Stopping');
  await agenda.stop();
  process.exit(0);
};

agenda.on('ready', start);

process.on('SIGTERM', stop);
process.on('SIGINT', stop);
