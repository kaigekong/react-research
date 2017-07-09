import React from 'react';
import ReactDOM from 'react-dom';

function Page(){
	const topics = ['React', 'Flux', 'Redux1'];

	return (
		<div>
			<h1>React Book Title</h1>
			<ul>
				{topics.map(topic => (<li>{topic}</li>))}
			</ul>
		</div>
	);
}

ReactDOM.render(<Page />, document.getElementById('app'));