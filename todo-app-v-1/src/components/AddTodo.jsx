import React from 'react'

function AddTodo() {
    return (
        <div className="container">
            <div className="row justify-container-center align-items-center">
                <div className="col-lg-4">
                    <input type="text" className='pb-3 form-control' placeholder='enter To To Here' />
                </div>
                <div className="col-lg-4">
                    <input type="date" className='pb-3 form-control' placeholder='Enter Date' />
                </div>
                <div className="col-lg-4">
                    <button className='btn btn-success'>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo
