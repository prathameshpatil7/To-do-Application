import React from 'react'
import './TaskCard.css'

function TaskCard(props) {
    const classes = 'taskCard ' + props.className;
    return (
      <div className={classes}>{props.children}</div>
    )
}

export default TaskCard