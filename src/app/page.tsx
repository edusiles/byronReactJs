"use client";

import Image from "next/image";
import Button from "../components/Button";

export default function Home() {
  const handleClick = () => {
    console.log("Oi!");
  };

  return (
    <main>
      <h1 className="text-2xl font-bold">Olá, alguém!</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint
        distinctio, deleniti fugit earum optio sit eius provident beatae nemo,
        labore tenetur mollitia a. Consequatur eius quidem numquam veritatis
        beatae repellat error quis qui blanditiis? Cum dolore et, enim aliquam
        quaerat, architecto adipisci maiores voluptatum qui asperiores
        accusantium, suscipit numquam?
      </p>

      <Button onClick={handleClick}>Clicar</Button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint
        distinctio, deleniti fugit earum optio sit eius provident beatae nemo,
        labore tenetur mollitia a. Consequatur eius quidem numquam veritatis
        beatae repellat error quis qui blanditiis? Cum dolore et, enim aliquam
        quaerat, architecto adipisci maiores voluptatum qui asperiores
        accusantium, suscipit numquam?
      </p>

      <Button disabled onClick={handleClick}>
        Clicar de novo
      </Button>
    </main>
  );
}
