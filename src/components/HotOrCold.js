import React from 'react';

export default function HotOrCold(props) {
	if (props.hotOrCold === ""){
		return(
			<div>
				<h1>Make A Guess</h1>
			</div>
		)
	} else if (props.hotOrCold === "Hot") {
		return(
			<div>
				<h1>Hot!</h1>
			</div>
		)
	} else if (props.hotOrCold === "Cold") {
		return(
			<div>
				<h1>Cold!</h1>
			</div>
		)
	} else {
		return(
			<div>
				<h1>You WIN!!! this number was {props.correctNumber}</h1>
			</div>
			)
	}
}

HotOrCold.defaultProps = {
	value: 0
};