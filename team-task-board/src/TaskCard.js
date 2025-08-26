function TaskCard ({ task }) {
    return (
        <div style= {{border: "1px solid gray", padding: "10px", margin: "5px", borderRadius: "5px", background: "white"}} >
            <h4>{task.title}</h4>
            <p>{task.description}</p>
        </div>
    );
}
export default TaskCard;