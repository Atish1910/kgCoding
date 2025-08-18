import { useState } from 'react';
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (todoName, duedate) => {
    const newItem = [...todoItems, {
      name : todoName,
      date : duedate
    }];
    setTodoItems(newItem);
  }

  const handleDeleletItem = (todoItemName) => {
    const deleteItem = todoItems.filter((item) => item.name != todoItemName );
    setTodoItems(deleteItem); 
  }

  return ( <>
        <section className='pt-5 mt-5 border'>
          <div className="container">
            <div className="row justify-content-center text-center">
              <h1>Tod App With Use State</h1>
              <div className="col-lg-8">
                <AddTodo handleNewItem={handleNewItem}></AddTodo>
                {
                  todoItems.length === 0 && <WelcomeMessage ></WelcomeMessage>
                }
                <TodoItems todoItems={todoItems} handleDeleletItem={handleDeleletItem}></TodoItems>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default App