import React from "react";
import './Job.css'
const Job = ({ jobs }) => {
const {category_logo,category_name,jobs_available} = jobs
  return (
    <>
      <div className="card card-compact shadow-2xl temp p-7">
        <figure>
          <img
            src={category_logo}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category_name}</h2>
          <p>{jobs_available}</p>
        </div>
      </div>
    </>
  );
};

export default Job;
