import React, { Component } from 'react';
import TodosList from "./components/TodosList/TodosList.jsx";
import InputBox from './components/InputBox/InputBox.jsx';

class App extends Component {
  state = { todos:[
  {
    id:"1",
    todo:"Learn React"
  },
  {
  id:"2",
  todo:"Learn CSS"
  },  
  {id:"3"
  ,todo:"Learn BootStrap"}
],};


  deleteTodo = (id) => {

    let todos=this.state.todos;
    let updatedTodos=todos.filter(function(todoObj){
    return todoObj.id!==id;

  });
  this.setState({
    todos: updatedTodos,
  });
};

addTodo=(todo)=>{
  let updatedTodos=[...this.state.todos,{id:this.state.todos.length+1,todo:todo}]
  this.setState({
    todos: updatedTodos,
  });
}



  render() { 
    let todos=this.state.todos;
    
    return(
    <div className="App">
      <div className="position-relative">
      <h1 className="position-relative center">ToDoList</h1>
      </div>
   
     
       <InputBox addTodo={this.addTodo}></InputBox>
    <TodosList todos={todos} deleteTodo={this.deleteTodo}></TodosList>
   
    </div>);
  }
}
 
export default App;


