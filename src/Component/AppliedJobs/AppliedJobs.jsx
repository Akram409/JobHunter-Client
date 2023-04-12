import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";
import { getShoppingCart } from "../../fakedb/fakedb";

const AppliedJobs = () => {
  const [item,setItem] = useState()
  const [filters,setFilters] = useState([])

  const data = useLoaderData();
  const product = getShoppingCart()


  const handleFilterBtn = (bool) => {
    // console.log(bool)
    let news = []
    news = (item.filter(it => it.remote_or_onsite == bool))
    setFilters(news)
  }

  useEffect(() => {
    const news = []
    for(const id in product)
    {
        const item = data.find((it) => it.id == id)
        news.push(item)
    }
    setItem(news)
    setFilters(news)
  },[data])

console.log(item)
console.log(filters)
//   console.log(item)
  return (
    <>
    <div className="my-container text-center pic mt-7 mb-10">
        <h1 className="text-3xl font-bold">Applied Jobs</h1>
      </div>
      <div className="flex justify-end px-24">
        <div className="dropdown dropdown-end mt-10">
          <label tabIndex={0} className="btn bgc m-1 text-white">
            Filter
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bgc rounded-box w-52 text-lg"
          >
            <li>
              <button onClick={() => handleFilterBtn("Remote")}>Remote</button>
            </li>
            <li>
            <button onClick={() => handleFilterBtn("Onsite")}>OnSite</button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {
            filters && filters.map((items) => <AppliedJob 
                key={items.id}
                items={items}
                handleFilterBtn={handleFilterBtn}
            />)
        }
    </div>
    </>
  );
};

export default AppliedJobs;
