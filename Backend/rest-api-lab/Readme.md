# 🎓 Student Management REST API (Flask)

## 📌 Aim

To develop a RESTful API using Flask that performs CRUD (Create, Read, Update, Delete) operations to manage student records using in-memory storage.

---

## 📖 Project Description

This project is a simple backend REST API built using Flask.  
It allows users to:

- Create a new student
- Retrieve all students
- Retrieve a single student by ID
- Update student details
- Delete a student record

The data is stored in memory using a Python list.  
⚠️ Note: Data will reset when the server restarts.

---

## 🛠 Technologies Used

- Python 3.x
- Flask
- REST API
- JSON

---

## 📂 Project Structure

```
project/
│
├── app.py
├── routes/
│   └── student_routes.py
└── README.md
```

---

## 🚀 Installation & Setup Procedure

### Step 1: Install Python
Make sure Python 3.x is installed.

### Step 2: Create Virtual Environment (Recommended)

```bash
python -m venv venv
```

Activate it:

**Windows**
```bash
venv\Scripts\activate
```

**Mac/Linux**
```bash
source venv/bin/activate
```

---

### Step 3: Install Flask

```bash
pip install flask
```

---

## 📄 Code Implementation

---

### 🔹 app.py

```python
from flask import Flask
from routes.student_routes import student_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(student_bp)
    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
```

---

### 🔹 routes/student_routes.py

```python
from flask import Blueprint, request, jsonify

student_bp = Blueprint("students", __name__)

# In-memory storage
students = []
current_id = 1


# CREATE
@student_bp.route("/students", methods=["POST"])
def create_student():
    global current_id

    data = request.get_json()

    if not data or "name" not in data:
        return jsonify({"error": "Name is required"}), 400

    student = {
        "id": current_id,
        "name": data["name"],
        "age": data.get("age", None)
    }

    students.append(student)
    current_id += 1

    return jsonify(student), 201


# READ ALL
@student_bp.route("/students", methods=["GET"])
def get_students():
    return jsonify(students), 200


# READ ONE
@student_bp.route("/students/<int:student_id>", methods=["GET"])
def get_student(student_id):
    student = next((s for s in students if s["id"] == student_id), None)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    return jsonify(student), 200


# UPDATE
@student_bp.route("/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):
    data = request.get_json()
    student = next((s for s in students if s["id"] == student_id), None)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    student["name"] = data.get("name", student["name"])
    student["age"] = data.get("age", student["age"])

    return jsonify(student), 200


# DELETE
@student_bp.route("/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):
    global students

    student = next((s for s in students if s["id"] == student_id), None)

    if not student:
        return jsonify({"error": "Student not found"}), 404

    students = [s for s in students if s["id"] != student_id]

    return jsonify({"message": "Deleted successfully"}), 200
```

---

## ▶️ Running the Application

```bash
python app.py
```

Server will start at:

```
http://127.0.0.1:5000/
```

---

## 📌 API Endpoints

### 1️⃣ Create Student
**POST** `/students`

Request Body:
```json
{
  "name": "Gitanjali",
  "age": 20
}
```

---

### 2️⃣ Get All Students
**GET** `/students`

---

### 3️⃣ Get Single Student
**GET** `/students/<id>`

Example:
```
/students/1
```

---

### 4️⃣ Update Student
**PUT** `/students/<id>`

Request Body:
```json
{
  "name": "Updated Name",
  "age": 21
}
```

---

### 5️⃣ Delete Student
**DELETE** `/students/<id>`

---

## 📘 Procedure

1. Created a Flask application.
2. Used Blueprint for modular routing.
3. Implemented in-memory storage using a Python list.
4. Developed CRUD endpoints using HTTP methods:
   - POST → Create
   - GET → Read
   - PUT → Update
   - DELETE → Delete
5. Tested API using Postman or browser.
6. Verified correct HTTP status codes.

---

## 🎯 Learning Outcomes

After completing this project, the following concepts were understood:

- RESTful API architecture
- Flask Blueprints
- HTTP request handling
- JSON request and response handling
- Status codes (200, 201, 400, 404)
- Backend project structuring
- In-memory data storage

---

## ⚠️ Limitations

- Data is not persistent
- No database integration
- No authentication
- Minimal validation


