import "./App.css";
import Card from "./components/Card";

function App() {
  let bigString = 'ア,イ,ウ,エ,オ,カ,キ,ク,ケ,コ,サ,シ,ス,セ,ソ,タ,チ,ツ,テ,ト,ナ,ニ,ヌ,ネ,ノ,ハ,ヒ,フ,ヘ,ホ,マ,ミ,ム,メ,モ,ヤ,ユ,ヨ,ラ,リ,ロ,レ,ロ,ワ,ヲ,ン'
  let charSet = bigString.split(',');

  function pickRandom(n) {
    return Math.floor(Math.random() * n);
  }


  return <div className="App">
    <Card set = {charSet} pick = {pickRandom(charSet.length)} />
  </div>;
}

export default App;
