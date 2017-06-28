import React from 'react';

class NoteForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {isAdding: false};
    }
    handleSubmit(e){
        e.preventDefault();//not refresh page
        this.props.handleSubmit(this.refs.txt.value);
        this.refs.txt.value = '';
        this.toggle();
    }
    toggle(){
        this.state.isAdding = !this.state.isAdding;
        this.setState(this.state)
    }
    render(){
        if(this.state.isAdding) return <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" ref="txt" placeholder="Name" />
            <br/>
            <button>Add</button>
        </form>
        return <button onClick={this.toggle.bind(this)}>+</button>
    }
}

module.exports = NoteForm;
