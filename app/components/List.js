import React from 'react'
import Note from './Note';

class List extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {mang:['A1', 'A2', 'A3', 'A4', 'A4']};
    }
    render(){
        return (<div>
            {this.state.mang.map((e, i) => <Note key={i}>{e}</Note>)}
        </div>)
    }
}

module.exports = List;
