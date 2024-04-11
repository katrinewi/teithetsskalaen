"use client";

import { useState } from "react";
import Edit from "./assets/icons/Edit";
import ExpandLess from "./assets/icons/ExpandLess";
import ExpandMore from "./assets/icons/ExpandMore";

const SILLIES = [
  {
    title: "Teit tittel 1",
    description:
      "Han stod i stolen med paraply, og vi glemte at det var glassvegger slik at alle så det",
    score: 9,
  },
  {
    title: "Teit tittel 2",
    description: "Det blei sagt høyt, men det burde det ikke blitt",
    score: 7,
  },
  {
    title: "Teit tittel 3",
    description: "Det er like teit hver morgen",
    score: 4,
  },
];
const MAX_DESCRIPTION_LENGTH = 60;

interface SillyItemProps {
  item: { title: string; description: string; score: number };
}

const SillyItem = ({ item }: SillyItemProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const description =
    item.description.length > MAX_DESCRIPTION_LENGTH
      ? item.description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
      : item.description;

  return (
    <div className="relative">
      <div className="absolute bg-light-primary dark:bg-dark-primary flex gap-5 rounded right-[-100px] m-3 p-1 ">
        <Edit className="fill-light-text dark:fill-dark-text" />
        {expanded ? (
          <ExpandLess className="fill-light-text dark:fill-dark-text" />
        ) : (
          <ExpandMore className="fill-light-text dark:fill-dark-text" />
        )}
      </div>
      <li className="bg-light-primary dark:bg-dark-primary rounded my-3 px-3 py-1 flex gap-5 justify-between items-center">
        <div>
          <h2 className="text-lg">{item.title}</h2>
          <p className="text-sm italic">{description}</p>
        </div>
        <div>{item.score}</div>
      </li>
    </div>
  );
};

export default function Home() {
  return (
    <ul>
      {SILLIES.map((item, index) => (
        <SillyItem key={index} item={item} />
      ))}
    </ul>
  );
}
