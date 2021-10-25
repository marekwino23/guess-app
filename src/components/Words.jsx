import React,{ useState} from 'react';
import cogoToast from 'cogo-toast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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

const Words = () => {
    const[phrase, setPhrase] = useState('');
    const[level,setLevel] = useState(0)
    const[status,setStatus] = useState("show description")
    const[description, setDescription] = useState('');
    const[id,setId] = useState(0);
    const[slots,setSlots] = useState([]);
    const[word,setWord] = useState("");
    let[trials,setTrials] = useState([]);

    const onValidate = (value) => {
        let index = phrase.indexOf(value);
        if(index === -1){
            setTrials([...trials, '|']);
            setWord( "bad words" +  value)
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

    // const onKeyPress = useCallback((e) => {
    //     if(e.keyCode < 65 || (e.keyCode > 90 && e.keyCode < 97) || e.keyCode > 122) {
    //         return;
    //     }
    //     console.log(String.fromCharCode(e.keyCode).toLowerCase());
    //     onValidate(String.fromCharCode(e.keyCode).toLowerCase())
    // }, [onValidate]);

    // useEffect(() => {
    //     window.addEventListener('keyup', onKeyPress);
    //     return () => window.removeEventListener('keyup', { capture: false } );
    // }, [onKeyPress]);

    const getRandomPhase = () => {
    const randomIndex = Math.floor(Math.random() * (phrases.length + 1) + 0);
    setPhrase(phrases[randomIndex].name);
    setId(randomIndex);
    setSlots(Array(phrases[randomIndex].name.length).fill('|_'));
    }

    const showSign = () => {
        setDescription(phrases[id].description)
        setStatus("hide sign")
        if(status === "hide sign"){
            setStatus("show sign")
            setDescription("")
        }
    }

    const onSuccess = () => {
        cogoToast.success('Congratulation, you won');
        confirmAlert({
            title: 'Next level',
            message: 'Are you sure to do this.',
            buttons: [
                {
                label: 'Yes',
                onClick: () => {
                cogoToast.info("Welcome in next level")
                setTrials([""])
                setStatus("show sign")
                setPhrase("")
                setSlots([])
                setLevel(level + 1)
                }
                
                },
                {
                label: 'No',
                onClick: () => {
                    setStatus("show sign")
                    setPhrase("")
                    setDescription("")
                    setSlots([])
                    cogoToast.info("Thanks for playing")
                } 
                }
            ]
        });
    }


    const onClick = (e) => {
        onValidate(e.target.value);
    }

return(
    <div>
    <h1>Game Level:{level}</h1>
    <div className="board">
    {phrase ? <p className="description">{description}</p>: <p></p>}
    <h1 className="slot">{slots}</h1>
    <h2>{word}</h2>
        <div className="button_box">
            <button className="random" value={phrase} onClick={getRandomPhase}>random password</button> 
            <button className="sign" value={description} onClick={showSign}>{status}</button> 
        </div>  
    </div>
        <div id="wrong">{trials}</div>
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
    
)
}

export default Words;