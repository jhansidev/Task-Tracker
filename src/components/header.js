import React from "react";
import Button from "./button";

const Header =({ title}) => {
    const onClick = () => {
        console.log('clicked');
    }

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add Task' onClick={onClick} />

        </header>
    )

}

Header.defaultProps ={
    title : 'Task Tracker',

}



export default Header;