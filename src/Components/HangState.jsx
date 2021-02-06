import React, { Component } from 'react';
import '../Styles/HangState.css';

export default class HangState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
    };
  }

  importImage = () =>
    import(
      `../Images/${this.props.isWon ? 'win' : this.props.counter}.png`
    ).then((image) => {
      this.setState({ image: image.default });
    });

  componentDidMount() {
    this.importImage();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevProps.counter !== this.props.counter && this.props.counter !== 0) ||
      prevProps.isWon !== this.props.isWon
    )
      this.importImage();
  }

  render() {
    return (
      <div className=" col justify-content-center">
        <img src={this.state.image} alt="hangman" className="imgBlock" />
      </div>
    );
  }
}
