import React, { useRef} from 'react';

const AddTodo = ({handleNewItem}) => {
    const todoNameRef = useRef("");
    const todoDateRef = useRef("");


    const handleAddButtonClicked = (e) => {
        e.preventDefault();
        const todoName = todoNameRef.current.value;
        const todoDueDate = todoDateRef.current.value;

        handleNewItem(todoName, todoDueDate);

        todoNameRef.current.value = "";
        todoDateRef.current.value = "";
    }



    return (
        <>
         <div className="">
            <form action="" onSubmit={handleAddButtonClicked} className=' form-control'>
                <div className="row">
                    <div className="col-lg-4"><input type="text" ref={todoNameRef} className='form-control' placeholder='Enter task' /></div>
                    <div className="col-lg-4"><input type="date" ref={todoDateRef}  className='form-control' /></div>
                    <div className="col-lg-2"><button className='btn btn-success'>Add</button></div>
                </div>
            </form>
        </div>   
        </>
    );
};

export default AddTodo;