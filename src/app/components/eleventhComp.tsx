import React from "react";

const EleventhComp = () => {
  return (
    <div
      className=" sm:h-180 h-100 relative bg-black"
      // style={{backgroundImage:'url(/element-bg.png)'}}
    >
      <div className="text-center justify-center z-10 bg-gradient-to-r from-white to-[#8926FF] bg-clip-text text-transparent sm:text-7xl text-3xl font-bold font-figtree">
        Carta stradale
      </div>
      <img
        src="/eleventhComp.png"
        className="mx-auto w-[80%] z-100 max-w-[1050px]"
      />
      {/* <img
        src="/eleventh-bg.png"
        className="top-0 absolute h-[600px] right-0 opacity-100"
      /> */}
    </div>
  );
};

export default EleventhComp;
