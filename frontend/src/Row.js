import React from 'react'

function Row(props) {
    return (
        <div className="row" style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            {props.children}
        </div>
      )
}

export default Row