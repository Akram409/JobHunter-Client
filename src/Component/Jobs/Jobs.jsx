import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    fetch("Category.json")
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, []);
  return (
    <div className="mt-6 my-container">
      <div className="text-center">
        <h1 className="font-bold text-3xl my-4">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 mt-10">
        {jobsData.map((jobs) => (
          <Job jobs={jobs}></Job>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
