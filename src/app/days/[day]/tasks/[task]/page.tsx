import React from "react";
import Eggs from "./_components/eggs";
import Mirror from "./_components/mirror";
import Nuts from "./_components/nuts";
import Senjed from "./_components/senjed";
import Sumac from "./_components/sumac";
import Acid from "./_components/acid";
import Apple from "./_components/apple";
import Book from "./_components/book";
import Coins from "./_components/coins";
import Grass from "./_components/grass";
import HyacinthFlower from "./_components/hyacinth-flower";
import Garlic from "./_components/garlic";
import FishTank from "./_components/fish-tank";

function page() {
  return (
    <div>
      <FishTank />
      <Eggs />
      <Mirror />
      <Garlic />
      <Senjed />
      <Sumac />
      <Acid />
      <Apple />
      <Book />
      <Coins />
      <Grass />
      <Nuts />
      <HyacinthFlower />
    </div>
  );
}

export default page;
