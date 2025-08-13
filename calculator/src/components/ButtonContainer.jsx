import React, { useState } from 'react'

function ButtonContainer() {
    const buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '.'];
    const [calcButton, setCalcButton] = useState("");

    console.log(calcButton);
    


    return (
        <>
          <div className="row py-3 border justify-content-center">
            <p>{calcButton}</p>
            {
                buttons.map((button) => {   
                    return(
                        
                            <div className="col-lg-4 mb-3">
                            <button className="btn btn-primary px-4" onClick={() => setCalcButton(button)} key={button}>{button}</button>
                            </div>
                        )
                })
            }
              </div>  
        </>
    )
}

export default ButtonContainer
