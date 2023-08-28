import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { addDocument } from "../../hooks/useDocument";

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
    role: "Разработчик",
    tags: [],
    rate: "",
    jobType: "Full Time",
    description: "",
  });

  const [tempSkill, setTempSkill] = useState("");

  const handleChange = (event) => {
    setJob((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleChangeSkills = (event) => {
    event.stopPropagation();
    if (event.key === " ") {
      if (job.tags.includes(event.target.value)) return setTempSkill("");
      setJob((prev) => ({
        ...prev,
        tags: [...job.tags, tempSkill],
      }));
      setTempSkill("");
      return;
    }
    setTempSkill(event.target.value);
    return;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await addDocument("posts", {
      ...job,
      createdAt: Timestamp.fromDate(new Date()),
      author: {
        name: "Ислам",
        photoURL:
          "https://static.kulturologia.ru/files/u18046/dulatov-bro-13.jpg",
      },
      comments: [],
      likes: [],
      location: "Germany",
      views: 0,
    });

    if (response) {
      console.log(response);
    }
  };

  return (
    <div className="post-popup job_post">
      <div className="post-project">
        <h3>Post a job</h3>
        <div className="post-project-fields">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <input
                  onChange={handleChange}
                  type="text"
                  name="title"
                  placeholder="Title"
                  required
                />
              </div>
              <div className="col-lg-12">
                <div className="inp-field">
                  <select onChange={handleChange} name="role">
                    <option value="Разработчик">Разработчик</option>
                    <option value="Дизайнер">Дизайнер</option>
                    <option value="Швея">Швея</option>
                    <option value="СММ">СММ</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <input
                  value={tempSkill}
                  type="text"
                  name="skills"
                  placeholder="Skills"
                  onChange={handleChangeSkills}
                  onKeyDown={handleChangeSkills}
                  required
                />
                {Array.isArray(job.tags) && job.tags.length > 0 && (
                  <ul className="skill-tags">
                    {job.tags.map((skill) => (
                      <li>
                        <span style={styles.tag}>{skill}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="col-lg-6">
                <div className="price-br">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="rate"
                    placeholder="Price"
                    required
                  />
                  <i className="la la-dollar"></i>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inp-field">
                  <select onChange={handleChange} name="jobType">
                    <option value="Full Time">Full Time</option>
                    <option value="Half time">Half time</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <textarea
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="col-lg-12">
                <ul>
                  <li>
                    <button className="active" type="submit" value="post">
                      Post
                    </button>
                  </li>
                  <li>
                    <a href="#" title="">
                      Cancel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <a href="#" title="">
          <i className="la la-times-circle-o"></i>
        </a>
      </div>
    </div>
  );
};
