import { useState } from "react"
import ButtonContainer from "./components/ButtonContainer"
import Display from "./components/Display"

function App() {

  const [calVal, setCalVal] = useState("7667");


  return (
    <>
    <section>
      <div className="container text-center py-5 mt-5 border ">
        <div className="row justify-content-center">
          <h1>Calculator V1</h1>
          <div className="col-lg-3">
              <Display calVal={calVal}></Display>
              <ButtonContainer></ButtonContainer>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default App
