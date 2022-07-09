import React from 'react';

const ToDoItems = (props) => {
    const {items, deleteItems} = props;
    let length = items.length;

    const listesItems = length ?( //if (length > 0)
        items.map(item =>{
            return(
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={()=>{deleteItems(item.id)}}>&times;</span>
                </div>
            )
      })
    ) : //else
      <p>There is not items to show</p>
    return (
        <div className="listitems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">age</span>
                <span className="action title">Action</span>
            </div>
            {listesItems}
        </div>
    )
}
export default ToDoItems



