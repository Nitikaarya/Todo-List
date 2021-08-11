import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './Todolist';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state={
    items:[],
    id:uuid(),  
    item:'',
    editItem:false
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
    }

  handleSubmit= (e) => {
    e.preventDefault();
    
  const newItem = {
    id: this.state.id,
    title: this.state.item
  }
  console.log(newItem);

  const updatedItems = [...this.state.items,newItem];
  console.log(updatedItems);
    this.setState({
      items:updatedItems ,
      item:'',
      id:uuid(),
      editItem:false
    })
}

//localstorage
componentDidUpdate(){
  localStorage.setItem('dataStore',JSON.stringify(this.state.items))
}

componentDidMount(){
  const dataStore = JSON.parse(localStorage.getItem('dataStore'));
}

handleDelete = (id) => {
        const filterItems = this.state.items.filter(item =>item.id !== id)
        this.setState({
          items: filterItems
        }) 
}

handleUpdate = (id) => {
  const filterItems = this.state.items.filter(item =>item.id !== id)
  const selectItem = this.state.items.find(item => item.id ===id);
  
  this.setState({
    items: filterItems,
    item:selectItem.title,
    editItem:true,
    id:id
  })
}

clearList = () => {
  this.setState({
    items:[]
  })
}

  render(){
    return (
    <div className="container">
        <div className="row">
          <div className="col-10 mt-auto col-md-8 mt-4">
            <h3 className="text-capitalize  text-center">To do Item</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}/>
            <TodoList items={this.state.items} 
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}/>
          </div>
        </div>
    </div>
  );
}}
  
export default App;