import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

function Data() {

	const [data, setdata] = useState({
		firstname: "",
		lastname: "",
		Gender: "",
		likes: [],
		language: [
			{
				id: Math.random(),
				lName: "",
				rating: null
			},
			{
				id: Math.random(),
				lName: "",
				rating: null
			}
		]

	})

	const handleSubmit = () => {
		console.log(data);
	}

	const handleLikes = (value) => {

		setdata({ ...data, likes: data.likes.includes(value) ? data.likes.filter((val) => val !== value) : [...data.likes, value] })
	}

	const handleLanguage = (e, index) => {
		// console.log(index);
		// console.log(e.target.value);
		console.log(e.target.name);
		let arr = [...data.language]
		console.log(arr);

		console.log(e.target.name);
		arr[index] = { ...arr[index], [e.target.name]: e.target.value }

		// console.log(arr);

		setdata({ ...data, language: arr })
	}

	const addLanguage = () => {
		setdata({
			...data,
			language: [...data.language,
			{
				id: Math.random(),
				lName: "",
				rating: null
			}
			]
		})

	}

	const removeLanguage = (index) => {
		setdata({ ...data, language: data.language.filter((dat, ind) => index !== ind) })
		console.log(data);

	}



	return (
		<div>
			<Stack direction="column" spacing={2} sx={{ alignItems: "center" }}>

				<TextField id="outlined-basic" label="firstname" variant="outlined" sx={{ width: "200px" }} onChange={(e) => setdata({ ...data, firstname: e.target.value })} />
				<TextField id="outlined-basic" label="lastname" variant="outlined" sx={{ width: "200px" }} onChange={(e) => setdata({ ...data, lastname: e.target.value })} />


				<h5><label>Gender</label></h5>
				<div>
					<input type="radio" name="Male" value={"Male"}
						checked={data.Gender === "Male"} onChange={(e) => setdata({ ...data, Gender: e.target.value })} />
					<label >Male</label>
				</div>

				<div>
					<input type="radio" name="FeMale" value={"FeMale"}
						checked={data.Gender === "FeMale"}
						onChange={(e) => setdata({ ...data, Gender: e.target.value })} />
					<label >FeMale</label>
				</div>

				<div>
					<input type="radio" name="Other" value={"Other"}
						checked={data.Gender === "Other"}
						onChange={(e) => setdata({ ...data, Gender: e.target.value })}
					/>
					<label >Other</label>
				</div>




				<h5>Likes</h5>



				<label><input className="form-check-input" type="checkbox" value={"Cricket"} checked={data.likes.includes("Cricket")} onChange={(e) => handleLikes(e.target.value)} />Cricket</label>

				<label><input className="form-check-input" value={"Football"} type="checkbox"
					checked={data.likes.includes("Football")}
					onChange={(e) => handleLikes(e.target.value)}
				/>Football</label>

				<label><input className="form-check-input" value={"Hockey"} type="checkbox"
					checked={data.likes.includes("Hockey")}
					onChange={(e) => handleLikes(e.target.value)}
				/>Hockey</label>

				{/* <label className="form-check-label">Angular</label> */}


				<h5>language</h5>

				{
					data.language.map((dat, index) => {
						return (
							<div key={dat.id} className='Info' style={{ dipslay: "flex", flexDirection: "row" }}>
								<TextField id="outlined-basic" label="language" variant="outlined" sx={{ width: "200px", marginRight: "5px" }}
									name="lName"
									onChange={(e) => handleLanguage(e, index)}
								/>

								<TextField id="outlined-basic" label="rate yourself out of 10" variant="outlined" sx={{ width: "200px" }}
									name={"rating"}
									onChange={(e) => handleLanguage(e, index)}
								/>

								<button onClick={() => removeLanguage(index)}>remove</button>
							</div>
						)
					})
				}

				<button onClick={addLanguage}>Add language</button>
				<button onClick={handleSubmit}>submit</button>
			</Stack>


		</div >
	)
}

export default Data