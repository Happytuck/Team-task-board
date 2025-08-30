const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // allow frontend to talk to backend
app.use(express.json()); // allow JSON body parsing

// Temporary in-memory task storage
let tasks = {
  todo: [
    { title: "Setup project", description: "Initialize React + Node" },
    { title: "Build UI", description: "Create columns and cards" },
  ],
  inProgress: [
    { title: "Learn React", description: "Understand components & props" },
  ],
  done: [
    { title: "Install Node.js", description: "Installed successfully" },
  ],
};

// GET tasks endpoint
app.get("/", (req, res) => {
  res.json("backend running now try /tasks");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  console.log("Recieved new task:", req.body)
  const { column, task } = req.body;
  if (!task[column]) {
    return res.status(400).json({ error: "Invalid column"});
  }
  tasks[column].push(task);
  res.json(tasks);
});

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));