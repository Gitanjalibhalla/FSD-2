# 🔐 Flask Authentication Experiment

This project demonstrates three types of authentication using Flask:

1. Basic Authentication
2. Simple Token Authentication
3. JWT (JSON Web Token) Authentication

It is created for learning and understanding how different authentication methods work in backend applications.

---

## 🚀 Features

- Basic Auth using username & password
- Custom Token Auth using Base64 encoding
- JWT Authentication using flask-jwt-extended
- Role-based access (Admin only route)
- Simple in-memory user store

---

## 🛠️ Technologies Used

- Python
- Flask
- Flask-JWT-Extended

---

## 📦 Installation

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd experiment-9
```

### 2️⃣ Create virtual environment

```bash
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
```

### 3️⃣ Install dependencies

```bash
pip install flask flask-jwt-extended
```

---

## ▶️ Run the Application

```bash
python app.py
```

Server will run on:

```
http://localhost:5030
```

---

# 🔑 Available Routes

---

## 1️⃣ Basic Authentication

### Route:

```
GET /basic-protected
```

### How to Test:

Use Postman → Authorization → Basic Auth

- Username: admin
- Password: admin123

---

## 2️⃣ Simple Token Authentication

### 🔹 Login

```
POST /token-login
```

Body (JSON):

```json
{
  "username": "admin",
  "password": "admin123"
}
```

You will receive a token.

### 🔹 Access Protected Route

```
GET /token-protected
```

Add Header:

```
x-auth-token: <your_token>
```

---

## 3️⃣ JWT Authentication

### 🔹 Login

```
POST /jwt-login
```

Body:

```json
{
  "username": "admin",
  "password": "admin123"
}
```

Response:

```json
{
  "access_token": "your_jwt_token"
}
```

### 🔹 Access JWT Protected Route

```
GET /jwt-protected
```

Header:

```
Authorization: Bearer <your_jwt_token>
```

---

## 👑 Admin Only Route

```
GET /admin-only
```

Only accessible if logged in as:

- username: admin
- password: admin123

Guest users will receive:

```
403 - Admins only
```

---

## 👤 Default Users

| Username | Password | Role  |
| -------- | -------- | ----- |
| admin    | admin123 | admin |
| guest    | guest123 | user  |

---

## 📚 Learning Outcome

After completing this experiment, you will understand:

- Difference between Basic Auth, Token Auth, and JWT
- How JWT works (header, payload, signature)
- How to protect routes in Flask
- Role-based access control
- How authentication headers work

---
