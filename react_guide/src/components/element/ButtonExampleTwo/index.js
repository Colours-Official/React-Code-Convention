import React from 'react';
import './styles.scss'


function ButtonExampleTwo({ children , size , color , fullWidth }) {

    return (
        <button className={`Button , ${size} , ${color} ,${fullWidth}}`}>
            {children}
        </button>
    );
} 

ButtonExampleTwo.defaultProps = {
    size: 'medium',
    color: 'blue',
    fullWidth : false,
    children : null
};  

export default ButtonExampleTwo;