import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'

import Resource from './Resource'

const Topic = ({ match, topics }) => {
	const topic = topics.find(({ id }) => id === match.params.topicId)

	return (
		<Fragment>
			<h2>{topic.name}</h2>
			<p>{topic.description}</p>
			<ul>
				{topic.resources.map(sub => (
					<li key={sub.id}>
						<Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
					</li>
				))}
			</ul>
			<hr/>
			<Route
				path={`${match.path}/:subId`}
				render={props => (
					<Resource
						{...props}
						topics={topics}
					/>
				)}
			/>
		</Fragment>
	)
}

export default Topic
