import mysql.connector

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Gitanjali03@",  # ⚠️ Put your MySQL password
        database="school"
    )

if __name__ == "__main__":
    conn = get_db_connection()
    if conn.is_connected():
        print("✅ Connected to MySQL successfully")