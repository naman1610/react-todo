
const Task = ({task,onDelete,index}) => {
    return (
        <div>
            <h3>{task} <button className = 'btn delbtn' onClick={() => {onDelete(index)}}>Delete</button></h3>
        </div>
    );
};

export default Task;