import React, {useState} from "react";
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDownloadDone } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';
import '../components/word.css'

function Word ({english, transcription, russian, tags, id}) {
    const [isEdited, changeEditMode] = useState(false);
    
    function onClickEdit() {
        changeEditMode(true);
    }
    function onClickCancel() {
        changeEditMode(false);
    }

    return (
        <tr>
            <td>{isEdited ? <input defaultValue={english} /> : english}</td>
            <td>{isEdited ? <input defaultValue={transcription} /> : transcription}</td>
            <td>{isEdited ? <input defaultValue={russian} /> : russian}</td>
            <td>{isEdited ? <input defaultValue={tags} /> : tags}</td>
            <td className="buttonContainer">
                {isEdited ? <div className="buttonSave"><MdOutlineDownloadDone /></div> : null}
                {isEdited ? <div onClick={onClickCancel} className="buttonCancel"><ImCancelCircle /></div> : <div onClick={onClickEdit} className="buttonEdit"><FaEdit /></div>}
                {isEdited ? null : <div className="buttonDelete"><RiDeleteBinLine /></div>
                }

            </td>
        </tr>
            );
        }

export default Word;

