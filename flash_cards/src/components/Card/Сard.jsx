import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import '../Card/card.css';

function Card ({english, transcription, russian, tags, id}) {
    const [initialCard, showTranslation] = useState(true);

    function onClick() {
        showTranslation(false);
    }

    // сброс состояния к начальному для того, чтобы кнопка "Проверить" отображалась на след карточках
    useEffect(() => {
        showTranslation(true);
    }, [id]);

    return(
        <div className="wrapper">
            <div className="card">
                <div className="englishWord">{english}</div>
                <div className="transcription">{transcription}</div>
                <div>
                {initialCard ?
                <Button variant="contained" color="success" size="large" onClick={onClick}><div>Проверить</div></Button> :
                <div className="russianWord">{russian}</div>
                }
                </div>
            </div>
            </div>
        
    )
}
export default Card;