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

## Endpoint: `/users/profile`

### Description
This endpoint provides the currently authenticated user's profile details. The request must include a valid JWT in the authorization header or as a cookie.

---

### HTTP Method
`GET`

---

### Authentication
Requires a valid JWT.

---

### Example Request
#### Headers
```http
Authorization: Bearer <jwt_token>
```

#### Request URL
```http
GET /users/profile
```

---

### Example Response
```json
{
  "_id": "64c1ef6b2f1b1c001f5a2e2f",
  "fullName": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "createdAt": "2024-08-01T12:34:56.789Z",
  "updatedAt": "2024-08-20T14:20:00.123Z"
}
```

---

### Error Responses
#### Unauthorized Access (401)
```json
{
  "message": "Unauthorized"
}
```

---

## Endpoint: `/users/logout`

### Description
This endpoint logs out the currently authenticated user by invalidating the provided JWT. The token is added to a blacklist, preventing future use.

---

### HTTP Method
`GET`

---

### Authentication
Requires a valid JWT.

---

### Example Request
#### Headers
```http
Authorization: Bearer <jwt_token>
```

#### Request URL
```http
GET /users/logout
```

---

### Example Response
```json
{
  "message": "Logout successful"
}
```

---

### Error Responses
#### Unauthorized Access (401)
```json
{
  "message": "Unauthorized"
}
```

## Endpoint: `/captains/register`

### Description
This endpoint allows new captains to register by providing personal information, vehicle details, and authentication credentials. The system validates the data, hashes the password for security, and stores the captain's information in the database. Upon successful registration, the endpoint returns a JSON Web Token (JWT) for authentication and the captain's details.

---

### HTTP Method
`POST`

---

### Request Format
The request should be in JSON format with the following fields:

| Field                       | Type     | Required | Validation                                 | Description                                      |
|-----------------------------|----------|----------|-------------------------------------------|--------------------------------------------------|
| `fullname.firstname`        | String   | Yes      | Minimum 3 characters                      | The captain's first name.                        |
| `fullname.lastname`         | String   | No       | Minimum 3 characters (optional)           | The captain's last name.                         |
| `email`                     | String   | Yes      | Must be a valid email                     | The captain's email address. Must be unique.     |
| `password`                  | String   | Yes      | Minimum 6 characters                      | The captain's password.                          |
| `vehicle.color`             | String   | Yes      | Minimum 3 characters                      | The color of the captain's vehicle.              |
| `vehicle.plate`             | String   | Yes      | Minimum 3 characters                      | The license plate of the vehicle.                |
| `vehicle.capacity`          | Integer  | Yes      | Must be an integer (minimum 1)            | The seating or load capacity of the vehicle.     |
| `vehicle.vehicleType`       | String   | Yes      | Must be one of: `car`, `motorcycle`, `auto` | The type of vehicle the captain operates.        |

---

### Example Request
```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "AB123CD",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

---

### Example Response
```json
{
  "token": "<jwt_token>",
  "captain": {
    "_id": "64c2ab3e7f3a1b001f6a3c4e",
    "fullName": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "AB123CD",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "location": {
      "lat": null,
      "lng": null
    }
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
      "msg": "First name should be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Captain Already Exists (400)
```json
{
  "message": "Captain already exists"
}
```

#### Missing Fields (400)
```json
{
  "message": "All fields are required"
}
```
## Endpoint: `/captains/login`

### Description
This endpoint allows captains to log in by providing their email and password. Upon successful login, it returns a JSON Web Token (JWT) for authentication and the captain's details.

---

### HTTP Method
`POST`

---

### Request Format
The request should be in JSON format with the following fields:

| Field      | Type    | Required | Validation             | Description                       |
|------------|---------|----------|-------------------------|-----------------------------------|
| `email`    | String  | Yes      | Must be a valid email   | The captain's email address.      |
| `password` | String  | Yes      | Minimum 6 characters    | The captain's password.           |

---

### Example Request
```json
{
  "email": "alice.smith@example.com",
  "password": "password123"
}
```

---

### Example Response
```json
{
  "token": "<jwt_token>",
  "captain": {
    "_id": "64c2ab3e7f3a1b001f6a3c4e",
    "fullName": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "AB123CD",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "location": {
      "lat": null,
      "lng": null
    }
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
  "message": "Invalid email or password"
}
```

---

## Endpoint: `/captains/profile`

### Description
This endpoint provides the currently authenticated captain's profile details. The request must include a valid JWT in the authorization header or as a cookie.

---

### HTTP Method
`GET`

---

### Authentication
Requires a valid JWT.

---

### Example Request
#### Headers
```http
Authorization: Bearer <jwt_token>
```

#### Request URL
```http
GET /captains/profile
```

---

### Example Response
```json
{
  "_id": "64c2ab3e7f3a1b001f6a3c4e",
  "fullName": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "AB123CD",
    "capacity": 4,
    "vehicleType": "car"
  },
  "status": "inactive",
  "location": {
    "lat": null,
    "lng": null
  },
  "createdAt": "2024-08-01T12:34:56.789Z",
}
```

---

### Error Responses
#### Unauthorized Access (401)
```json
{
  "message": "Unauthorized"
}
```

---

## Endpoint: `/captains/logout`

### Description
This endpoint logs out the currently authenticated captain by invalidating the provided JWT. The token is added to a blacklist, preventing future use.

---

### HTTP Method
`GET`

---

### Authentication
Requires a valid JWT.

---

### Example Request
#### Headers
```http
Authorization: Bearer <jwt_token>
```

#### Request URL
```http
GET /captains/logout
```

---

### Example Response
```json
{
  "message": "Logout successful"
}
```

---

### Error Responses
#### Unauthorized Access (401)
```json
{
  "message": "Unauthorized"
}
```