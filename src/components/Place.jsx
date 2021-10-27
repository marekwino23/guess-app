const Place = ({phrases,phrase,setPhrase,setId,setSlots}) => {
    const getRandomPhase = () => {
        const randomIndex = Math.floor(Math.random() * (phrases.length + 1) + 0);
        setPhrase(phrases[randomIndex].name);
        setId(randomIndex);
        setSlots(Array(phrases[randomIndex].name.length).fill('|_'));
        }
        return(
            <div>
                <button className="random" value={phrase} onClick={getRandomPhase}>random password</button> 
            </div>
        )
}
export default Place;