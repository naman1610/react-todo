import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const submitTask = (e) => {
    e.preventDefault();
    if (task === "") {
      alert("Please enter a task");
    }
    else {
    addTask(task);
    }
    setTask("");
  };

  const [task, setTask] = useState("");
  return (
    <form action="" className="add-form form-control">
      <label htmlFor="titleinp">Task</label>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="add-input"
      />
      <input
        type="submit"
        className="btn btn-block"
        value="Add"
        onClick={submitTask}
      />
    </form>
  );
};

export default AddTask;
