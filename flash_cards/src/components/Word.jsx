import React from "react";
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDownloadDone } from 'react-icons/md';


import '../components/word.css'

function Word ({english, transcription, russian, tags, id, isEdited}) {
    return (
        <tr>
            <td>{isEdited ? <input defaultValue={english} /> : english}</td>
            <td>{isEdited ? <input defaultValue={transcription} /> : transcription}</td>
            <td>{isEdited ? <input defaultValue={russian} /> : russian}</td>
            <td>{isEdited ? <input defaultValue={tags} /> : tags}</td>
            <td className="buttonContainer">
                {isEdited ? <a className="buttonSave" href="#"><MdOutlineDownloadDone /></a> : null}
                <a className="buttonEdit" href="#"><FaEdit /></a>
                <a className="buttonDelete" href="#"><RiDeleteBinLine /></a>
            </td>
        </tr>
            );
        }

export default Word;

