import React, { useContext, useRef } from 'react'
import { TodoItemsContext } from '../store/TodoItemsContext';

function AddTodo() {
    const {addNewItem} = useContext(TodoItemsContext);
    const todoNameElement = useRef("");
    const todoDueDateElement = useRef("");

    const handleAddButtonClicked = (e) => {

        e.preventDefault();
        const todoName = todoNameElement.current.value;
        const todoDuedate = todoDueDateElement.current.value;

        todoNameElement.current.value = "";
        todoDueDateElement.current.value = "";
        addNewItem(todoName, todoDuedate);
        
    }


    return (
        <div className="container">
            <form action="" onSubmit={handleAddButtonClicked} className="row justify-container-center align-items-center mb-4">
                <div className="col-lg-5">
                    <input type="text" ref={todoNameElement} className='pb-3 form-control'placeholder='enter To To Here' />
                </div>
                <div className="col-lg-5">
                    <input type="date" ref={todoDueDateElement} className='pb-3 form-control'
                     placeholder='Enter Date' />
                </div>
                <div className="col-lg-2">
                    <button className='btn btn-success' type='submit' >Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo
