import React from 'react'

export default (props) => {
    return (
        <div className={props.styleClass}>
            <div className="spinner-grow" role="status" />
            <div className="spinner-grow" role="status" />
            <div className="spinner-grow" role="status" />
        </div>)
}