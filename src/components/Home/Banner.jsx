import React from 'react'
import { Link } from 'react-router';


const Banner = () => {
  return (
    <>
      <section className="bg-[#f5f6f8]">
        <div className="container text-center pb-4 md:flex justify-center gap-46 items-center ">
          <div>
            <img src="/Home-banner.png" alt="" />
          </div>
          <div className="">
            <h1 className="text-[20px]  mb-5 ">
              Awesome Product Collection In 2022
            </h1>

            <Link
              to="/shop"
              className=" px-6 py-2 bg-blue-600 text-white rounded-xl"
              title="Shop Now"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner
