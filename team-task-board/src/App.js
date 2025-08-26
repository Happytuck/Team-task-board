import { useState, useEffect } from "react";
import Column from "./Column";

function App() {
  const [tasks, setTasks] = useState({ todo: [], inProgress: [], done: [] });

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: "#ececec",
      }}
    >
      <Column title="To Do" tasks={tasks.todo} />
      <Column title="In Progress" tasks={tasks.inProgress} />
      <Column title="Done" tasks={tasks.done} />
    </div>
  );
}

export default App;