const express = require("express");
const {
    get_Student,
    createStudent,
    getStudentById,
} = require("../controllers/studentController");

const router = express.Router();

router.get("/", get_Student);
router.post("/", createStudent);
router.get("/:id", getStudentById);

module.exports = router;
