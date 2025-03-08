"use client";

import ArrowUp from "./assets/icons/ArrowUp";
import ArrowDown from "./assets/icons/ArrowDown";
import IconButton from "./components/UI/IconButton";

const SILLIES = [
  {
    title: "Jonas i stolen med paraply",
    description:
      "Han stod i stolen, og vi glemte at det var glassvegger. Så alle så det, og det blei litt dumt.",
    score: 9,
  },
  {
    title: "Gaute er så gammel",
    description:
      "Even sa at det hadde vært juks om Gaute spilte Civ6 sida han har opplevd alle sivilisasjonene.",
    score: 7,
  },
  {
    title: "Lars og alt han sier",
    description:
      "Det er noen av de tingene han refererer til som rett og slett bare høres feil ut.",
    score: 6,
  },
  {
    title: "Jonas påstår at han ikke lyver",
    description:
      "Det kommer jo ofte en hvit løgn, så det er i ferd med å bli litt dumt.",
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
        <h2 className="select-none text-xl">{item.title}</h2>
        <p className="italic opacity-60 select-none text-sm truncate w-96">
          {item.description}
        </p>
      </div>
    </div>
    <div className="flex gap-2 items-center">
      <p className="select-none text-2xl">{item.score}</p>
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
