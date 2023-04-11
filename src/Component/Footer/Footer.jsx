import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="bg-black text-white px-20 pt-36 pb-10">
      <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-9 '>
        <div className="box">
          <h1 className="card-title text-white text-4xl mb-3">CareerHub</h1>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="mt-7">
            <img src="../../../resources/Icons/Group 9969.png" alt="" />
          </div>
        </div>
        <div className="box">
          <h1 className="card-title text-white">Company</h1>
          <p>About Us</p>
          <p>Work</p>
          <p>Latest News</p>
          <p>Careers</p>
        </div>
        <div className="box">
          <h1 className="card-title text-white">Product</h1>
          <p>Prototype</p>
          <p>Plans & Pricing</p>
          <p>Customers</p>
          <p>Integrations</p>
        </div>
        <div className="box">
          <h1 className="card-title text-white">Support</h1>
          <p>Help Desk</p>
          <p>Sales</p>
          <p>Become a Partner</p>
          <p>Developers</p>
        </div>
        <div className="box">
          <h1 className="card-title text-white">Contact</h1>
          <p>524 Broadway , NYC</p>
          <p>+1 777 - 978 - 5570</p>
        </div>
      </div>
      <div className="horizontal my-12"></div>
      <div className="flex justify-between">
            <p>@2023 CareerHub. All Rights Reserved</p>
            <p>Powered by CareerHub</p>
        </div>
    </div>
  );
};

export default Footer;
