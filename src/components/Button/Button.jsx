import React, {useEffect, useRef, useState} from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    const {colorText, setColorText} = useState()
    //Destructuring props, BEST PRACTICES PROGRAMMING
    const {callback, label} = props

    // Using useRef to create mutable reference value
    const buttonRef = useRef()

    // This value persist render after render till the component is demounted
    buttonRef.current = 10


    //Adding event listener, useEffect executed after component is mounted
    useEffect(() => {
        const handleClick = () => { console.log(`Clicking button ${label}`) }

        const handleScroll = () => {
            const button = buttonRef.current
            // If button touches border, change button color to black, otherwise do nothing
            const {y} = button.getBoundingClientRect()
            const color = y < 0 ? 'black' : ''
            setColorText(color)
        }
        // Printing buttonRef variable that is the button component DOM's
        console.log(buttonRef.current)
        const button = buttonRef.current
        // Function stored on memory, must be cleaned after component is demounted, do not use anonymous functions
        button.addEventListener('click', handleClick)

        //Set event listener on window
        window.addEventListener('scroll', handleScroll)

        //Mandatory to clean function after demounting component
        return () => {
            // event I want to clean
            button.removeEventListener('click', handleClick)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    /*Passing buttonRef to button component to get button DOM*/
    return (
            <button ref={buttonRef}  onClick={callback} className={styles.button} style={{color: colorText}}>
                {label}
            </button>
    );
};

export default Button;
