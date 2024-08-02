const CourseModel = require("../models/CourseModel");

const CreateCourse = async (req, res) => {
    try {
        const createCourse = await CourseModel.create(req.body);
        res.status(200).json({
            message: 'Course Create Successful...',
            data: createCourse,
            flag: 1
        });
    } catch (error) {
        res.status(500).json({
            message: "Error to Create data...",
            data: error,
            flag: -1
        });
    }
}

const getCourse = async (req, res) => {
    try {
        const getCourse = await CourseModel.find();
        res.status(200).json({
            message: "Course Data Fetch Successful...",
            data: getCourse,
            flag: 1
        });
    } catch (error) {
        res.status(500).json({
            message: "Error to Fetch Course Data...",
            data: error,
            flag: -1
        });
    }
}

module.exports = {
    CreateCourse,
    getCourse
}
