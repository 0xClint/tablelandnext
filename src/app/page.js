"use client";

import { Database } from "@tableland/sdk";

export default function Home() {
  async function handleClick() {
    const db = new Database();
    const { results } = await db
      .prepare(`SELECT * FROM allPetition_80001_6419;`)
      .all();
    console.log(results);
  }

  return (
    <div>
      <h2>Namaste world!</h2>
      <button onClick={() => handleClick()}>Submit</button>
    </div>
  );
}
