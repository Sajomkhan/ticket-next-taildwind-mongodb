import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center mb-7">Expense Tracker</h1>
      <div className="bg-slate-800 p-4 rounded-md text-[var(--textLight)]">
        <form className="grid grid-cols-6 gap-4 mb-5">
          <input
            className="col-span-3 p-2 border"
            type="text"
            placeholder="Enter Item"
          />
          <input
            className="col-span-2 p-2 border"
            type="text"
            placeholder="Enter $"
          />
          <button className="bg-gray-900 p-2" type="submit">
            +
          </button>
        </form>
        <ul>
          <li>Apple</li>
          <li>Orange</li>
        </ul>
      </div>
    </main>
  );
}
