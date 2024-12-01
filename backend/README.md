# Backend API Documentation

## Endpoint: `/users/register`

### Description
This endpoint allows new users to register by providing their personal information such as first name, last name, email, and password. The user's data is validated, hashed for security, and stored in the database. Upon successful registration, the endpoint returns a JSON Web Token (JWT) for authentication.

---

### HTTP Method
`POST`

---

### Request Format
The request should be in JSON format with the following fields:

| Field                 | Type    | Required | Validation                                    | Description                                |
|-----------------------|---------|----------|----------------------------------------------|--------------------------------------------|
| `fullname.firstname`  | String  | Yes      | Minimum 3 characters                         | The user's first name.                     |
| `fullname.lastname`   | String  | No       | Minimum 3 characters (optional)              | The user's last name.                      |
| `email`               | String  | Yes      | Must be a valid email                        | The user's email address. Must be unique.  |
| `password`            | String  | Yes      | Minimum 6 characters                         | The user's password.                       |

---

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response
```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "64c1ef6b2f1b1c001f5a2e2f",
    "fullName": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

## Endpoint: `/users/login`

### Description
This endpoint allows existing users to log in by providing their email and password. Upon successful login, it returns a JSON Web Token (JWT) for authentication and the user's details.

---

### HTTP Method
`POST`

---

### Request Format
The request should be in JSON format with the following fields:

| Field      | Type    | Required | Validation             | Description                       |
|------------|---------|----------|-------------------------|-----------------------------------|
| `email`    | String  | Yes      | Must be a valid email   | The user's email address.         |
| `password` | String  | Yes      | Minimum 6 characters    | The user's password.              |

---

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response
```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "64c1ef6b2f1b1c001f5a2e2f",
    "fullName": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

### Error Responses
#### Validation Error (400)
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password should be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Invalid Credentials (401)
```json
{
  "message": "Invalid Email or Password"
}
```