import React, { Component } from 'react';
import LetterBtn from './LetterBtns';
import MatchedLetters from './MatchedLetters';
import HangState from './HangState';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import _ from 'lodash';
import '../Styles/Main.css';

const initialState = {
  word: [],
  fetched: false,
  error: null,
  desc: null,
  fetcheddesc: false,
  errordesc: null,
  counter: 10,
  machedWord: [],
  isWon: false,
  guessedLetters: new Set(),
  corrletter: new Set(),
  showHint: false,
  alpha: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ],
};
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  getdata = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            word: result[0].split(''),
            fetched: true,
          });
          this.getdesc();
        },
        (error) => {
          this.setState({
            error: error,
          });
        }
      );
  };

  getdesc = () => {
    fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${this.state.word.join(
        ''
      )}`
    )
      .then((res) => res.json())
      .then(
        (result) =>
          this.setState({
            desc: result,
            fetcheddesc: true,
          }),
        (error) => {
          this.setState({
            errordesc: error,
          });
        }
      );
  };

  componentDidMount() {
    this.getdata();
  }

  handlePlayAgain = () => {
    this.setState({
      ...initialState,
      guessedLetters: new Set(),
    });
    this.getdata();
  };

  handleHintClick = () => {
    this.setState((prevState) => {
      return {
        showHint: !prevState.showHint,
      };
    });
  };

  clickedButton = (event) => {
    let won = false;
    let letterClicked = event.target.name;
    if (!this.state.word.includes(letterClicked)) {
      this.setState((prevState) => {
        return {
          counter: prevState.counter - 1,
          guessedLetters: prevState.guessedLetters.add(letterClicked),
        };
      });
    } else {
      this.setState((prevState) => {
        prevState.word.map((item, i) => {
          if (item === letterClicked) {
            prevState.machedWord[i] = item;
          }
          return item;
        });

        return {
          guessedLetters: this.state.guessedLetters.add(letterClicked),
          machedWord: prevState.machedWord,
          isWon: prevState.word.join('') === prevState.machedWord.join(''),
        };
      });
    }
    for (let letter of this.state.word) {
      if (this.state.guessedLetters.has(letter)) {
        continue;
      } else {
        won = false;
        break;
      }
    }
    if (won) {
      alert('won');
    }
  };

  render() {
    let obj = this.state.desc;
    console.log(this.state);
    return (
      <div className="container ">
        {this.state.fetcheddesc ? (
          <div className="justify-content-center">
            {this.state.showHint && (
              <div>
                {_.get(
                  obj,
                  ['0', 'meanings', '0', 'definitions', '0', 'definition'],
                  'No Available Data!'
                )}{' '}
              </div>
            )}
            {console.log(obj)}
            <MatchedLetters
              word={this.state.word}
              guessedLetters={this.state.guessedLetters}
              fetched={this.state.fetched}
              counter={this.state.counter}
              isWon={this.state.isWon}
            />
          </div>
        ) : (
          <Loader
            type="Puff"
            color="#1d586c"
            height={46}
            width={46}
            timeout={3000}
          />
        )}

        <div className="row">
          <HangState counter={this.state.counter} isWon={this.state.isWon} />{' '}
          <LetterBtn
            letters={this.state.alpha}
            clickedButton={this.clickedButton}
            guessedLetters={this.state.guessedLetters}
            counter={this.state.counter}
            fetched={this.state.fetched}
            isWon={this.state.isWon}
          />
        </div>
      </div>
    );
  }
}
