import React from "react";

class ToDoList extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render() {
        return(
        <div>
            {this.props.todos.map((todo) => {
                return <li>{todo}</li>
            })}
        </div>)
    }
}

export default ToDoList