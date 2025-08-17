import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoItemsContext } from '../store/TodoItemsContext'

function TodoItems() {
    const {todoItems} = useContext(TodoItemsContext);
    return (
        <>
        <div className="container">
            {
                todoItems.map((t) => (
                    <TodoItem key={t.name} todoName={t.name} todoDate={t.dueDate}></TodoItem>
                ))
            }
        </div>
        </>
    )
}

export default TodoItems
