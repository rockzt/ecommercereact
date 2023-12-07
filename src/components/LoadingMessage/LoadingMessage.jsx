import React, { useState } from 'react';
import styles from './LoadingMessage.module.css';

const LoadingMessage = (props) => {
    //Destructuring props, BEST PRACTICES PROGRAMMING
    const {message} = props

    console.log(message)

    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>{message}</h1>
            </div>
        </div>
    );
};

export default LoadingMessage;
