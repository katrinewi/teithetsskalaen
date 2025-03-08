"use client";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

export default function page() {
  return (
    <>
      <h1 className="text-3xl">Legg til en ny teit ting</h1>
      <form
        action={() => {
          console.log("Add something silly");
        }}
        className="flex flex-col gap-4"
      >
        <div>
          <label htmlFor="title">Tittel</label>
          <Input id="title" name="title" />
        </div>
        <div>
          <label htmlFor="description">Beskrivelse</label>
          <Input id="description" name="description" />
        </div>
        <div>
          <label htmlFor="score">Start score</label>
          <Input id="score" name="score" type="number" />
        </div>
        <Button type="submit">Legg til</Button>
      </form>
    </>
  );
}
