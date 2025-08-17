import React, { useState } from 'react';

const Items = () => {
    const [items, setItems] = useState([
        "Apple",
        "Mango",
        "Pinapple",
        "lithchi"
    ]);
    const [activeItems, setActiveItems] = useState([]);

    const handleBuyBtn = (e, item) => {
        const newItem = [...activeItems, item];
        setActiveItems(newItem);
        console.log(item);
    }
    return (
        <>
        <ul className='list-group'>
            {
                items.map((item) => {
                    const baught = activeItems.includes(item);
                    return(
                        <li className={`list-group-item ${baught && 'active'}`} key={item}>
                        <span>{item}</span>
                        <button className='btn btn-warning' onClick={(e) => handleBuyBtn(e, item)}> Buy</button>
                        </li>
                    )
                })
            }
        </ul>
        </>
    );
};

export default Items;