import { Timestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { addDocument } from '../../hooks/useDocument';

const styles = {
	tag: {
	display: "inline-block",
	color: "#b2b2b2",
	fontSize: "14px",
	backgroundColor: "#f1f1f1",
	borderRadius: "30px",
	padding: "7px 15px",
	fontWeight: "500",
	},
};

export const CreateJobPopup = () => {
	const [job, setJob] = useState({
		title: "",
		role: "",
		skills: [],
		rate: "",
		jobType: "",
		description: "",
	});

	const [tempSkill, setTempSkill] = useState("");

	const handleChange = (event) => {
		setJob((prev) => ({...prev, [event.target.name]: event.target.value}))
	};

	const handleChangeSkills = (event) => {
		if (event.key === "Enter") {
			setJob((prev) => ({...prev, skills: [...job.skills, event.target.value]}));
			setTempSkill("");
			return;
		}
		setTempSkill(event.target.value);
		return;
	}

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
										<option value="Разработчик"> Разработчик </option>
										<option value="Дизайнер"> Дизайнер </option>
										<option value="Швея"> Швея </option>
										<option value="СММ"> СММ </option>
									</select>
								</div>
							</div>
							<div className="col-lg-12">
								<input value={tempSkill} onChange={handleChangeSkills} onKeyDown={handleChangeSkills} type="text" name="skills" placeholder="Skills" />
								<ul className="skill-tags">
									{Array.isArray(job.skills) && job.skills.map((skill) => (
										<li>
											<span style={styles.tag} >{skill}</span>
										</li>
									))}
								</ul>
							</div>
							<div className="col-lg-6">
								<div className="price-br">
									<input onChange={handleChange}  type="text" name="rate" placeholder="Price" />
									<i className="la la-dollar"></i>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="inp-field">
									<select onChange={handleChange}  name='jobType'>
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