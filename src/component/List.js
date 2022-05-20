import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function List() {

	const [user, setUser] = useState(JSON.parse(localStorage.getItem("list")) ? JSON.parse(localStorage.getItem("list")) : [])


	console.log(user);

	return (
		<div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Dessert (100g serving)</TableCell>
							<TableCell align="right">Calories</TableCell>
							<TableCell align="right">Fat&nbsp;(g)</TableCell>
							<TableCell align="right">Carbs&nbsp;(g)</TableCell>
							<TableCell align="right">Protein&nbsp;(g)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{user.map((data, index) => (
							// data.likes.map(d=>{d.split()})
							<TableRow
								key={data.index}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{data.firstname}
								</TableCell>
								<TableCell align="right">{data.lastname}</TableCell>
								<TableCell align="right">{data.Gender}</TableCell>

								<TableCell align="right">{data.likes[1]}</TableCell>

								<TableCell align="right"></TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>


		</div>
	)
}

export default List