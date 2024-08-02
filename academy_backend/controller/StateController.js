const StateModel = require("../models/StateModel");

const CreateState = async (req, res) => {
    try {
        const createState = await StateModel.create(req.body);
        res.status(201).json({
            message: 'State created successfully...',
            data: createState,
            flag: 1
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating state...",
            data: error,
            flag: -1
        });
    }
}

const getState = async (req, res) => {
    try {
        const states = await StateModel.find();
        res.status(200).json({
            message: "State data fetched successfully...",
            data: states,
            flag: 1
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching state data...",
            data: error,
            flag: -1
        });
    }
}

module.exports = {
    CreateState,
    getState
}
