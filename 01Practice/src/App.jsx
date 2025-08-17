import OneForm from "./component/interview/OneForm"
import TwoApiFetching from "./component/interview/TwoApiFetching"
import ThreeToggleBtn from "./component/interview/ThreeToggleBtn"




function App() {
  
  return (
    <>
    <section className="container pt-5 mt-5 border">
      <div className="">
        <h6 className="text-center">01 : Create form with Validation</h6>
        {/* <OneForm></OneForm> */}
      </div>
    </section>
    
    <section className="container pt-5 mt-5 border border-warning">
      <div className="">
        <h6 className="text-center">02 : Api Call Via Axios</h6>
        <TwoApiFetching></TwoApiFetching>
      </div>
    </section>
    
    <section className="container pt-5 mt-5 border border-warning">
      <div className="">
        <h6 className="text-center mb-5 text-center">03 : Create Button That Toggle Betwwen On & Off</h6>
        <ThreeToggleBtn></ThreeToggleBtn>
      </div>
    </section>
    </>
  )
}

export default App
