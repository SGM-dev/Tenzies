import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

export default function Die(props) {
  const styles = {
    color: props.isHeld ? "#000" : "#b1b1b1",
  };

  const dieHtml = {
    1: <FontAwesomeIcon icon={faDiceOne} className="fa-3x" style={styles} />,
    2: <FontAwesomeIcon icon={faDiceTwo} className="fa-3x" style={styles} />,
    3: <FontAwesomeIcon icon={faDiceThree} className="fa-3x" style={styles} />,
    4: <FontAwesomeIcon icon={faDiceFour} className="fa-3x" style={styles} />,
    5: <FontAwesomeIcon icon={faDiceFive} className="fa-3x" style={styles} />,
    6: <FontAwesomeIcon icon={faDiceSix} className="fa-3x" style={styles} />,
  };

  return (
    <div className="die-face" onClick={props.holdDice}>
      {dieHtml[props.value]}
    </div>
  );
}
