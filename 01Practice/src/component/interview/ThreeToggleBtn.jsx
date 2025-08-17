import React, { useState } from 'react';

const ThreeToggleBtn = () => {
    
  const [toggleBtn, setToggleBtn] = useState(false);

  const handleOnClick = () => {
    setToggleBtn(!toggleBtn);
  }
    return (
        <div>
             <button className={`btn   ${toggleBtn ? "btn-success" : "btn-danger"}`}
        onClick={handleOnClick}
        >{`${toggleBtn ? "On" : "Off"}`}</button>
        </div>
    );
};

export default ThreeToggleBtn;