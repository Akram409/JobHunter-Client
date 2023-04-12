import React, { useContext, useState } from "react";
import { FeaturedContext } from "../Home/Home";
import FeaturedJob from "../Featuredjob/FeaturedJob";

const FeaturedJobs = () => {
  let FeaturedInfo = useContext(FeaturedContext);
  const [isSeeAll,setSeeAll] = useState(true)

  const checkBtn = () =>{
    setSeeAll(!isSeeAll)
  }

  if(isSeeAll)
  {
    FeaturedInfo = FeaturedInfo.slice(0,4)
  }
  

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
        {FeaturedInfo && FeaturedInfo.map((cardItem) => (
          <FeaturedJob key={cardItem.id} cardItem={cardItem}></FeaturedJob>
        ))}
      </div>
      {
        isSeeAll && <div className="text-center mt-12">
        {
          <button onClick={() => checkBtn()} className="bgc btn text-white">
            See All Jobs
          </button>
        }
      </div>
      }
      {
        !isSeeAll && <div className="text-center mt-12">
        {
          <button onClick={() => checkBtn()} className="bgc btn text-white">
            See Less Jobs
          </button>
        }
      </div>
      }
      
    </div>
  );
};

export default FeaturedJobs;
