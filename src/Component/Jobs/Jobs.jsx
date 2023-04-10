import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobsData,setJobsData] = useState([])

    useEffect(() =>{
        fetch('Category.json')
        .then(res => res.json())
        .then(data => setJobsData(data))
    },[])
    return (
        <div>
            <div>
                <h1>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {
                jobsData.map(jobs => <Job
                    jobs={jobs}
                ></Job>)
            }
        </div>
    );
};

export default Jobs;