import { Timestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { addDocument } from '../../hooks/useDocument';

export const CreateJobPopup = () => {
	const [job, setJob] = useState({
		title: "",
		role: "",
		skills: "",
		rate: "",
		typeJob: "",
		description: "",
	});

	const handleChange = (event) => {
		setJob(prev => ({...prev, [event.target.name]: event.target.value}))
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const {error} = await addDocument("posts", {
			...job,
			crestedAt: Timestamp.fromDate(new Date()),
			author: {
				name: "Ислам",
				photoURL: "https://klike.net/uploads/posts/2019-01/1547366815_1.jpg"
			},
			tags: ["paint", "code", "cry"],
			comments: [],
			likes: [],
			location: "Germany",
			views: 0,
		});

		console.log(error);
	}
    return (
        <div className="post-popup job_post">
			<div className="post-project">
				<h3>Post a job</h3>
				<div className="post-project-fields">
					<form onSubmit={handleSubmit}>
						<div className="row">
							<div className="col-lg-12">
								<input onChange={handleChange} type="text" name="title" placeholder="Title" />
							</div>
							<div className="col-lg-12">
								<div className="inp-field">
									<select onChange={handleChange}  name='role'>
										<option>Category</option>
										<option>Category 1</option>
										<option>Category 2</option>
										<option>Category 3</option>
									</select>
								</div>
							</div>
							<div className="col-lg-12">
								<input onChange={handleChange}  type="text" name="skills" placeholder="Skills" />
							</div>
							<div className="col-lg-6">
								<div className="price-br">
									<input onChange={handleChange}  type="text" name="rate" placeholder="Price" />
									<i className="la la-dollar"></i>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="inp-field">
									<select onChange={handleChange}  name='typeJob'>
										<option>Full Time</option>
										<option>Half time</option>
									</select>
								</div>
							</div>
							<div className="col-lg-12">
								<textarea onChange={handleChange}  name="description" placeholder="Description"></textarea>
							</div>
							<div className="col-lg-12">
								<ul>
									<li><button className="active" type="submit" value="post">Post</button></li>
									<li><a href="#" title="">Cancel</a></li>
								</ul>
							</div>
						</div>
					</form>
				</div>
				<a href="#" title=""><i className="la la-times-circle-o"></i></a>
			</div>
		</div>
    )
}