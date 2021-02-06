import React, { Component } from 'react';
import '../Styles/MatchedLetters.css';

export default class MatchedLetters extends Component {
  render() {
    let { guessedLetters, word } = this.props;

    return (
      <div>
        <div className="row justify-content-center">
          <div className={`col counter ${this.props.isWon ? 'blink_me' : ''}`}>
            {this.props.isWon
              ? 'YOU WON'
              : this.props.counter === 0
              ? 'YOU LOST'
              : `Counter: ${this.props.counter}`}
          </div>
          <div className="matchedLtrs">
            <div className="col-auto">
              {word.map((letter, i) => {
                let isLetterMached =
                  guessedLetters && guessedLetters.has(letter);
                return (
                  <p className={'letters'} key={i}>
                    <span
                      className={isLetterMached ? 'black-text' : 'white-text'}
                    >
                      {isLetterMached ? letter : '*'}
                    </span>
                    <span className="dashes">{'  '}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
