import React from 'react';

import Guesslist from './GuessList';
import GuessNumber from './GuessNumber';
import NewGame from './NewGame';
import UserGuess from './UserGuess';
import HotOrCold from './HotOrCold';


export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			guess: 0,
			correctNumber: this.computerNumber(),
			guessList: [],
			guessNumber: 0,
			hotOrCold: ""
		};
	}

	computerNumber() {
		const min = 1;
		const max= 100;
		const rand = min + Math.random() * (max - min);
		this.setState({computerNumber: this.state.correctNumber + rand})
	}

	onUserGuessSubmit(e) {
		this.setState({guess: parseInt(e)},
			() => {this.isHOrC()})
		this.state.guessList.push(`${e}, `);
		this.state.guessNumber++;
	}

	isHOrC() {
		const guess = this.state.guess;
		const correct = this.state.correctNumber;
		if (guess === correct) {
			this.setState({hotOrCold: "Win"});
		} else {
			const distance = Math.abs(guess - correct);
			console.log(`Guess: ${guess}`);
			console.log(`Correct: ${correct}`);
			console.log(`distance: ${distance}`);
			if (distance > 20) {
				this.setState({hotOrCold: 'Cold'});
			} else {this.setState({hotOrCold: 'Hot'});
			}
		}
	}
	computerNumber() {
	let Random = Math.floor(Math.random() * 100) + 1;
	return Random
	}
	newGame() {
		this.setState({guess: 0});
		this.setState({correctNumber: this.computerNumber()});
		this.setState({guessList: []});
		this.setState({guessNumber: 0});
		this.setState({hotOrCold: ""});
	}

	onUserGuessChange(e) {
	}
	//NewGame: Starts over with new number
	//HotOrCold: tells the user if they are hot or cold
	//UserGuess: input for user to guess 
	//GuessNumber: tells you what number you are on 
	//GuessList: lists the other attempted guesses
	render() {
		return (
		<main>
			<NewGame
			onClick={value => this.newGame()} />

			<HotOrCold 
			hotOrCold={this.state.hotOrCold}
			correctNumber={this.state.correctNumber} />

			<UserGuess 
			onChange={value => this.onUserGuessChange(value)}
			onSubmit={value => this.onUserGuessSubmit(value)} />

			<GuessNumber 
			number={this.state.guessNumber} />

			<Guesslist 
			list={this.state.guessList} />

		</main>
	)}
}