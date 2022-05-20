import { useState } from "react";

export default function BuyAction() {
  return (
    <>
      <aside
        className="mx-auto w-full xl:col-span-3 border-2 rounded-xl p-4 border-slate-400"
      >
        <h2>React</h2>
        <div>
          <h3>Elige una opción</h3>
          <select>
            <option>18.1</option>
            <option>18</option>
            <option>17.0.2</option>
            <option>17.0.1</option>
          </select>
        </div>
      </aside>
    </>
  );
}
