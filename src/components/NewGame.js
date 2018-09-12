import React from 'react';

export default function NewGame(props) {
	//NewGame: Starts over with new number
	return (
		<div>
			<button
			onClick={e => props.onClick(e)}>New Game</button>
		</div>
	)
}

NewGame.defaultProps = {
	value: 0
};