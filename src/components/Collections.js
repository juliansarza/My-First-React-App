import React, { Component } from 'react';
import '../css/Collections.css';
import Movies from './Movies';

class Collections extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">
                        <Movies title="Movie1" description="funny" year="1234" genre="comedy" />
                        <Movies title="Movie2" description="dramatic" year="4321" genre="drama" />
                        <Movies title="Movie3" description="scary" year="1357" genre="horror" />
                        <Movies title="Movie4" description="action" year="7531" genre="action" />
                    </div>
                </div>
                <div>
                    <button className="btn-success">Add</button>
                </div>
            </div>
        )
    }
}

export default Collections;