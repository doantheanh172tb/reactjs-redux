import React from 'react';
import {connect} from 'react-redux';
import {toggle, addItem} from '../actions';

class NoteForm extends React.Component{
    handleSubmit(e){
        e.preventDefault();//not refresh page
        console.log('NoteForm::handleSubmit.dispatch.ADD_ITEM');
        const {dispatch} = this.props;
        dispatch(addItem(this.refs.txt.value));
        dispatch(toggle());
    }
    toggle(){
        console.log('NoteForm::toggle.dispatch.TOGGLE_IS_ADDING');
        const {dispatch} = this.props;
        dispatch(toggle());
    }
    render(){
        if(this.props.isAdding) return <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" ref="txt" placeholder="Name" />
            <br/>
            <button>Add</button>
        </form>;
        return <button onClick={this.toggle.bind(this)}>+</button>
    }
}

module.exports = connect(function (state) {
    return {
        isAdding: state.isAdding
    }
})(NoteForm);
