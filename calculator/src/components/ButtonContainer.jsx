function ButtonContainer({onButtonClick}) {
    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '.'];

    return (
        <>
          <div className="row py-3 border justify-content-center">
            {/* <p>{buttonNames}</p> */}
            {
                buttonNames.map((buttonName) => {   
                    return(
                        
                            <div className="col-lg-4 mb-3"
                                key={buttonName}>
                            <button className="btn btn-primary px-4" 
                                onClick={() => onButtonClick(buttonName)}
                                >{buttonName}
                            </button>
                            </div>
                        )
                })
            }
              </div>  
        </>
    )
}

export default ButtonContainer
