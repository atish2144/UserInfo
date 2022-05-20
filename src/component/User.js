import React, { useState } from 'react'

function User(props) {
	const string1 = "abc1"
	const [count, setcount] = useState(0)
	const handleChange = () => {
		setcount(prev => prev + 1)
	}
	return (
		<div>
			<button onClick={() => { props.alert(count); handleChange() }}>click</button>


		</div>
	)
}

export default User