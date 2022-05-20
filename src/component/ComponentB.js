import React from 'react'

function ComponentB(props) {
	return (
		<div>

			<button onClick={props.handleChange}>
				Increment
			</button>
		</div>
	)
}

export default ComponentB