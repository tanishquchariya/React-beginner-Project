import React from 'react'

// const Button = ({
//     text, // props for button text
//     onClick // props for button click event
// }) => {
// or  
const Button = (props) => {

    return (

        <button onClick={props.onClick}>
            {props.text}
        </button>

    )
}

export default Button;