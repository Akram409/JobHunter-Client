import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from "@heroicons/react/24/solid";
import './FeaturedJobDetails.css'
import { addToDb, getShoppingCart } from "../../fakedb/fakedb";

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
  }, [featureData.id]);

  useEffect(() => {
    setNewfeaturedData(oldFeaturedData.find((it) => it.id == featureData.id));
  }, [featureData.id, oldFeaturedData]);

  const handleFeaturedJob = (id) =>{
    const check = getShoppingCart()
    addToDb(id)
  }

  return (
    <>
      <div className="my-container text-center pic mt-7 mb-10">
        <h1 className="text-3xl font-bold">Job Details</h1>
      </div>
      <div className="grid grid-cols-2 px-24 py-10 gap-6 mb-32">
      <div>
      <h1 className=""><strong>Job Description: </strong>{newFeaturedData ? newFeaturedData.job_description : undefined}</h1>
      <br />
      <h1><strong>Job Responsibility: </strong>{newFeaturedData ? newFeaturedData.job_responsibility : undefined}</h1>
      <br />
      <h1><strong>Educational Requirements: </strong> <br />{newFeaturedData ? newFeaturedData.educational_requirements : undefined}</h1>
      <br />
      <h1><strong>Experiences: </strong> <br />{newFeaturedData ? newFeaturedData.experiences : undefined}</h1>
      </div>
      <div>
        <div className="card">
          <h1 className="text-xl"><strong>Job Details</strong></h1>
          <div className="horizontal my-4"></div>
          <div className="flex gap-1 items-center mb-1">
              <CurrencyDollarIcon className='h-5 w-5 text-blue-500' />
              <h1><strong>Salary : </strong>{newFeaturedData ? newFeaturedData.salary : undefined}</h1>
          </div>
          <div className="flex items-center gap-1 mb-6">
              <CalendarDaysIcon className='h-5 w-5 text-blue-500' />
              <h1><strong>Job Title : </strong>{newFeaturedData ? newFeaturedData.job_title : undefined}</h1>
          </div>
          <h1 className="text-xl"><strong>Contact Information</strong></h1>
          <div className="horizontal my-4"></div>
          <div className="flex gap-1 items-center mb-2">
              <PhoneIcon className='h-5 w-5 text-blue-500' />
              <h1><strong>Phone : </strong>{newFeaturedData ? newFeaturedData.phone : undefined}</h1>
          </div>
          <div className="flex gap-1 items-center mb-2">
              <EnvelopeIcon className='h-5 w-5 text-blue-500' />
              <h1><strong>Email : </strong>{newFeaturedData ? newFeaturedData.email : undefined}</h1>
          </div>
          <div className="flex gap-1 items-center mb-1">
              <MapPinIcon className='h-5 w-5 text-blue-500' />
              <h1><strong>Address : </strong>{newFeaturedData ? newFeaturedData.location : undefined}</h1>
          </div>
        </div>
        <div>
          <button onClick={() => handleFeaturedJob(newFeaturedData.id)} className="bgc btns btn text-white">Apply Now</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default FeaturedJobDetails;
