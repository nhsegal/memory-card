import "./App.css";
import Card from "./components/Card";

function App() {
  const bigString = 'ア,イ,ウ,エ,オ,カ,キ,ク,ケ,コ,サ,シ,ス,セ,ソ,タ,チ,ツ,テ,ト,ナ,ニ,ヌ,ネ,ノ,ハ,ヒ,フ,ヘ,ホ,マ,ミ,ム,メ,モ,ヤ,ユ,ヨ,ラ,リ,ロ,レ,ロ,ワ,ヲ,ン'
  const deck = bigString.split(',');
  const subsetNumber = 25;

  function pickRandom(n) {
    return Math.floor(Math.random() * n);
  }

  function makeSubset(){
    let workingDeck = [...deck];
    const subset = [];
    for (let i = 0; i< subsetNumber; i++){
      let pickIndex = pickRandom(workingDeck.length);
      subset.push(workingDeck[pickIndex]);
      workingDeck.splice(pickIndex, 1);
    }
    return subset
  }

  function recordPick(){

  }
  let testSubset = makeSubset();


  return <div className="App">
    <div className="deck">
   {
    testSubset.map( (element)=> <Card pick ={element}/>)
   }
   
    </div>
   
  </div>;
}

export default App;
