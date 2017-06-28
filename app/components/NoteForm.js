import React from 'react';

class NoteForm extends React.Component{
    constructor(props){
        super(props);
    }
    handleSubmit(e){
        e.preventDefault();//not refresh page
        this.props.handleSubmit(this.refs.txt.value);
        this.refs.txt.value = '';
    }
    render(){
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" ref="txt" placeholder="Name" />
            <br/>
            <button>Add</button>
        </form>
    }
}

module.exports = NoteForm;
