import React, { useState, useContext } from "react";
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDownloadDone } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';
import '../Word/word.css'
import '../VocabList/vocabList.css'
import WordInput from "../WordInput/WordInput";
import {WordsContext} from '../context/WordsContext'


function Word({ english, transcription, russian, tags}) {
    const [isEdited, changeEditMode] = useState(false);
    const [word, setWord] = useState({ english, transcription, russian, tags });


    // подписка на контекст для Consumer
    // const {words} = useContext(WordsContext);
    // console.log(getWords());



    function onClickEdit() {
        changeEditMode(true);
    }

    function onClickCancel() {
        changeEditMode(false);
        setWord({
            english: english,
            russian: russian,
            transcription: transcription,
            tags: tags,
        });
    }

    function onSave() {
        changeEditMode(false);
    }

    if (!isEdited) {
        return (
            <tr>
                <td>{word.english}</td>
                <td>{word.transcription}</td>
                <td>{word.russian}</td>
                <td>{word.tags}</td>
                <td>
                    <button onClick={onClickEdit} className="buttonEdit"><FaEdit /></button>
                    <button className="buttonDelete"><RiDeleteBinLine /></button>
                </td>
            </tr>
        );
    }
    else {
        return (
            <>
                <tr >
                    <td><WordInput value={word.english} regExpEng={new RegExp(/^[a-z\s]+$/i)} /></td>
                    <td><WordInput value={word.transcription} regExpTranscription={new RegExp(/^[0-9\s]+$/)} /></td>
                    <td><WordInput value={word.russian} regExpRus={new RegExp(/^[а-я\s]+$/i)} /></td>
                    <td><WordInput value={word.tags} regExpTags={new RegExp(/^[а-я\s]+$/i)} /></td>
                    <td>
                        <button onClick={onSave} className="buttonSave" ><MdOutlineDownloadDone /></button>
                        <button onClick={onClickCancel} className="buttonCancel"><ImCancelCircle /></button>
                    </td>
                </tr>
            </>
        )
    }
}

export default Word;

