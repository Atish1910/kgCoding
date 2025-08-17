import {
  useState
} from 'react';
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import Items from './components/Items';

function App() {

      const [fruit, setFruit] = useState([]);

          const handleInput = (e) => {
        if(e.key == "Enter"){
            let item = e.target.value;
            const newItem = [...fruit , item];
            setFruit(newItem);
            e.target.value = "";
        }
    }


  return ( <>
  
  <section>
    <AppName></AppName>
    <AddTodo></AddTodo>

    <div className="container text-center border py-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-6 border border-2 py-5">
        </div>
      </div>
      <Items></Items>
    </div>
  </section>
    </>
  )
}

export default App