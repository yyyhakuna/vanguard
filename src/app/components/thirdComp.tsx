import React from "react";

const ThirdComp = () => {
  return (
    <div className="relative bg-black  pt-16 sm:pt-50 pb-2 sm:pb-40">
      <div className="mx-auto max-w-[890px] bg-gradient-to-r from-white to-[#8926FF] bg-clip-text text-transparent text-3xl sm:text-7xl font-bold text-center">
        Architettura Tecnica della Criptovaluta V
      </div>
      <ul className="text-center justify-center text-white sm:text-xl text-sm font-medium font-figtree list-disc list-inside px-6">
        <li>Informazioni di base</li>
        <li>Nome della valuta: V (Vanguard Token)</li>
        <li>Offerta totale: 100 milioni di token</li>
        <li>Prezzo iniziale: 2 dollari/gettone</li>
        <li>
          Piattaforma blockchain: Basata sullo standard ERC - 20 di Ethereum,
          con supporto per l'interoperabilità cross - chain
        </li>
        <li>
          Meccanismo di consenso: Proof of Stake (PoS) combinato con un sistema
          di reputazione
        </li>
        <li>
          Contratti intelligenti: Sistema di contratti intelligenti Turing -
          completo
        </li>
        <li>Data di rilascio: marzo 2025</li>
        <li>Capitalizzazione iniziale: 200 milioni di dollari</li>
      </ul>
      <img className="absolute bottom-0" src="/third-bg.png" />
    </div>
  );
};

export default ThirdComp;
