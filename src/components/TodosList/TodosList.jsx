import React, { Component } from 'react';

class TodosList extends Component {
    state = {  }
    render() { 
        let todos=this.props.todos;
        let deleteTodo=this.props.deleteTodo;
        return(
            <div className="todos container">
                
            {
            this.props.todos.length===0?"No todos to display":
                    
            
            todos.map(function(todoObj){
                return(<div className="todo input-group m-4"  key={todoObj.id}>
                    <div className="form-control">{todoObj.todo}</div>
                    <button className="btn btn-danger" onClick = { (e) => {deleteTodo(todoObj.id); } }>Delete</button>
                </div>);
            

            })}
            </div>
        );
       
    }
}
 
export default TodosList;