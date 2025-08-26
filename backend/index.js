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
app.get("/index.js", (req, res) => {
  res.json(tasks);
});

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));