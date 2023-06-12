import React from 'react';
import "./BackDrop.css";

const Backdrop = ({sidebar, closeSideBar}) => {
    return(
        <div className={sidebar?"backdrop backdrop--open":"backdrop"} onClick={closeSideBar}></div>
    )
}

export default Backdrop;