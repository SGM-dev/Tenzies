import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(allNewDice);

  function allNewDice() {
    const newDice = Array(10)
      .fill(0)
      .map(() => {
        return {
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid(),
        };
      });

    return newDice;
  }

  function rollDice() {
    // setDice(allNewDice());
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld
          ? die
          : {
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
              id: nanoid(),
            };
      })
    );
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return { ...die, isHeld: die.id === id ? !die.isHeld : die.isHeld };
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
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
