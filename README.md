# Job scheduler API

## Run the project locally

To run the project locally make sure you have docker installed, then simply run `docker-compose up` from your terminal. Now you can go to `http://localhost:3000/graphql` to test the queries and mutations.

## Mutations

To create a job run the following mutation in GraphiQL

```
mutation createJobMutation($name:String!, $repeatInterval:String!, $data:JobDataInput) {
  createJob(name: $name, repeatInterval: $repeatInterval, data: $data) {
    _id
    name
    repeatInterval
    data {
      url
    }
  }
}
```

with the following query variables:

```
{
  "name": "scrapeWebsite",
  "repeatInterval": "*/1 * * * *",
  "data": {
    "url": "https://www.domain.com"
  }
}
```

or simply open [this url](<http://localhost:3000/graphql?query=mutation%20createJobMutation(%24name%3AString!%2C%20%24repeatInterval%3AString!%2C%20%24data%3AJobDataInput)%20%7B%0A%20%20createJob(name%3A%20%24name%2C%20repeatInterval%3A%20%24repeatInterval%2C%20data%3A%20%24data)%20%7B%0A%20%20%20%20_id%0A%20%20%20%20name%0A%20%20%20%20repeatInterval%0A%20%20%20%20data%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=createJobMutation&variables=%7B%0A%20%20%22name%22%3A%20%22scrapeWebsite%22%2C%0A%20%20%22repeatInterval%22%3A%20%22*%2F1%20*%20*%20*%20*%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22url%22%3A%20%22https%3A%2F%2Fwww.domain.com%22%0A%20%20%7D%0A%7D>) after your project is running.

## Queries

To return the list of jobs run the following query in GraphiQL:

```
query {
  getJobs {
    _id
    name
    repeatInterval
    data {
      url
    }
  }
}
```

or simply open [this url](http://localhost:3000/graphql?query=query%20%7B%0A%20%20getJobs%20%7B%0A%20%20%20%20_id%0A%20%20%20%20name%0A%20%20%20%20repeatInterval%0A%20%20%20%20data%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D) after your project is running.
