import TaskCard from "./TaskCard";

function Column({ title, tasks = [] }) {
    return (
        <div style={{ flex: 1, margin: "10px", padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "5px" }}>
            <h2>{title}</h2>
            {tasks.map((task, i) => (
                <TaskCard key={i} task={task} />
            ))}
        </div>
    );
}
export default Column;