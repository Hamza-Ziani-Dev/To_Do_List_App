import React,{Component} from "react";
import ToDoItems from "./component/Todoitems/ToDoItems";
import AddItems from "./component/Additems/AddItems";
class App extends Component  {
  state = {
     items : [
       {id:1,name:"Hamza",age:26 },
       {id:2,name:"Nouhaila",age:21 },
       {id:3,name:"Aya",age:22 },
       {id:4,name:"Siham",age:24 },
      ]
  }
  deleteItems = (id) =>{
        // let items = this.state.items;
        // let i = items.findIndex(item => item.id === id);
        // items.splice(i, 1);
        // this.setState({items:items});
       let items = this.state.items.filter(item =>{
             return  item.id !== id 
       })
        this.setState({items:items});
  }
  addItem = (item) =>{
       item.id = Math.random(2)
       let items = this.state.items;
       items.push(item);
       this.setState({items:items});
  }
  render() {
    return (
      <div className="App container">
         <h1 className="text-center">To Do List</h1>
         <ToDoItems items={this.state.items} deleteItems={this.deleteItems} />
         <AddItems addItem ={this.addItem} />
      </div>
    );
  }
  
}

export default App;
