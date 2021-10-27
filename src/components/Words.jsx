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

const Words = ({phrase,slots,description,trials,word,setDescription,status,setStatus,id}) => {

    const showSign = () => {
        setDescription(phrases[id].description)
        setStatus("hide sign")
        if(status === "hide sign"){
            setStatus("show sign")
            setDescription("")
        }
    }

return(
    <div>
    <div className="board">
    {phrase ? <p className="description">{description}</p>: <p></p>}
    <h1 className="slot">{slots}</h1>
    <h2>{word}</h2>
        <div className="button_box">
            <button className="sign" value={description} onClick={showSign}>{status}</button> 
        </div>  
    </div>
        <p style={{fontSize:"20px"}}>{trials}</p>
</div>    
)}

export default Words;