import React, {useEffect, useState, useRef, forwardRef} from "react";
import Button from '@mui/material/Button';
import '../Card/card.css';

const Card = forwardRef (({english, transcription, russian, tags, id}, countRef) => {
    const [initialCard, showTranslation] = useState(true);
    const buttonRef = useRef(null);


    function onClick() {
        showTranslation(false);

// ============================================
countRef.current.wordProgress()
// ============================================

    }

    // сброс состояния к начальному для того, чтобы кнопка "Проверить" отображалась на след карточках
    useEffect(() => {
        showTranslation(true);
    }, [id]);

    // фокус на кнопку, как только новая карточка отрендерилась на странице

        useEffect(() => {
            if(buttonRef.current) {
                buttonRef.current.focus()
            }
    });


    return(
        <div className="wrapper">
            {/* <div ref={countRef}> You've learned: {setSelected.length} out of {data.length}</div> */}
            <div className="card">
                <div className="englishWord">{english}</div>
                <div className="transcription">{transcription}</div>
                <div>
                {initialCard ?
                    <Button ref={buttonRef} className="button" variant="contained" color="success" size="large" onClick={onClick}><div>Проверить</div></Button> :
                    <div className="russianWord">{russian}</div>
                }
                </div>
            </div>
        </div>
    )    
    });

export default Card;

