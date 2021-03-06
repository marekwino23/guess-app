import './App.css';
import Words from './components/Words'
import cogoToast from 'cogo-toast';
import Place from "./components/Place"
import {useState} from "react"
import music from "../src/videoplayback.weba"

function App() {
  const[phrase, setPhrase] = useState('');
  const[id,setId] = useState(0);
  const[enter,setEnter] = useState(false)
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

  const enterGame = () => {
    setEnter(true)
    console.log(slots)
    cogoToast.info("Now you must click random password")
  }

const onValidate = (value) => {
  let index = phrase.indexOf(value);
  if(index === -1){
    cogoToast.warn("Remember you have only six trials to click wrong words",{
      hideAfter:7
    })
      setTrials([...trials, '|']);
      setWord( `bad words:  ${value}`)
      if(trials.length === 5){
          cogoToast.error(`Gameover, password is ${phrase}`);
          setTrials([]);
          setPhrase("");
          setStatus("")
          setWord("")
          setSlots([])
          setStatus("show sign")
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
  setEnter(false)
  setTrials([])
  setWord("")
  setStatus("show sign")
  setSlots([])
  setDescription("")
}

const onSuccess = () => {
  if(phrase === slots.join("")){
    if(level === 6){
      cogoToast.success(`Congratulation, you done this game`);
    }
    else if(level<6){
    cogoToast.success(`Congratulation, you pass level ${level}`);
    setLevel(level + 1)
    setPhrase("")
    setWord("")
    setStatus("show sign")
    setSlots([])
    setTrials([])
    setDescription("")
    }
  }
  
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Game level: {level}</h1>
        {enter === false ? <button className="new" onClick={enterGame}>New game</button>
        :<div><audio autoPlay src={music}></audio><button onClick={exitGame} className="exit">Exit</button></div>}
      </header>
      {enter === true ? <Place
      phrase={phrase}
      setPhrase={setPhrase}
      id={id}
      setId={setId}
      slots={slots}
      setSlots={setSlots}
      phrases={phrases}
      ></Place>:<div></div>}
      {enter === true ? <div className="box">
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
      </div>:<div></div>}
      {enter === true ? <div className="keyboard">
            <button disabled={!slots.length} onClick={onClick} value="q">q</button>
            <button disabled={!slots.length} onClick={onClick} value="w">w</button>
            <button disabled={!slots.length} onClick={onClick} value="e">e</button>
            <button disabled={!slots.length} onClick={onClick} value="r">r</button>
            <button disabled={!slots.length} onClick={onClick} value="t">t</button>
            <button disabled={!slots.length} onClick={onClick} value="y">y</button>
            <button disabled={!slots.length} onClick={onClick} value="u">u</button>
            <button disabled={!slots.length} onClick={onClick} value="i">i</button>
            <button disabled={!slots.length} onClick={onClick} value="o">o</button>
            <button disabled={!slots.length} onClick={onClick} value="p">p</button>
            <button disabled={!slots.length} onClick={onClick} value="a">a</button>
            <button disabled={!slots.length} onClick={onClick} value="s">s</button>
            <button disabled={!slots.length} onClick={onClick} value="d">d</button>
            <button disabled={!slots.length} onClick={onClick} value="f">f</button>
            <button disabled={!slots.length} onClick={onClick} value="g">g</button>
            <button disabled={!slots.length} onClick={onClick} value="h">h</button>
            <button disabled={!slots.length} onClick={onClick} value="j">j</button>
            <button disabled={!slots.length} onClick={onClick} value="k">k</button>
            <button disabled={!slots.length} onClick={onClick} value="l">l</button>
            <button disabled={!slots.length} onClick={onClick} value="z">z</button>
            <button disabled={!slots.length} onClick={onClick} value="x">x</button>
            <button disabled={!slots.length} onClick={onClick} value="c">c</button>
            <button disabled={!slots.length} onClick={onClick} value="v">v</button>
            <button disabled={!slots.length} onClick={onClick} value="b">b</button>
            <button disabled={!slots.length} onClick={onClick} value="n">n</button>
            <button disabled={!slots.length} onClick={onClick} value="m">m</button>
        </div>: <div></div>}
    </div>
  );
}

export default App;
