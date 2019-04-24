# Job scheduler API

### Run the project locally

To run the project locally make sure you have docker installed, then simply run `docker-compose up` from your terminal.

### Endpoints

The job scheduler API exposes the following endpoints:

#### Create a job

`POST /jobs`

**Request:**

```js
{
  name: String,
  repeatInterval: String,
  data: Object // Optional
}
```

**Response:**

```js
{
  _id: String,
  name: String,
  repeatInterval: String,
  data: Object // Optional
}

```

#### List all the existing jobs

`GET /jobs`

**Response:**

```js
[
  {
    id: String,
    name: String,
    repeatInterval: String,
    data: Object, // Optional
  },
];
```
