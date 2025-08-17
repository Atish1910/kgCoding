
import TodoItem from '../components/TodoItem';

function TodoItems({todoItems, handleDeleletItem}) {
    return (
        <>
        <div className="container">
            {
                todoItems.map((item) => (
                    <TodoItem key={item.name} todoDate ={item.dueDate} todoName={item.name} handleDeleletItem={handleDeleletItem}></TodoItem>
                ))
            }
        </div>
        </>
    )
}

export default TodoItems
