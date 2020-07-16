import React from 'react'

function Button(props) {
    const buttonStyle = {
        margin: '10px 10px 10px 0',
        fontSize: '0.7em',
        borderRadius: '0.2em'
    }

    return (
        <button
          className="btn btn-default"
          style={buttonStyle}
          onClick={props.handleClick}>{props.label}</button>
      )
}

export default Button