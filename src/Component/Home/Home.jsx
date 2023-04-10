import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import reader from '../../assets/Review.json'
import { ShoppingCartIcon } from "@heroicons/react/24/solid";


const Home = () => {
  return (
    <div className="my-container flex flex-col items-center justify-between lg:flex-row">
      {/* Text Content */}
      <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
        <div className="max-w-xl mb-6 lg:mt-8">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
          One Step <br className="hidden md:block" /> Closer To Your {" "}
            <span className="inline-block md:block text-blue-400">Dream Job</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <Link to="/" className="bgc sm:mb-3 btn md:w-auto md:mr-4">
            <div className="inline-flex items-center justify-center w-full h-full">
              <p className="mr-3">Get Started</p>
            </div>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* Lottie Animation */}
      <div className="relative lg:w-1/2 ">
        <div className="w-full lg:w-full lg:ml-auto h-56  sm:h-96">
          <Lottie animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
