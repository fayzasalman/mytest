import React, { Component } from 'react';
import '../Styles/LetterBtns.css';

export default class Letters_Btn extends Component {
  componentDidUpdate() {
    if (this.props.counter === 0) {
      setTimeout(function () {
        alert('YOU LOST!');
      }, 100);
    }
  }

  render() {
    return (
      <div className="col justify-content-center">
  
          <div className="lettersBox mx-auto h-75 ">
            {this.props.letters.map((item) => (
              <button
                className="alphaLtrs"
                key={item}
                name={item}
                value={item}
                disabled={
                  this.props.fetched && this.props.guessedLetters
                    ? this.props.guessedLetters.has(item) ||
                      !this.props.counter ||
                      this.props.isWon
                    : false
                }
                onClick={this.props.fetched ? this.props.clickedButton : null}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

      </div>
    );
  }
}
