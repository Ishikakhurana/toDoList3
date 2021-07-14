import React, { Component } from 'react';

class InputBox extends Component {
    state = {
        value:"",
      }
      
      handleChange=(e)=>{
          let val=e.target.value;
          this.setState({
              value:val,
          });
    }

      handleAdd=(e)=>{
          if(this.state.value===""){
              return;
          }
          this.props.addTodo(this.state.value);
          this.setState({
              value:""
          })
      }
      handlekeyPress=(e)=>{
          if(e.key==='Enter'){
            if(this.state.value===""){
                return;
            }
            this.props.addTodo(this.state.value);
            this.setState({
                value:""
            })  
          }
      }

    render() { 
        return (<div className="container">
            <div className="input-group m-4">
            <input className="form-control" value={this.state.value} onKeyPress={this.handlekeyPress} type="text" onChange={this.handleChange}/>
            <button className="btn btn-info" onClick={this.handleAdd} >AddToDo</button>
            </div>
            
        </div> );
    }
}
 
export default InputBox;
