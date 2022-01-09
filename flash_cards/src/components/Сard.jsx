import React, {useState} from "react";
import Button from '@mui/material/Button';
import './card.css'

function Card ({english, transcription, russian, tags, id}) {
    const [initialCard, showTranslation] = useState(true);

    function onClick() {
        showTranslation(false);
    }

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