import React from "react";

const Cta = () => {
  return (
    <div className="bg-gray-300">
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-y-6 py-20 w-11/12 mx-auto">
        <div className="text-white md:w-2/5">
          <h2 className="text-3xl font-semibold py-2">Join Our Newsletter</h2>
          <p className="text-lg">
            Subscribe today and save 50% for all your purchases.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-row h-12">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 border border-gray-950 focus:outline-none"
          />
          <button className="bg-black text-white border border-black px-8">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
