import React from 'react'

function TodoItem({ todoName, todoDate }) {
    return (
        <>
          <div className="row justify-container-center align-items-center border border-dark py-3">
                <div className="col-lg-4">
                    <h6>{todoName}</h6>
                </div>
                <div className="col-lg-4">
                    <h6>{todoDate}</h6> 
                </div>
                <div className="col-lg-4">
                    <button className='btn btn-danger'>delete</button>
                </div>
            </div>  
        </>
    )
}

export default TodoItem
