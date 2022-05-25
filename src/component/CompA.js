import React, { useContext } from 'react'
// import { firstName } from '../App'

function CompA(props) {
	// const { fn, ln } = useContext(firstName)
	return (
		<div>
			{/* {console.log(fn)} */}
			{/* {console.log(ln)} */}

			<label>
				{props.data}
			</label>
			<button onClick={props.handleChange}>+</button>

		</div>
	)
}

export default CompA