import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../css/Movies.css';
import PropTypes from 'prop-types';

class Movies extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="col-sm-6">
                <div className="card card-view">
                    <div className="card-body">
                        <h5 className="card-title"> {this.props.title} </h5>
                        <p> {this.props.description} </p>
                        <p> {this.props.year} </p>
                        <p> {this.props.genre} </p>
                        <button className="btn-info">Edit</button>
                        <button className="btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

Movies.defaultProps = {
    title: "A cool title",
    genre: "A cool genre",
  };
   
  Movies.propTypes = {
    title: PropTypes.string
  };

  export default Movies;