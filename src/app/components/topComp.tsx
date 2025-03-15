import React from "react";

const TopComp = () => {
  return (
    <div className="sm:pt-24 flex flex-col justify-start sm:px-20 pt-6 px-4 bg-[linear-gradient(180deg,#FFF_0%,#B187E1_33.88%,#5A207E_62.88%,#080808_100%)] h-200 sm:h-[960px]">
      {/* <div className=" h-32"> */}
      <div className=" text-black sm:text-5xl text-2xl text-center font-bold font-figtree leading-[64.79px]">
        Vanguard V Criptovaluta
      </div>
      {/* </div> */}
      <button className="w-48 mt-10 sm:flex-shrink-0 h-10 mx-auto text-center bg-zinc-950 rounded-full text-white text-sm font-figtree">
        Avanguardia
      </button>
      <div className="text-center justify-center text-black text-3xl font-bold font-figtree leading-loose">
        Sintesi Esecutiva
      </div>
      <div className="max-w-[900px] mx-auto text-center justify-center text-black text-sm font-medium font-figtree leading-tight">
        V è una criptovaluta innovativa lanciata dal Vanguard Group, con un
        rilascio ufficiale previsto per marzo 2025. La capitalizzazione iniziale
        di mercato di V è di 200 milioni
        <br />
        di dollari, con un obiettivo di rendimento annualizzato minimo del 20%.
        Come componente centrale della strategia di asset digitali del Vanguard
        Group, V avrà come
        <br />
        base operativa principale l'Italia, collegando gli ecosistemi blockc
      </div>

      <div className="max-w-[900px] mx-auto mt-1">
        <img className="w-full  object-cover" src="/persons.png" />
      </div>
    </div>
  );
};

export default TopComp;
