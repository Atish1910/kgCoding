import { useState } from "react"
import ButtonContainer from "./components/ButtonContainer"
import Display from "./components/Display"

function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) =>  {
    if(buttonText === "C"){
      setCalVal("");

    }else if( buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);

    }else{
      const addNewVal = calVal + buttonText;
      setCalVal(addNewVal);
    }
  }


  return (
    <>
    <section>
      <div className="container text-center py-5 mt-5 border ">
        <div className="row justify-content-center">
          <h1>Calculator V1</h1>
          <div className="col-lg-3">
              <Display calVal={calVal}></Display>
              <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default App
