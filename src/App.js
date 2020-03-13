import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import topics from './data/topics.json'

import Home from './Home'
import Topics from './Topics'

function App() {
	return (
		<Router>
			<div style={{ padding: 20 }}>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/topics'>Topics</Link></li>
				</ul>
				<hr />
				<Route
					exact path='/'
					component={Home}
				/>
				<Route
					path='/topics'
					render={props => (
						<Topics
							{...props}
							topics={topics}
						/>
					)}
				/>
			</div>
		</Router>
	)
}

export default App
