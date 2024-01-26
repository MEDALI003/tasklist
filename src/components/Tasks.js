import React from 'react';

class Tasks extends React.Component {
  state = {
    Tasks: [
      { name: "Task1", id: Math.floor(Math.random() * 1000), isDone: false, Show: true },
      { name: "Task2", id: Math.floor(Math.random() * 1000), isDone: false, Show: true },
      { name: "Task3", id: Math.floor(Math.random() * 1000), isDone: false, Show: true },
    ],
    aj:true,
    taskname:"",
  };

  change = (x) => {
    this.setState({
      Tasks: this.state.Tasks.map(el =>
        el.id === x ? { ...el, isDone: !el.isDone } : el
      ),
    });
  };
  changes = (x) => {
    this.setState({
      Tasks: this.state.Tasks.map(el =>
        el.id === x ? { ...el, Show: !el.Show } : el
      ),
    });
  };
  ajout = (e) => {
    this.setState({taskname: e.target.value });
  };
  add = () => {
    this.setState({
      Tasks: [...this.state.Tasks, { name: this.state.taskname, id: Math.floor(Math.random() * 1000), isDone: false, Show: true }],
      taskname: "",
      aj:false
    });
  };
  
  render() {
    return (
      <div>
       <div style={this.state.aj?{display:"flex"}:{display:"none"}}> <input onChange={(e)=>this.ajout(e)}></input><button onClick={()=>this.add()}>add</button></div>
       
        {this.state.Tasks.map(el =>
       <div style={el.Show === true ? { display: "flex", justifyContent: "space-around" } : { display: "none" }}>
            <p>{el.name}</p>
            {console.log(this.state.taskname)}
            <button onClick={() => this.change(el.id)} style={el.isDone?{backgroundColor:"green"}:{backgroundColor:"red"}}>{el.isDone ? "undone" : "done"}</button>
            <button onClick={() => this.changes(el.id)}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

export default Tasks;
