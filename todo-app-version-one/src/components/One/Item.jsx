import React from 'react';

const Item = ({f, handleBuyButton, bought}) => {
    return (
        <>
            <li className={`list-group-item ${bought && 'active'} `}>{f}
                <button className='btn btn-warning' onClick={handleBuyButton}>Buy</button>
                </li>  
        </>
    );
};

export default Item;