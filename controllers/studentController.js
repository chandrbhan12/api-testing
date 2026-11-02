const students = [
    { id: 1, name: "karan", course: "MCA" },
    { id: 2, name: "Rahul", course: "B.Tech" },
    { id: 3, name: "Priya", course: "MBA" }

];

let nextStudentId = Math.max(...students.map(({ id }) => id)) + 1;

const get_Student = (req, res) => {
    return res.status(200).json({
        success: true,
        data: students,
    });
};

const createStudent = (req, res) => {
    const body = req.body;

    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return res.status(400).json({
            success: false,
            message: "Request body must be a JSON object",
        });
    }

    const { name, course } = body;

    if (typeof name !== "string" || typeof course !== "string") {
        return res.status(400).json({
            success: false,
            message: "name and course must be strings",
        });
    }

    const normalizedName = name.trim();
    const normalizedCourse = course.trim();

    if (!normalizedName || !normalizedCourse) {
        return res.status(400).json({
            success: false,
            message: "name and course are required",
        });
    }

    const newStudent = {
        id: nextStudentId++,
        name: normalizedName,
        course: normalizedCourse,
    };

    students.push(newStudent);

    return res.status(201).json({
        success: true,
        message: "Student created successfully",
        newStudent,
    });
};
const getStudentById = (req, res) => {
    const studentId = Number(req.params.id);

    if (!Number.isInteger(studentId) || studentId < 1) {
        return res.status(400).json({
            success: false,
            message: "Student ID must be a positive integer",
        });
    }

    const student = students.find(({ id }) => id === studentId);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found",
        });
    }

    return res.status(200).json({
        success: true,
        data: student,
    });
};

module.exports = { get_Student, createStudent, getStudentById };