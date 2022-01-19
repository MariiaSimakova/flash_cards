import { GrCaretNext } from 'react-icons/gr';
import { GrCaretPrevious } from 'react-icons/gr';
import Card from '../Card/Сard';
import {useState} from "react";
import '../CardList/cardList.css'
import YouDidIt from '../CardList/YouDidIt.jpg'

export default function CardList({data}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function onNext(){
        setCurrentIndex (currentIndex + 1);
    }

    function onPrevious(){
        setCurrentIndex (currentIndex - 1);
    }


    if (currentIndex ===data.length) {
        return <div className="final__card">
            <h3 className="final__card-title">You did it!</h3>           
            <img className="final__card-img" src={YouDidIt} alt="You did it!" />
            </div> ;
    } else {
            return(
            <>
            <div className="card__list">
                {currentIndex > 0 &&
                    <button onClick={onPrevious} className='buttonPrevious'><GrCaretPrevious /></button>
                }
                <Card {...data[currentIndex]} />
                <button onClick={onNext} className='buttonNext'><GrCaretNext /></button>
                </div>
            <div className='card__amount'>{currentIndex + 1} out of {data.length}</div>
            </>

    )
    }
}

