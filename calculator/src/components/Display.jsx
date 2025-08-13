import React from 'react'

function Display({calVal}) {
    return (
        <>
        <div className="">
                <input type="text" placeholder="Select Number" value={calVal} readOnly className="form-control"/>
              </div>
        </>
    )
}

export default Display
