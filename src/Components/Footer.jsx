import React, { Component } from 'react';
import '../Styles/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="text-center text-lg-start p-4 p-md-12">
        <div className="container mt-auto">
          <div className="row justify-content-center">
            <div className="col col-lg-3 col-md-4 m-1">
              <button
                className="btn btn-outline-dark"
                onClick={this.props.handlePlayagain}
              >
                Play again
              </button>
            </div>
            <div className="col col-lg-3 col-md-4 m-1">
              <button
                className="btn btn-outline-dark"
                onClick={this.props.handleHintClick}
              >
                Hint
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
