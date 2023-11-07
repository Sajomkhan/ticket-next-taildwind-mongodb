"use client";
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

export default function Home() {
  const [items, setItems] = useState([
    // { name: "Coffee", price: "6.55" },
    // { name: "Movie", price: "20.00" },
    // { name: "Candy", price: "4.55" },
  ]);
  const [newItem, setNewItem] = useState({ name: "", price: "" });
  const [total, setTotal] = useState(0);

  // add items from database
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== "" && newItem.price !== "") {
      // setItems([...items, newItem]);
      try {
        const docRef = await addDoc(collection(db, "items"), {
          name: newItem.name,
          price: newItem.price,
        });
        setNewItem({ name: "", price: "" });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  // Define a function to handle the key press event
  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      addItem();
    }
  }
  document.addEventListener("keydown", handleKeyPress);

  // get items from database
  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });

      itemsArr.length > 0 ? setItems([...items, ...itemsArr]) : "";

      // Read total from itemsArr
      const calculateTotal = () => {
        const totalPrice = itemsArr.reduce(
          (sum, item) => sum + parseFloat(item.price),
          0
        );
        setTotal(totalPrice);
      };
      calculateTotal();
      return () => unsubscribe();
    });
  }, []);

  // Delete items from database
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center mb-7">Expense Tracker</h1>
      <div className="bg-slate-800 p-8 rounded-md text-[var(--textLight)]">
        <form className="grid grid-cols-6 gap-4 mb-12">
          <input
            className="col-span-3 p-2 border text-[var(--text)"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            type="text"
            placeholder="Enter Item"
          />
          <input
            className="col-span-2 p-2 border text-[var(--text)"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            type="text"
            placeholder="$"
          />
          <button
            onClick={addItem}
            className="bg-gray-900 hover:bg-gray-950 p-2"
            type="submit"
          >
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
              <button
                onClick={() => deleteItem(items.id)}
                className="bg-gray-900 hover:bg-gray-950 px-6"
              >
                x
              </button>
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
