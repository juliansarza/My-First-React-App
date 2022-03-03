import React, { Component } from 'react';
import '../css/Board.css';
//import Note from '..css/Note.css';
import Note from './Note';
import Collections from './Collections';

class Board extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">
                        <Note title="Title" body="Body" />
                        <Note title="My First Vacation" body="Costa Rica" />
                        <Note title="My First Movie" body="Lion King" />
                        <Collections />
                    </div>
                </div>
                <div>
                    <button className="btn-success">Add</button>
                </div>
            </div>
        )
    }
}

export default Board;