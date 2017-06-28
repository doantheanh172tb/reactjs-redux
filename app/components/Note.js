import React from 'react';

class Note extends React.Component{
    constructor(prop){
        super(prop);
    }

    removeNote(){
        let {index, handleRemove} = this.props;
        handleRemove(index);
    };

    render(){
        return <div>
                <p>{this.props.children}</p>
                <button onClick={this.removeNote.bind(this)}>Delete</button>
            </div>
    }
}

module.exports = Note;
