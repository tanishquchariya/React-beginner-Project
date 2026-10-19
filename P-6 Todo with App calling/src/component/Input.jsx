import React from 'react'

const Input = (props) => {
    return (
        <input type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            checked={props.checked}
            onChange={props.onChange} />
    )
}
export default Input