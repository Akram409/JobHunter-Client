import React from "react";
import { Link } from "react-router-dom";

const FeaturedJob = ({ cardItem }) => {
    const {company_logo,company_name,remote_or_onsite,fulltime_or_parttime,location,salary,job_title} = cardItem

  return (
    <div className=" shadow-2xl temp p-10">
        <figure className="mb-6">
          <img
            src={company_logo}
          />
        </figure>
        <div className="">
          <h2 className="card-title text-3xl">{job_title}</h2>
          <p className="mt-2">{company_name}</p>
          <div className="flex gap-4 my-4">
            <button className="btn btn-outline btn-info">{remote_or_onsite}</button>
            <button className="btn btn-outline btn-info">{fulltime_or_parttime}</button>
          </div>
          <div className="flex gap-6">
            <p>{location}</p>
            <p>{salary}</p>
          </div>
          <div className="navbar-end mt-5">
          <Link to="/" className="bgc btn text-white">View Details</Link>
        </div>
        </div>
      </div>
  );
};

export default FeaturedJob;
