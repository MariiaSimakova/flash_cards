import {useState} from "react";
import { GrCaretNext } from 'react-icons/gr';
import { GrCaretPrevious } from 'react-icons/gr';
import Card from '../Card/Сard';
import ProgressBar from '../ProgressBar/ProgressBar'
import '../CardList/cardList.css'
import YouDidIt from '../CardList/YouDidIt.jpg'


export default function CardList({data}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState([]);
    
    let result = Math.round(selected.length/data.length*100);
    console.log (result);
    
    function onNext(){
        setCurrentIndex (currentIndex + 1);
    }

    function onPrevious(){
        setCurrentIndex (currentIndex - 1);
    }

    if (currentIndex === data.length) {
        return <div className="final__card">
            <h3 className="final__card-title">You've learned: {selected.length} words!</h3>           
            <img className="final__card-img" src={YouDidIt} alt="You did it!" />
            </div> ;
    } else {
        const id = data[currentIndex].id;
        function wordProgress() {
            if (!selected.includes(id)) {
                setSelected([...selected, id]);
            }
            }        
            return(
            <>
            <div className="progress__section">
                <ProgressBar done={result} />
                <div> You've learned: {selected.length} out of {data.length}</div>
            </div>
            <div className="card__list">
                {currentIndex > 0 &&
                    <button onClick={onPrevious} className='buttonPrevious'><GrCaretPrevious /></button>
                }
                <Card wordProgress={wordProgress} {...data[currentIndex]} />
                <button onClick={onNext} className='buttonNext'><GrCaretNext /></button>
                </div>
            <div className='card__amount'>{currentIndex + 1} out of {data.length}</div>
            </>
    )
    }
}

