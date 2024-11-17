const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const payload = req.query;
    const students = await getAllStudents(payload);

    res.status(200).json(students);

    //write your code

});

const handleAddStudent = asyncHandler(async (req, res) => {

    const payload = req.body;

    const result = await addNewStudent(payload);

    res.status(201).json(result);

    //write your code

});

const handleUpdateStudent = asyncHandler(async (req, res) => {

    const {id} = req.params;
    const payload = req.body

    const editedPayload = {...payload, id};

    const result = await updateStudent(editedPayload);

    res.status(200).json(result);
    //write your code

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {

    const {id} = req.params;

    const student = await getStudentDetail(id);

    res.status(200).json(student);
    //write your code

});

const handleStudentStatus = asyncHandler(async (req, res) => {

    const {id: userId} = req.params;

    const {reviewerId, status} = req.body;

    const result = await setStudentStatus({userId, reviewerId, status});

    res.status(200).json(result);

    //write your code

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
