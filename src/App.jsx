import { useState } from "react";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(allNewDice);

  function allNewDice() {
    const newDice = Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6));

    return newDice;
  }

  const diceElements = dice.map((num, index) => <Die value={num} key={index} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
    </main>
  );
}
