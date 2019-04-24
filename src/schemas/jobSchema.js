const { buildSchema } = require('graphql');

const jobSchema = buildSchema(`
  input JobDataInput {
    url: String!
  }

  type JobData {
    url: String!
  }

  type Job {
    _id: String!
    name: String!
    repeatInterval: String!
    data: JobData
  }

  type Query {
    getJobs: [Job]
  }

  type Mutation {
    createJob(name: String!, repeatInterval: String!, data: JobDataInput): Job
  }
`);

module.exports = jobSchema;
