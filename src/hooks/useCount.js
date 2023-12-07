import {useState} from "react";

/*Custom Hook*/
export const useCount = (initValue, incrementBy) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count > 0)
        {
            setCount(prev => prev - incrementBy)
        }
    }

    const increment = () => {
        /*Set count does not finish until this function is completed*/
        /*Getting the previous state of the variable and adding + 1*/
        setCount(prev => prev + incrementBy )
    }

    const reset = () => {
        setCount(initValue)
    }

    return { count, reset, decrement, increment }
}