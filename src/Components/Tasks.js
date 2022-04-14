import React from "react";
import Task from "./Task";
// let i = 0;
const Tasks = (props) => {
  return (
    <div className="task">
      {props.lst.length===0 ? <h3>No todos remaining</h3> : (
        props.lst.map((task) => (
          <Task
            index={task.id}
            task={task.title}
            key={task.id}
            onDelete={props.onDelete}
          />
        ))
      )}
    </div>
  );
};

export default Tasks;
