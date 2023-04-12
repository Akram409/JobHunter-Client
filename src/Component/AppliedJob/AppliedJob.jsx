import React from "react";
import { Link } from "react-router-dom";
import { getShoppingCart } from "../../fakedb/fakedb";

const AppliedJob = ({ items }) => {
  // console.log(items);
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
    id,
  } = items;

  return (
    <>
      <div className="mt-2 px-24 py-10">
        <div className="flex justify-between items-center p-8 shadow-2xl">
          {/* image */}
          <div className="flex item-center gap-8 ">
            <div className="flex items-center">
              <img src={company_logo} />
            </div>
            <div>
              <h2 className="card-title text-3xl">{job_title}</h2>
              <p className="mt-2">{company_name}</p>
              <div className="flex gap-4 my-4">
                <button className="btn btn-outline btn-info">
                  {remote_or_onsite}
                </button>
                <button className="btn btn-outline btn-info">
                  {fulltime_or_parttime}
                </button>
              </div>
              <div className="flex gap-6">
                <p>{location}</p>
                <p>{salary}</p>
              </div>
            </div>
          </div>
          <div>
            <Link to={`/featuredJob/${id}`} className="bgc btn text-white">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppliedJob;
