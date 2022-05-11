import React from 'react';
import styles from './styles.module.scss'


function ButtonExampleOne({ children , size , color , outline , fullWidth ,onClick}) {

    return (
        <button className={styles.Button} onClick={onClick}>
            {children}
        </button> 
    );
} 

ButtonExampleOne.defaultProps = {
    size: 'medium',
    color: 'blue',
    outline : false,
    fullWidth : false,
    children : 'title'
};  

export default ButtonExampleOne;