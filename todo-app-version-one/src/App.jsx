import {
  useState
} from 'react';
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'
import FoodInput from './components/One/FoodInput';
import FoodItems from './components/One/FoodItems';
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


  // const todoItems = [{
  //     name: "Atishh",
  //     dueDate: "19-10-1998"
  //   },
  //   {
  //     name: "Tusha",
  //     dueDate: "07/10/1998"
  //   },
  //   {
  //     name: "Tejuuu",
  //     dueDate: "04/04/1999"
  //   }
  // ];


  return ( <>
  
  <section>
    <AppName></AppName>
    <AddTodo></AddTodo>
    {/* <TodoItems todoItems={todoItems}></TodoItems> */}

    <div className="container text-center border py-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-6 border border-2 py-5">
          <FoodInput handleInput={handleInput}></FoodInput>
          <FoodItems fruit={fruit}></FoodItems>
        </div>
      </div>
      {/* <Fruits></Fruits> */}
      <Items></Items>
    </div>
  </section>
    </>
  )
}

export default App