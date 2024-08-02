const FindModel = require("../models/FindModel");

const CreateFind = async (req, res) => {
    try {
        const createfind = await FindModel.create(req.body);
        res.status(201).json({
            message: 'find created successfully...',
            data:createfind,
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

const getFind = async (req, res) => {
    try {
        const find = await FindModel.find();
        res.status(200).json({
            message: "find data fetched successfully...",
            data: find,
            flag: 1
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching find data...",
            data: error,
            flag: -1
        });
    }
}

module.exports = {
    CreateFind,
    getFind
}
