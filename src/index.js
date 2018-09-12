import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/Board';
import registerServiceWorker from './registerServiceWorker';

function computerNumber() {
	let Random = Math.floor(Math.random() * 100) + 1;
	return Random
}

ReactDOM.render(
	<Board />, 
	document.getElementById('root')
);
registerServiceWorker();
