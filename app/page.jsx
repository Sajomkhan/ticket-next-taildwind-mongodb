"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([
    { name: "Coffee", price: "6.55" },
    { name: "Movie", price: "20.00" },
    { name: "Candy", price: "4.55" },
  ]);
  const [total, setTotal] = useState(0);

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center mb-7">Expense Tracker</h1>
      <div className="bg-slate-800 p-8 rounded-md text-[var(--textLight)]">
        <form className="grid grid-cols-6 gap-4 mb-12">
          <input
            className="col-span-3 p-2 border"
            type="text"
            placeholder="Enter Item"
          />
          <input
            className="col-span-2 p-2 border"
            type="text"
            placeholder="$"
          />
          <button className="bg-gray-900 hover:bg-gray-950 p-2" type="submit">
            +
          </button>
        </form>
        <ul>
          {items.map((items, id) => (
            <li key={id} className="my-3 w-full flex justify-between">
              <div className="w-full flex justify-between bg-gray-900 p-3 mr-3">
                <span>{items.name}</span>
                <span>{items.price}</span>
              </div>
              <button className="bg-gray-900 hover:bg-gray-950 px-6">x</button>
            </li>
          ))}
        </ul>
        {items.length < 1 ? (
          ""
        ) : (
          <div className="font-semibold grid grid-cols-6 mt-11 p-3">
            <span className="col-span-5">Total</span>
            <span>$ {total}</span>
          </div>
        )}
      </div>
    </main>
  );
}
