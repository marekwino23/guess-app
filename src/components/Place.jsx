import cogoToast from 'cogo-toast';

const Place = ({phrases,phrase,setPhrase,setId,setSlots}) => {
    const getRandomPhase = () => {
        const randomIndex = Math.floor(Math.random() * (phrases.length + 1) + 0);
        setPhrase(phrases[randomIndex].name);
        setId(randomIndex);
        setSlots(Array(phrases[randomIndex].name.length).fill('|_'));
        cogoToast.info('Please click keyboard to put word in slots. If you need help then you click show description.', {
            hideAfter:7
        })}
        return(
            <div>
                <button className="random" value={phrase} onClick={getRandomPhase}>random password</button> 
            </div>
        )
}
export default Place;