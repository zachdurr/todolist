import React from "react";

class ToDoForm extends React.Component {
    state = {text: ''}

    handleOnChange = (event) => {
        this.setState({
            text: event.target.value
        })
        console.log(this.state)
    }

    handleOnSubmit = event => {
        event.preventDefault();

    }
    
    render() {
        return(
            <form onSubmit={this.handleOnSubmit}>
                <input type="text" value={this.state.text} onChange={this.handleOnChange}/>
                <input type="submit" />
            </form>
        )
    }
}

export default ToDoForm