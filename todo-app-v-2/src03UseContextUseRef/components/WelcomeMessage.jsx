import React, { useContext } from 'react';
import { TodoItemsContext } from '../store/TodoItemsContext';

const WelcomeMessage = () => {
    const {todoItems} = useContext(TodoItemsContext);
    return (
        <>
        {
            todoItems.length === 0 &&
         <h4 className='text-success text-center'>Bhaiii Enjoi Your Day</h4>   
        }
        </>
    );
};

export default WelcomeMessage;