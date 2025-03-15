import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}
const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="sm:w-50 w-60 h-64 relative bg-slate-900">
      <div className="size-20 bg-zinc-300/80 mx-auto mt-[-16px] rounded-full ">
        <img className="" src={imageSrc} />
      </div>
      <div className=" text-center justify-center text-white text-xl font-bold font-figtree mt-7 mb-5">
        {title}
      </div>
      <div className="  text-center justify-start text-white/70 text-xs font-normal font-figtree px-5">
        {description}
      </div>
    </div>
  );
};

const EighthComp = () => {
  const cards = [
    {
      title: "Direttore del Progetto",
      description: `Leonardo Russo (ex responsabile del progetto "Treno della Ricchezza")`,
      imageSrc: "/avatar-1.png",
    },
    {
      title: "Direttore Tecnico",
      description:
        "Ingegnere senior del dipartimento di tecnologia digitale del Vanguard Group",
      imageSrc: "/avatar-2.png",
    },
    {
      title: "Responsabile della Strategia Finanziaria",
      description:
        "Direttore degli investimenti del Vanguard Group per l’Europa",
      imageSrc: "/avatar-3.png",
    },
    {
      title: "Responsabile della Conformità",
      description:
        "Esperto legale con esperienza nella regolamentazione finanziaria dell’UE",
      imageSrc: "/avatar-4.png",
    },
  ];
  return (
    <div className="bg-black pt-2 sm:px-10 px-4 pb-15">
      <div className="text-center justify-center bg-gradient-to-r from-white to-[#8926FF] bg-clip-text text-transparent sm:text-7xl text-3xl font-bold font-figtree">
        Team Principale
      </div>
      <div className="max-w-250 mx-auto text-center justify-center text-white text-xl font-medium font-figtree px-6 mt-5">
        La criptovaluta V è sviluppata e gestita da un team che combina
        competenze nella finanza tradizionale e nella blockchain:
      </div>
      <div className=" mx-auto flex justify-center gap-5 mt-20 flex-wrap sm:flex-nowrap">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default EighthComp;
