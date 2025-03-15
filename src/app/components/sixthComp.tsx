import React from "react";

const sixthComp = () => {
  return (
    <div className="bg-black sm:pt-20 sm:px-10 px-4">
      <div className="text-center justify-center bg-gradient-to-r from-white to-[#8926FF] bg-clip-text text-transparent sm:text-7xl text-3xl font-bold font-figtree">
        Distribuzione dei Token
      </div>
      <div className="max-w-250 mx-auto text-center justify-center text-white text-xl font-medium font-figtree px-6 mt-8 mb-16">
        L’offerta totale di 100 milioni di token V sarà distribuita come segue:
      </div>
      <div className="max-w-[600px] mx-auto">
        <img src="/sixComp.png" className="" />
      </div>
    </div>
  );
};

export default sixthComp;
