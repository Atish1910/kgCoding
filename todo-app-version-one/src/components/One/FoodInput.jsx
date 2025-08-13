import React from 'react';

const FoodInput = ({handleInput}) => {
    return (
        <>
            <input type="text" onKeyDown={handleInput} className='form-control mb-4' placeholder='Enter fruit Name' />
        </>
    );
};

export default FoodInput;