import { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { Score } from "./components/Score";

export default function App() {
  const [dice, setDice] = useState(allNewDice);
  const [tenzies, setTenzies] = useState(false);
  const [rolls, setRolls] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (dice.every((die) => die.isHeld && die.value === dice[0].value)) {
      setTenzies(true);
    }
  }, [dice]);

  useEffect(() => {
    let interval = null;
    if (!tenzies) {
      interval = setInterval(() => {
        setCurrentTime((time) => time + 1);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [tenzies]);

  function allNewDice() {
    const newDice = Array(10)
      .fill(0)
      .map(() => generateNewDie());

    return newDice;
  }

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function rollDice() {
    if (!tenzies) {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
      setRolls((prevRolls) => prevRolls + 1);
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setRolls(0);
      setTime(0);
    }
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
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
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <Score currentRolls={rolls} currentTime={currentTime} />
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
