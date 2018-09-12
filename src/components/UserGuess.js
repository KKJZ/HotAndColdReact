import React from 'react';

export default function UserGuess(props) {
		return (
			<form onSubmit={e => {
				e.preventDefault();
				props.onSubmit(e.target.guessNumber.value);
				}
			}>

				<label htmlFor="GuessNumber">Guess here</label>

				<input 
				type="number"
				id="guessNumber"
				name="guessNumber"
				onChange={e => props.onChange(e)}
				// value={this.state.guessNumber}
				></input>

				<button>Submit</button>
			</form>
		)
}