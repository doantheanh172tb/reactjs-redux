import React from 'react'
import Note from './Note';
import NoteForm from './NoteForm';
import {connect} from 'react-redux';

class List extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {list:['A1', 'A2', 'A3', 'A4', 'A4']};
    }

    remove(index){
        console.log('List.remove(index)', index);
        this.state.list.splice(index, 1);
        this.setState(this.state);
    }

    add(note){
        console.log('List.add(note)', note);
        this.state.list.push(note);
        this.setState(this.state);
    }

    render(){
        return (<div>
            <NoteForm handleSubmit={this.add.bind(this)} />
            {this.props.list.map((e, i) =>
                <Note index={i} key={i} handleRemove={this.remove.bind(this)}>
                {e}
                </Note>)}
        </div>)
    }
}

module.exports = connect(function (state) {
    return {
        list: state.list
    }
})(List);
