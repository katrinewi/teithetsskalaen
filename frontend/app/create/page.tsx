"use client";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

export default function page() {
  return (
    <form
      action={() => {
        console.log("Add something silly");
      }}
      className="flex gap-4"
    >
      <Input name="sillyThing" placeholder="Skriv inn noe teit ... " />
      <Button type="submit">Legg til</Button>
    </form>
  );
}
