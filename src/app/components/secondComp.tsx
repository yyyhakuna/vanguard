import React from "react";
import { FaArrowRight } from "react-icons/fa6";
interface CardProps {
  title: string;
  description: string;
  image: string;
  content: string;
}
// import bgImg from '@/../public'

const Card: React.FC<CardProps> = ({ image, content, description, title }) => {
  return (
    <div
      className=" h-110 rounded-xl pt-11 px-5 pb-8 flex flex-col items-start relative sm:basis-[calc(50%-8px)]"
      style={{
        // clipPath:
        //   "polygon(50% 0%, 60% 14%, 100% 14%, 100% 100%, 50% 100%, 20% 100%, 0 100%, 0 35%, 0 0);",
        backgroundImage: "url(/card-bg.png)",
        backgroundSize: "100% 100%", // 背景图片宽度与 div 宽度一致，高度按比例缩放
        backgroundRepeat: "no-repeat", // 防止背景图片重复
        backgroundPosition: "center", // 背景图片居中
      }}
    >
      <button className="px-4 py-2 flex items-center gap-2 bg-black/20 rounded-full mb-4">
        <FaArrowRight className="text-white" />
        <div className=" text-white text-lg sm:text-2xl font-semibold font-figtree">
          {title}
        </div>
      </button>
      <div className="w-60 h-10 justify-center text-[#a0a0a1] text-sm font-normal font-Figtree leading-tight">
        {description}
      </div>
      <div className="mt-auto justify-center text-[#a0a0a1] text-sm font-normal font-Figtree leading-tight">
        {content}
      </div>
      <img src={image} className="absolute w-28 right-0 top-0" />
    </div>
  );
};

const SecondComp = () => {
  const cards: CardProps[] = [
    {
      title: "GiocoFi",
      description: "Introduzione al Gruppo Vanguard",
      image: "/v-round-2.png",
      content: `Fondato nel 1974 da John Bogle, il Vanguard Group si è sviluppato nel
        corso dei decenni fino a diventare la seconda più grande società di
        gestione fondi al mondo, gestendo oltre 370 miliardi di dollari di asset
        globali e servendo più di 10 milioni di investitori. Il gruppo si è
        sempre distinto per i più alti standard di qualità e per una politica di
        costi ragionevolmente bassi, guadagnandosi una solida reputazione nel
        settore finanziario tradizionale.`,
    },
    {
      title: "Streaming in diretta",
      description: "Ingresso nel Settore degli Asset Digitali Criptati",
      image: "/video.png",
      content:
        "Con l’accelerazione della trasformazione digitale della finanza globale, il Vanguard Group ha deciso di estendere la sua esperienza nella gestione degli asset al settore blockchain e delle criptovalute. Il lancio della criptovaluta V segna la determinazione del gruppo a mantenere i suoi vantaggi nella finanza tradizionale, abbracciando al contemporaneo l'innovazione tecnologica finanziaria.",
    },
    {
      title: "Mercato NFT",
      description: "Concorso di Mercato",
      image: "/v-square.png",
      content:
        "Dal 2023, il mercato globale delle criptovalute ha subito importanti cambiamenti strutturali. Con un ambiente normativo sempre più chiaro e una crescente partecipazione degli investitori istituzionali, la domanda di asset criptati che combinano conformità e innovazione è in aumento. Allo stesso tempo, l’incertezza nei mercati asiatici è cresciuta, mentre i mercati europei e sudamericani mostrano un enorme potenziale di crescita.",
    },
    {
      title: "Socializzare",
      description: `Risultati del Progetto "Treno della Ricchezza"`,
      image: "/comment.png",
      content: `Come test preliminare per il rilascio della criptovaluta V, all'inizio del 2024 il Vanguard Group ha lanciato il progetto pilota "Treno della Ricchezza" per gli asset digitali. La prima fase del progetto si è conclusa con successo a maggio 2024, con gli investitori individuali che hanno ottenuto rendimenti superiori al 150%. La seconda fase, che partirà a gennaio 2025, prevede rendimenti attesi tra il 200% e il 300%, sotto la guida dell'esperto di azioni e blockchain Leonardo Russo.`,
    },
  ];
  return (
    <div className="bg-black">
      <div className=" bg-gradient-to-r from-white to-[#8926FF] bg-clip-text text-transparent text-4xl sm:text-5xl text-center">
        Contesto e Visione
      </div>
      <div className="mt-5 h-6 text-center justify-center text-white text-sm font-medium font-figtree ">
        Introduzione al Gruppo Vanguard
      </div>
      <div className="px-8 space-y-8 mt-4 sm:flex sm:flex-wrap sm:gap-4 max-w-220 mx-auto">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default SecondComp;
