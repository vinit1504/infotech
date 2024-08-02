const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/alag');

const db = mongoose.connection;

db.on("error", (error) => console.error("Connection error:", error));
db.once("open", () => console.log("Connected to the database"));

const UserRoutes = require("./routes/UserRoutes");
const CourseRoutes = require("./routes/Course");
const StateRoutes = require("./routes/StateRoutes");
const FindRoutes = require("./routes/FindRoutes");

app.use('/user', UserRoutes);
app.use('/course',CourseRoutes)
app.use("/state", StateRoutes);
app.use("/find", FindRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
