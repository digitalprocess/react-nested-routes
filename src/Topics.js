import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'

import Topic from './Topic'

const Topics = ({ match, topics }) => {
	return (<Fragment>
		<h1>Topics</h1>
		<ul>
			{topics.map(({name, id}) => (
				<li key={id}>
					<Link to={`${match.url}/${id}`}>{name}</Link>
				</li>
			))}
		</ul>
		<hr/>
		<Route
			path={`${match.path}/:topicId`}
			render={props => (
				<Topic
					{...props}
					topics={topics}
				/>
			)}
		/>
	</Fragment>)
}

export default Topics
