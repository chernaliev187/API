const express = require("express");
const mongoose = require("mongoose");

const taskRoute = require("./routes/task.route");
const userRoute = require("./routes/user.route");
const projectRoute = require("./routes/project.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", taskRoute);
app.use("/api/users", userRoute);
app.use("/api/projects", projectRoute);

app.get("/", (_, res) => {
    res.send("Hello, World");
});

const port = 3000;

mongoose.connect(
    "mongodb://localhost:27017/task-api",
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch(err => {
    console.error("Database connection error:", err);
});
