import {
  useState
} from 'react';
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage';
import { TodoItemsContext } from './store/TodoItemsContext';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  
  const addNewItem = (itemName, itemDuedate) => {
    setTodoItems((currVal) => [...currVal, {
        name: itemName,
        dueDate: itemDuedate
      }]
    );
  }

  const deleteItem = (todoName) => {
    const newItemsList = todoItems.filter((item) => item.name != todoName);
    setTodoItems(newItemsList);
  }


  return ( <>
      <TodoItemsContext.Provider value={{todoItems , addNewItem, deleteItem}}>
        <section className='pt-5 mt-5 border'>
          <div className="container">
            <div className="row justify-content-center text-center">
              <h1>Tod App With Use Context & Useref Hook</h1>
              <div className="col-lg-8">
                <AddTodo></AddTodo>
                <WelcomeMessage ></WelcomeMessage>
                <TodoItems></TodoItems>
              </div>
            </div>
          </div>
        </section>
      </TodoItemsContext.Provider>
    </>
  )
}

export default App