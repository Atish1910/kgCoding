import React, { useState } from 'react';

const Fruits = () => {
    const [fruit, setFruit] = useState([
        "Mango",
        "Apple",
        "banana"
    ]);

    const handleInput = (e) => {
        if(e.key == "Enter"){
            let item = e.target.value;
            const newItem = [...fruit , item];
            setFruit(newItem);
            e.target.value = "";
        }
    }

    return (
        <>
            <div className="row justify-content-center">
                <h3>I am Fruits Component</h3>
                <div className="col-lg-6 ">
                    <input type="text" onKeyDown={handleInput} className='form-control mb-4' placeholder='Enter fruit Name' />
                    <ul>
                        {
                            fruit.map((f) => (
                                <li className='border border-2'>{f}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Fruits;