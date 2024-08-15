import { WorkListProp } from "@/lib/types";
import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function Card({ id, name, year }: WorkListProp) {
  return (
    <>
      <article className="flex cursor-pointer flex-col items-center space-y-5 rounded-xl border-8 border-darkGreen/40 px-3 py-5 transition duration-300 hover:bg-darkGreen hover:text-white">
        <p className="font-khand text-8xl font-bold text-tan/50">
          {id === 4 ? <FaPlus /> : id}
        </p>
        <div>
          <h2 className="font-khand text-4xl ">{name}</h2>
          <p className="inter">{year}</p>
        </div>
      </article>
    </>
  );
}
