import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import uniqid from "uniqid";

function App() {
  const bigString =
  "ア,イ,ウ,エ,オ,カ,キ,ク,ケ,コ,サ,シ,ス,セ,ソ,タ,チ,ツ,テ,ト,ナ,ニ,ヌ,ネ,ノ,ハ,ヒ,フ,ヘ,ホ,マ,ミ,ム,メ,モ,ヤ,ユ,ヨ,ラ,リ,ル,レ,ロ,ワ,ヲ,ン";
  const deck = bigString.split(",");
  const subsetNumber = 16;
  const [pickedList, setPickedlist] = useState([]);
  const [score, setScore] = useState(0);

  function pickRandom(n) {
    return Math.floor(Math.random() * n);
  }

  const [highScore, setHighScore] = useState(0);


  function makeSubset() {
    let workingDeck = [...deck];
    const subset = [];
    for (let i = 0; i < subsetNumber; i++) {
      let pickIndex = pickRandom(workingDeck.length);
      subset.push(workingDeck[pickIndex]);
      workingDeck.splice(pickIndex, 1);
    }
    return subset;
  }

  function recordPick(ev) {
    ev.preventDefault();
    if (pickedList.includes(ev.target.value)) {
      console.log("Game Over!");
      console.log(score)
      setPickedlist([]);
      setScore(0);
      return;
    }
    if (pickedList.length === 0) {
      setPickedlist([ev.target.value]);
      setScore(score+1);
      if (score >= highScore){
        setHighScore(score)
      }
      return;
    }

    setPickedlist([...pickedList, ev.target.value]);
    setScore(score+1);
    if (score >= highScore){
      setHighScore(score)
    }
  }

  let testSubset = makeSubset();

  return (
    <div className="App">
      <div>Current Score: {score}</div>
      <div>High Score: {highScore}</div>
      <div className="deck">
        {testSubset.map((element) => (
          <Card pick={element} onClick={recordPick} key={uniqid()} />
        ))}
      </div>
    </div>
  );
}

export default App;
