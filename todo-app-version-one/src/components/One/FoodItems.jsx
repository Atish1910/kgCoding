import React, { useState } from 'react';
import Item from './Item';

const FoodItems = ({fruit}) => {
    const [activeItem, setAtiveItem] = useState([]);

    const handleBuyButton = (e, f) => {
        let newFruit = [...activeItem, f];
        setAtiveItem(newFruit);
        // console.log()
    }
    return (
        <>
            <ul className='list-group'>
                {
                    fruit.map((f) => (
                        <Item 
                            f={f} 
                            bought={activeItem.includes(f)} 
                            handleBuyButton={(e) => handleBuyButton(e, f)} 
                            key={f}>
                        </Item>
                    ))
                }
            </ul>   
        </>
    );
};

export default FoodItems;