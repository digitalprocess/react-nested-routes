import React, { Fragment } from 'react'

const Resource = ({ match, topics }) => {
	const topic = topics.find(({ id }) => id === match.params.topicId).resources.find(({ id }) => id === match.params.subId)

	return (
		<Fragment>
			<h3>{topic.name}</h3>
			<p>{topic.description}</p>
		</Fragment>
	)
}

export default Resource
