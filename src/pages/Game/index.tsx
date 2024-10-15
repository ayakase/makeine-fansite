import Overlay from "../../components/Particles/OverlayAnimation";
import { useState } from "react";

export function Game() {
  let [todo, setTodo] = useState<string[]>([]);
  let [newTask, setNewTask] = useState<string>("");

  // Function to handle adding a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTodo([...todo, newTask]);
      setNewTask(""); // Clear the input
    }
  };
  const removeTask = (index: Number) => {
    setTodo(todo.filter((_, i) => i !== index));
  };
  return (
    <>
      <Overlay name="komari"></Overlay>
      <div>
        <h2>Todo List</h2>
        {/* Input for the new task */}
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        {/* Button to add the task */}
        <button onClick={addTask}>Add Task</button>
        {/* Display the tasks */}
        <ul>
          {todo.map((task, index) => (
            <li key={index}>
              <p>{task}</p>
              <button onClick={() => removeTask(index)}>del</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
