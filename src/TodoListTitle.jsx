import React from 'react';
import './App.css';

class TodoListTitle extends React.Component {
    deleteToDoList =()=>{
        this.props.deleteToDoList(this.props.title)
    }

    render = () => {
        return (
            <div className="todoList-header">
                    <h3 className="todoList-header__title">{this.props.title}<button onClick={this.deleteToDoList}>X</button></h3>
            </div>

    )
    }
}

export default TodoListTitle;