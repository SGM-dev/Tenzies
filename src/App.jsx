import { useState } from "react";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(allNewDice);

  function allNewDice() {
    const newDice = Array(10)
      .fill(0)
      .map(() => {
        return { value: Math.ceil(Math.random() * 6), isHeld: false };
      });

    return newDice;
  }

  function rollDice() {
    setDice(allNewDice(0));
  }

  const diceElements = dice.map((die, index) => (
    <Die value={die.value} key={index} isHeld={die.isHeld} />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
