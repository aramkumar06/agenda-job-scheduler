# Job scheduler API

### Run the project locally

To run the project locally simply run `docker-compose up` from your terminal.

### Endpoints

The job scheduler API exposes the following endpoints:

#### Create a job

```
POST /jobs

Request:
{
  name: String,
  repeatInterval: String,
  ?data: Object
}

Response:
{
  _id: String,
  name: String,
  repeatInterval: String,
  ?data: Object
}
```

#### List all the existing jobs

```
GET /jobs

Response:
[
  {
    id: String,
    name: String,
    repeatInterval: String,
    data: Object
  }
]
```
