import React, {useState} from "react";
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDownloadDone } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';
import '../Word/word.css'

function Word ({english, transcription, russian, tags, id}) {
    const [isEdited, changeEditMode] = useState(false);

    const [word, setWord] = useState({english, transcription, russian, tags});
    
    function onClickEdit() {
        changeEditMode(true);
        // console.log("edit")
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

    function onChangeEnglish (evt) {
        setWord({
            english: evt.target.value,
            russian: word.russian,
            transcription: word.transcription,
            tags: word.tags,
        });
    }
    function onChangeRussian (evt) {
        setWord({
            russian: evt.target.value,
            english: word.english,
            transcription: word.transcription,
            tags: word.tags,

        });
    }

    function onChangeTranscription (evt) {
        setWord({
            english: word.english,
            russian: word.russian,
            transcription: evt.target.value, 
            tags: word.tags,
        });
    }

    function onChangeTags (evt) {
        setWord({
            english: word.english,
            russian: word.russian,
            transcription: word.transcription,
            tags: evt.target.value, 
        });
    }

    function onSave() {
        changeEditMode(false);
    }

    if (!isEdited) {
        return(
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
            return(
                <tr>
                    <td><input value={word.english} onChange={onChangeEnglish} /></td>
                    <td><input value={word.transcription} onChange={onChangeTranscription} /></td>
                    <td><input value={word.russian} onChange={onChangeRussian} /></td>
                    <td><input value={word.tags} onChange={onChangeTags} /></td>
                    <td>
                        <button onClick={onSave} className="buttonSave"><MdOutlineDownloadDone /></button>
                        <button onClick={onClickCancel} className="buttonCancel"><ImCancelCircle /></button>
                    </td>
                </tr>
            )
        }
    }

export default Word;

