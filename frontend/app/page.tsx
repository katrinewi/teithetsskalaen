"use client";

import ArrowUp from "./assets/icons/ArrowUp";
import ArrowDown from "./assets/icons/ArrowDown";
import IconButton from "./components/UI/IconButton";

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

interface SillyItemProps {
  item: { title: string; description: string; score: number };
}

const SillyItem = ({ item }: SillyItemProps) => (
  <li className="border flex rounded p-2 justify-between border-light-primary dark:border-dark-primary">
    <div>
      <div>
        <h2 className="text-xl">{item.title}</h2>
        <p className="italic text-sm opacity-60 truncate w-96">
          {item.description}
        </p>
      </div>
    </div>
    <div className="flex gap-2 items-center">
      <p className="text-2xl">{item.score}</p>
      <div className="flex flex-col">
        <IconButton
          aria-label="Stem opp"
          icon={
            <ArrowUp className="fill-light-text dark:fill-dark-text opacity-40 hover:opacity-100" />
          }
        />
        <IconButton
          aria-label="Stem ned"
          icon={
            <ArrowDown className="fill-light-text dark:fill-dark-text opacity-40 hover:opacity-100" />
          }
        />
      </div>
    </div>
  </li>
);

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">...det er så mye dumt:</h1>
      <ul className="flex flex-col gap-3">
        {SILLIES.map((item, index) => (
          <SillyItem key={index} item={item} />
        ))}
      </ul>
    </>
  );
}
