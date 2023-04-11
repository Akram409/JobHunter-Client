import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from "@heroicons/react/24/solid";

const FeaturedJobDetails = () => {
  const featureData = useParams();
  const [oldFeaturedData, setOldFeaturedData] = useState([]);
  const [newFeaturedData, setNewfeaturedData] = useState([]);

  useEffect(() => {
    const loaderData = async () => {
      const res = await fetch("/FeaturedJobs.json");
      const data = await res.json();
      setOldFeaturedData(data);
    };
    loaderData();
  }, []);

  useEffect(() => {
    setNewfeaturedData(oldFeaturedData.find((it) => it.id == featureData.id));
  }, [featureData.id, oldFeaturedData]);

  console.log(newFeaturedData);
  // const {job_responsibility,job_description,educational_requirements,experiences,phone,email,location,job_title,salary} = newFeaturedData
  return 
    // <div className="grid grid-cols-2 my-container">
    //   <div>
    //   <span><strong>Job Description: </strong>{job_description}</span>
    //   <br />
    //   <span><strong>Job Responsibility: </strong>{job_responsibility}</span>
    //   <br />
    //   <span><strong>Educational Requirements: </strong> <br />{educational_requirements}</span>
    //   <span><strong>Experiences: </strong> <br />{experiences}</span>
    //   </div>
    //   <div>
    //     <div>
    //       <span><strong>Job Details</strong></span>
    //       <div></div>
    //       <div className="flex gap-1 items-center">
    //           <CurrencyDollarIcon className='h-5 w-5 text-blue-500' />
    //           <span><strong>Salary : </strong></span>
    //       </div>
    //       <div className="flex gap-1 items-center">
    //           <CalendarDaysIcon className='h-5 w-5 text-blue-500' />
    //           <span><strong>Job Title : </strong></span>
    //       </div>
    //       <span><strong>Job Details</strong></span>
    //       <div></div>
    //       <div className="flex gap-1 items-center">
    //           <PhoneIcon className='h-5 w-5 text-blue-500' />
    //           <span><strong>Phone : </strong>{phone}</span>
    //       </div>
    //       <div className="flex gap-1 items-center">
    //           <EnvelopeIcon className='h-5 w-5 text-blue-500' />
    //           <span><strong>Email : </strong>{email}</span>
    //       </div>
    //       <div className="flex gap-1 items-center">
    //           <MapPinIcon className='h-5 w-5 text-blue-500' />
    //           <span><strong>Address : </strong></span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  
};

export default FeaturedJobDetails;
