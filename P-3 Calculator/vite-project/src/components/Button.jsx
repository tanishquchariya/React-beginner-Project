import React from 'react'

const Button = ({ value, placeholder, onClick,className  }) => {
  return (
    <button
      className={`calcButton ${className || ""}`}
      value={value}
      onClick={onClick}
    >
      {placeholder}
    </button>
  )
}

export default Button