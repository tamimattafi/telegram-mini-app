import React from 'react'
import './Button.css'

interface ButtonProps {
    title: string 
    handleClick?: () => void
}

function Button(props: ButtonProps) {
  return (
    <button className={'btn'} onClick={props.handleClick}>
        {props.title}
    </button>
  )
}

export default Button