import React from 'react';
import {connect} from 'react-redux';

class Note extends React.Component{

    removeNote(){
        let {index, dispatch} = this.props;
        console.log('Note::removeNote.dispatch.REMOVE_ITEM');
        dispatch({type: 'REMOVE_ITEM', index});
    };

    render(){
        return <div>
                <p>{this.props.children}</p>
                <button onClick={this.removeNote.bind(this)}>Delete</button>
            </div>
    }
}

module.exports = connect()(Note);
