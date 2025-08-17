import { useState } from "react"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage"


function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (todoName,dueDate) => {
    setTodoItems((currName) => {
      const newItem = [...currName, {
        name : todoName,
        date : dueDate
      }];
      return newItem;
    });
  }

  const handleDeleteItem = (todoName) => {
    const deleteItem = todoItems.filter((item) => item.name != todoName);
    setTodoItems(deleteItem);
  }



  return ( <>
        <section className='pt-5 mt-5 border'>
          <div className="container">
            <div className="row justify-content-center text-center">
              <h1>Tod App With <b>Use Ref</b></h1>
              <div className="col-lg-8">
                <AddTodo todoItems={todoItems} handleNewItem={handleNewItem}></AddTodo>
                {
                  todoItems.length === 0 &&
                  <WelcomeMessage></WelcomeMessage>
                }
                <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem}></TodoItems>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default App