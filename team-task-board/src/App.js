import { useState, useEffect } from "react";
import Column from "./Column";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState({ todo: [], inProgress: [], done: [] });



  useEffect(() => {
     fetch("http://localhost:3001/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Team Task Board</h1>
      <NewTaskForm onTaskAdded={setTasks} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Column title="To Do" tasks={tasks.todo} />
        <Column title="In Progress" tasks={tasks.inProgress} />
        <Column title="Done" tasks={tasks.done} />
      </div>
    </div>
  );
}

export default App;