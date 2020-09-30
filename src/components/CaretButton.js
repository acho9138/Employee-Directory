import React from 'react';

function CaretButton(props) {
  return (
    <i className="fa fa-caret-down" onClick={props.onClick} style={{ cursor: 'pointer' }} />
  )
}

export default CaretButton;