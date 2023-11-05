import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center mb-7">Expense Tracker</h1>
      <ul>
        <li>Apple</li>
        <li>Orange</li>
      </ul>
    </main>
  );
}
