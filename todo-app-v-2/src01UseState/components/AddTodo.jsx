import React, {useState } from 'react'

function AddTodo({handleNewItem}) {
    const [todoName, setTodoName] = useState("");
    const [todoDuedate, setTodoDueDate] = useState("");

    const handleTodoName = (e) => {
        setTodoName(e.target.value);
    }

    
    const handletodoDuedate = (e) => {
        setTodoDueDate(e.target.value);
    }

    const handleAddButtonClicked = (e) => {
        e.preventDefault();
        handleNewItem(todoName, todoDuedate);
        setTodoName("");
        setTodoDueDate("");
    }


    return (
        <div className="container">
            <form action="" onSubmit={handleAddButtonClicked} className="row justify-container-center align-items-center mb-4">
                <div className="col-lg-5">
                    <input type="text" className='pb-3 form-control' value={todoName} onChange={handleTodoName} placeholder='enter To To Here' />
                </div>
                <div className="col-lg-5">
                    <input type="date" className='pb-3 form-control'
                    value={todoDuedate}
                    onChange={handletodoDuedate}
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
