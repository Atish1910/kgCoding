import React from 'react';

const TodoItem = ({task, duedate, handleDeleteItem}) => {
    return (
        <>
         <li className='list-group-item py-2 border justify-content-around d-flex'>
            <span>{task}</span>
            <span>{duedate}</span>
            <button className='btn btn-danger' onClick={() => handleDeleteItem(task)}>Delete</button>
        </li>   
        </>
    );
};

export default TodoItem;