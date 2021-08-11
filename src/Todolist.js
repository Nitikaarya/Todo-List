import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component{
    render(){
        const {items,clearList,handleDelete,handleUpdate} = this.props;
        return(
            <div>
                <ul className="list-group mt-5">
                    <h3 className="text-capitalize text-center">To do list</h3>
                    {items.map(item => {       
                        return(
                              <TodoItem key={item.id} title={item.title}
                              handleDelete={ ()=>handleDelete(item.id)}
                              handleUpdate={ () =>handleUpdate(item.id)}/>
                        )  
                    })}
                    
                    <button type="button" className="btn btn-danger mt-4"
                     onClick={clearList}>Clear List</button>
                </ul>
            </div>
        )
    }
    }