import React, { useRef, useState } from 'react'

function AddTodo({handleOnClick}) {
    const [todoName, setTodoName] = useState("");
    const [todoDuedate, setTodoDueDate] = useState("");
    const noOfUpdates = useRef(0);

    const handleTodoName = (e) => {
        // console.log(e.target.value);
        setTodoName(e.target.value);
        noOfUpdates.current += 1;
    }

    
    const handletodoDuedate = (e) => {
        // console.log(e.target.value);
        setTodoDueDate(e.target.value);
        console.log("No Of updates : ",noOfUpdates.current);
    }

    const handleAddButtonClicked = (e) => {
        console.log(e);
        e.preventDefault();
        handleOnClick(todoName, todoDuedate);
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
