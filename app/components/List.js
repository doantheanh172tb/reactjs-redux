import React from 'react'
import Note from './Note';
import NoteForm from './NoteForm';

class List extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {mang:['A1', 'A2', 'A3', 'A4', 'A4']};
    }

    remove(index){
        console.log('List.remove(index)', index);
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    }

    add(note){
        console.log('List.add(note)', note);
        this.state.mang.push(note);
        this.setState(this.state);
    }

    render(){
        return (<div>
            <NoteForm handleSubmit={this.add.bind(this)} />
            {this.state.mang.map((e, i) =>
                <Note index={i} key={i} handleRemove={this.remove.bind(this)}>
                {e}
                </Note>)}
        </div>)
    }
}

module.exports = List;
