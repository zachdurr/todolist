import React from "react";
import ToDoList from "./ToDoList";

class ToDoForm extends React.Component {
    state = {text: '', todos: []}

    handleOnChange = (event) => {
        this.setState({
            text: event.target.value
        })
        console.log(this.state)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.setState({
            todos: [...this.state.todos, this.state.text],
            text: ''
        })
    }
    
    render() {
        return(
            <div>            
                <form onSubmit={this.handleOnSubmit}>
                <input type="text" value={this.state.text} onChange={this.handleOnChange}/>
                <input type="submit" />
            </form>
            <ToDoList text={this.state.text} todos={this.state.todos}/>
            </div>
            
        )
    }
}

export default ToDoForm