const UserModel = require("../models/UserModel");

const createUser = async (req, res) => {
    try {
        const userObj = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            experience: req.body.experience,
            course: req.body.course,
            find: req.body.find,
        }
        const savedUser = await UserModel.create(userObj);
        res.status(200).json({
            message: "User created successfully...",
            data: savedUser,
            flag: 1
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error in server !!!",
            data: error,
            flag: -1
        });
    }
}

module.exports = { createUser };
