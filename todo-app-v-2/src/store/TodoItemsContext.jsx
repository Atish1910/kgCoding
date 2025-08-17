import { useReducer } from 'react';
import { createContext } from "react";

export const TodoItemsContext = createContext([]);

const TodoItemsContextProvider = () => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [])

  const addNewItem = (itemName, itemDuedate) => {
    const newItemAction = {
      type : "NEW_ITEM",
      payload : {
        itemName,
        itemDuedate
      }
    }
    dispatchTodoItems(newItemAction);
  }



  const deleteItem = (todoName) => {
    
    const deleteItemAction = {
      type : "DELETE_ITEM",
      payload : {
        todoName
      }
    }
    dispatchTodoItems(deleteItemAction);

  }


}
export default TodoItemsContextProvider;