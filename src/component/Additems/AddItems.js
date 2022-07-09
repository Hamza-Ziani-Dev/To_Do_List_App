import React, { Component } from 'react'
export class AddItems extends Component {
    state = {
        name : '',
        age : ''
    }
    handelChange = (e) => {
       this.setState({
           [e.target.id] : e.target.value
       })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
       if(e.target.name.value === ''|| e.target.age.value === ''){
           return false;
       }else{
        this.props.addItem(this.state);
        this.setState({
            name: '',
            age : ''
        })
       } 
    }
   
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="name" onChange={this.handelChange} placeholder="Enter Your Name..." value={this.state.name}/>
                    <input type="number" id="age" onChange={this.handelChange}  placeholder="Enter Your Age..." value={this.state.age}/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default AddItems
