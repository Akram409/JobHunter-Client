import React, { useContext } from "react";
import { FeaturedContext } from "../Home/Home";
import FeaturedJob from "../Featuredjob/FeaturedJob";

const FeaturedJobs = () => {
  const FeaturedInfo = useContext(FeaturedContext);
  return (
    <div className="mt-6 my-container">
      <div className="text-center">
        <h1 className="font-bold text-3xl my-4">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        {FeaturedInfo.map((cardItem) => (
          <FeaturedJob key={cardItem.id} cardItem={cardItem}></FeaturedJob>
        ))}
      </div>
      
    </div>
  );
};

export default FeaturedJobs;
