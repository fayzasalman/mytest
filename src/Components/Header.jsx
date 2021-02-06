import React, { Component } from 'react';
import logo from '../Images/logo.png';
import '../Styles/Header.css';

export default class Header extends Component {
	render() {
		return (
			<div>
			<div className="header">
			  <img src={logo} className="header-logo" alt="logo" />
			</div>
				<h3 className="lead">Use the alphabet below to guess the word, or click hint to get a clue.</h3>
			</div>
		)
	}
}
