import React from 'react';

export default function GuessList(props) {
	return (
			<div>
				<h2>Your Guesses</h2>
				<span>{props.list}</span>
			</div>
		)
}

GuessList.defaultProps = {
	value: 0
};