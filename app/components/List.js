import React from 'react'
import Note from './Note';
import NoteForm from './NoteForm';
import {connect} from 'react-redux';

class List extends React.Component{
    render(){
        return (<div>
            <NoteForm/>
            {this.props.list.map((e, i) =>
                <Note index={i} key={i}>
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
