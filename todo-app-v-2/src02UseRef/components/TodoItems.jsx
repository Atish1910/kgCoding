import TodoItem from './TodoItem';

const TodoItems = ({todoItems, handleDeleteItem}) => {

    return (
        <>
         <ul className='list-group'>
            {
                todoItems.map((item) => (
                    <TodoItem item={item} key={item.name} task ={item.name} duedate={item.duedate} handleDeleteItem={handleDeleteItem} ></TodoItem>
                ))
            }
        </ul>   
        </>
    );
};

export default TodoItems;