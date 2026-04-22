from flask import Flask, request, jsonify

app = Flask(__name__)

students = []
current_id = 1

# Create student
@app.route('/students', methods=['POST'])
def create_student():
    global current_id
    data = request.get_json()
    student = {
        "id": current_id,
        "name": data["name"]
    }
    students.append(student)
    current_id += 1
    return jsonify(student), 201

# Get all students
@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students), 200

# Get single student
@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    for student in students:
        if student["id"] == id:
            return jsonify(student), 200
    return jsonify({"error": "Not found"}), 404

# Update student
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.get_json()
    for student in students:
        if student["id"] == id:
            student["name"] = data["name"]
            return jsonify(student), 200
    return jsonify({"error": "Not found"}), 404

# Delete student
@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    global students
    students = [s for s in students if s["id"] != id]
    return jsonify({"message": "Deleted"}), 200

if __name__ == '__main__':
    app.run(debug=True)