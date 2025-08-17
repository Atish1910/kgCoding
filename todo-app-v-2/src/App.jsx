import { useReducer } from 'react';
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage';
import { TodoItemsContext } from './store/TodoItemsContext';

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if(action.type === "NEW_ITEM"){
    newTodoItems = [...currTodoItems, {
      name : action.payload.itemName,
      dueDate : action.payload.itemDuedate
    }];
    

  }
  else if (action.type === "DELETE_ITEM"){
    newTodoItems = currTodoItems.filter((item) => item.name != action.payload.todoName);
  }
  return newTodoItems;
}

function App() {

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