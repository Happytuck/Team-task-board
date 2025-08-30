import { useState } from "react";

function NewTaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [column, setColumn] = useState("todo");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ column, task: { title, description } }),
    })
      .then((res) => res.json())
      .then((data) => {
        onTaskAdded(data); // update tasks in parent
        setTitle("");
        setDescription("");
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={column} onChange={(e) => setColumn(e.target.value)}>
        <option value="todo">To Do</option>
        <option value="inProgress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;