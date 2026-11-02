# Student API

This is a simple REST API for viewing the student list, adding a student, and looking up a student by ID.

## Requirements

- Node.js and npm must be installed.

## Run the project

Open a terminal in the project folder and run:

```bash
npm install
npm start
```

The server runs at `http://localhost:3000` by default. To use a different port, set the `PORT` environment variable.

## API Endpoints

### Get all students

```http
GET http://localhost:3000/students
```

The successful response contains the student list in `data`.

### Add a student

```http
POST http://localhost:3000/students
Content-Type: application/json
```

Request body:

```json
{
  "name": "Aman",
  "course": "BCA"
}
```

Both `name` and `course` must be non-empty strings. A successful request returns `201 Created`.

### Get a student by ID

```http
GET http://localhost:3000/students/1
```

The student's information is returned in `data`. An invalid ID returns `400`, and an ID that does not match a student returns `404`.

## Note

Student data is currently stored in server memory. Newly added students are lost when the server stops or restarts. The initial student list contains three students.
