import React from 'react'
import TodoItem from './TodoItem'

function TodoItems({todoItems}) {
    return (
        <>
        <div className="container">
            {
                todoItems.map((t) => (
                    <TodoItem key={t.name} todoName = {t.name} todoDate={t.dueDate}></TodoItem>
                ))
            }
        </div>
        </>
    )
}

export default TodoItems
