"use client";

import { useState } from "react";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [sillyThings, setSillyThings] = useState<string[]>([]);
  return (
    <>
      <main className="flex items-center justify-center">
        <div className="flex flex-col gap-4 w-3/5 max-w-md grow">
          <h1 className="text-4xl font-semibold text-light-text dark:text-dark-text border-b-2 border-light-primary dark:border-dark-primary mb-3">
            Teithetsskalaen
          </h1>
          <div className="flex gap-4">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Skriv inn noe teit ... "
            />
            <Button
              disabled={!inputValue}
              onClick={() => {
                setInputValue("");
                setSillyThings([inputValue, ...sillyThings]);
              }}
            >
              Legg til
            </Button>
          </div>

          {sillyThings.length ? (
            <ul>
              {sillyThings.map((thing, index) => (
                <li
                  key={index}
                  className="text-lg bg-light-primary dark:bg-dark-primary rounded my-3 px-3 py-1 "
                >
                  {thing}
                </li>
              ))}
            </ul>
          ) : (
            <p>Her var det ikke mye teit ...</p>
          )}
        </div>
      </main>
    </>
  );
}
