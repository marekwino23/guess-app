import './App.css';
import Words from './components/Words'
import cogoToast from 'cogo-toast';
import Place from "./components/Place"
import {useState} from "react"

function App() {
  const[phrase, setPhrase] = useState('');
  const[id,setId] = useState(0);
  const[level,setLevel] = useState(0)
  const[status,setStatus] = useState("show description")
  const[description, setDescription] = useState('');
  const[slots,setSlots] = useState([]);
  const[word,setWord] = useState("");
  let[trials,setTrials] = useState([]);


  const phrases = 
    [
    {id: 0,name:"vue",description:"technology which you use v-model"},
    {id: 1,name:"react",description:"technology which you use redux"},
    {id: 2,name:"css",description:"technology which you change primary style in web application"},
    {id: 3,name:"html",description:"language which create skeleton each web site"}, 
    {id: 4,name:"sql",description:"technology which you use for example select query"},
    {id: 5,name:"javascript",description:"language which you use event loop"},
    {id: 6,name:"php",description:"language which you use $variable"}
    ];

  const onClick = (e) => {
    onValidate(e.target.value);
}

const onValidate = (value) => {
  let index = phrase.indexOf(value);
  if(index === -1){
      setTrials([...trials, '|']);
      setWord( `bad words:  ${value}`)
      if(trials.length === 5){
          cogoToast.error(`Gameover, password is ${phrase}`);
          setTrials([""]);
          setPhrase("");
      }
  }
  for(let i = 0; i< phrase.length + 1;i++){
      index = phrase.indexOf(value)
      if(phrase.charAt(i) === value){
          slots[i] = value
          setSlots([...slots])
      }
      else if(phrase === slots.join("")){
          onSuccess();
      }
  }
}

const exitGame = () => {
  setLevel(0)
  setPhrase("")
  setStatus("show sign")
  setSlots([])
  setDescription("")
}

const onSuccess = () => {
  if(level === 6){
    cogoToast.success(`Congratulation, you done this game`);
  }
  else if(level<6){
  cogoToast.success(`Congratulation, you pass level ${level}`);
  setLevel(level + 1)
  setPhrase("")
  setStatus("show sign")
  setSlots([])
  setDescription("")
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Game level: {level}</h1>
        <button onClick={exitGame} className="exit">Exit</button>
      </header>
      <Place
      phrase={phrase}
      setPhrase={setPhrase}
      id={id}
      setId={setId}
      slots={slots}
      setSlots={setSlots}
      phrases={phrases}
      ></Place>
      <div className="box">
        <Words
         phrase={phrase}
         setPhrase={setPhrase}  
         level = {level}
         setLevel={setLevel}
         word={word}
         id={id}
         setWord={setWord}
         slots={slots}
         setSlots = {setSlots}
         trials={trials}
         description={description}
         setDescription={setDescription}
         status={status}
         setStatus={setStatus}
         setTrials={setTrials}
         ></Words>
      </div>
      <div className="keyboard">
            <button onClick={onClick} value="q">q</button>
            <button onClick={onClick} value="w">w</button>
            <button onClick={onClick} value="e">e</button>
            <button onClick={onClick} value="r">r</button>
            <button onClick={onClick} value="t">t</button>
            <button onClick={onClick} value="y">y</button>
            <button onClick={onClick} value="u">u</button>
            <button onClick={onClick} value="i">i</button>
            <button onClick={onClick} value="o">o</button>
            <button onClick={onClick} value="p">p</button>
            <button onClick={onClick} value="a">a</button>
            <button onClick={onClick} value="s">s</button>
            <button onClick={onClick} value="d">d</button>
            <button onClick={onClick} value="f">f</button>
            <button onClick={onClick} value="g">g</button>
            <button onClick={onClick} value="h">h</button>
            <button onClick={onClick} value="j">j</button>
            <button onClick={onClick} value="k">k</button>
            <button onClick={onClick} value="l">l</button>
            <button onClick={onClick} value="z">z</button>
            <button onClick={onClick} value="x">x</button>
            <button onClick={onClick} value="c">c</button>
            <button onClick={onClick} value="v">v</button>
            <button onClick={onClick} value="b">b</button>
            <button onClick={onClick} value="n">n</button>
            <button onClick={onClick} value="m">m</button>
        </div>
    </div>
  );
}

export default App;
