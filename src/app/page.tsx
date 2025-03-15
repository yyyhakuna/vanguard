import Image from "next/image";
import Header from "./components/header";
import TopComp from "./components/topComp";
import SecondComp from "./components/secondComp";
import ThirdComp from "./components/thirdComp";
import FourthComp from "./components/fourthComp";
import FifthComp from "./components/fifthComp";
import SixthComp from "./components/sixthComp";
import SeventhComp from "./components/seventhComp";
import EighthComp from "./components/eighthComp";
import NinthComp from "./components/ninthComp";
import TenthComp from "./components/tenthComp";
import EleventhComp from "./components/eleventhComp";
import EndComp from "./components/endComp";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <TopComp />
      <SecondComp />
      <ThirdComp />
      <FourthComp />
      <FifthComp />
      <SixthComp />
      <SeventhComp />
      <EighthComp />
      <NinthComp />
      <TenthComp />
      <EleventhComp />
      <EndComp />
    </div>
  );
}
