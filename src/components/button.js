import React from "react";


const Button = ({color , text, onClick}) =>{
    

    return(
        <button onClick={onclick}
            style={{backgroundColor : color}} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'cyan'
}

export default Button;