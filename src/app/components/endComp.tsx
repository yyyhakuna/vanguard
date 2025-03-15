import React from "react";

const EndComp = () => {
  return (
    <div className="bg-black pb-40">
      <div className="sm:flex max-w-200 justify-between mx-auto items-center space-y-8 sm:space-y-0">
        <div>
          <div className="flex items-center text-white text-xl gap-3 font-semibold font-roboto ">
            <img src="/logo.png" className="w-10" />
            Avanguardia
          </div>
          <div className="text-white text-robot font-semibold">
            Iscriviti alla nostra newsletter
          </div>
          <div className=" text-white text-xs font-roboto ">
            Ricevi le ultime notizie sulle criptovalute e sulle opportunità di
            investimento
          </div>
        </div>

        <div>
          <div className="flex w-[300px] gap-3">
            <input
              className="flex-1 border-[0.75px] border-solid border-white custom-input"
              placeholder="Inserisci la tua email"
            />
            <button className="border-[0.75px] border-solid border-white text-xs px-4 py-2 text-white font-roboto">
              sottoscrizione
            </button>
          </div>
          <div className="text-[9px] text-white font-roboto">
            Iscrivendoti accetti la nostra Informativa sulla privacy
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndComp;
