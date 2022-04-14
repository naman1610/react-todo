import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import React, { useState, useEffect } from "react";

function App() {
  //Initialize the state
  let initTasks;
  if (localStorage.getItem("taskvals") === null) {
    initTasks = [];
  } else {
    initTasks = JSON.parse(localStorage.getItem("taskvals"));
  }

  const clrall = () => {
    localStorage.clear();
    modtasks([]);
  };

  const onDelete = (task) => {
    modtasks(taskvals.filter((t) => t.id !== task));
    localStorage.setItem("taskvals", JSON.stringify(taskvals));
  };

  const addTask = (task) => {
    let tempid = 0;
    if (taskvals.length > 0) {
      tempid = taskvals[taskvals.length - 1].id + 1;
    }
    modtasks([...taskvals, { id: tempid, title: task }]);
    // localStorage.setItem("taskvals", JSON.stringify(taskvals));
  };

  const [taskvals, modtasks] = useState(initTasks);
  useEffect(() => {
    localStorage.setItem("taskvals", JSON.stringify(taskvals));
  }, [taskvals]);

  return (
    <div className="container">
      <Header title="My To Do List" clrall = {clrall} />
      <AddTask addTask={addTask} />
      <Tasks lst={taskvals} onDelete={onDelete} />
    </div>
  );
}

export default App;
