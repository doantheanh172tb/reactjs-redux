import React from 'react';

class Note extends React.Component{
    constructor(prop){
        super(prop);
    }
    render(){
        return <div>
                <p>{this.props.children}</p>
                <button>Delete</button>
            </div>
    }
}

module.exports = Note;
