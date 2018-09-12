import React from 'react';

export default function GuessNumber(props) {
	//GuessNumber: tells you what number you are on 
	return (
		<div>
			<span>
			Guess Number: {props.number}
			</span>
		</div>
	)
}

GuessNumber.defaultProps = {
	value: 0
};