import React, {useState, useEffect} from "react";
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDownloadDone } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';
import '../Word/word.css'
import '../VocabList/vocabList.css'


function Word ({english, transcription, russian, tags, id}) {
    const [isEdited, changeEditMode] = useState(false);
    const [word, setWord] = useState({english, transcription, russian, tags});
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
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
        setFormErrors(validate (word));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit){
            console.log(word);
        }
    }, [formErrors])
    

    const validate = (values) => {
        const errors = {};
        let engRegExp = /^[a-z\s]+$/i;
        let rusRegExp = /^[а-я\s]+$/i;
        let tagsRegExp = /^[а-я\s]+$/i;
        let transcriptionRegExp = /^[0-9\s]+$/;

        if (!values.english) {
            errors.english = "This field cannot be empty!";
    } else if(!engRegExp.test(values.english)){
        errors.english = "English letters are only allowed!";
    }
        if (!values.russian) {
            errors.russian = "This field cannot be empty!"
        } else if(!rusRegExp.test(values.russian)){
            errors.russian = "Russian letters are only allowed!";
        }

        if (!values.transcription) {
            errors.transcription = "This field cannot be empty!"
        } else if(transcriptionRegExp.test(values.transcription)){
            errors.transcription = "Numbers are not allowed!";
        }

        if (!values.tags) {
            errors.tags = "This field cannot be empty!"
        } else if(!tagsRegExp.test(values.tags)){
            errors.tags = "Russian letters are only allowed!";
        }

        return errors;
    }

    useEffect(()=> {
        setFormErrors(validate (word));
     }, [word]);
    

     let classNameButton = "buttonSave";
     let classNameEnglish = "";
     let classNameTranscription = ""; 
     let classNameRussian = "";
     let classNameTags = ""; 
 
     if (word.english.length === 0) {
        classNameEnglish += " error";
        classNameButton += " deleteButtonSave"
     }
     if (word.transcription.length === 0) {
        classNameTranscription += " error";
        classNameButton += " deleteButtonSave"
     }
     if (word.russian.length === 0) {
        classNameRussian += " error";
        classNameButton += " deleteButtonSave"
     }
     if (word.tags.length === 0) {
        classNameTags += " error";
        classNameButton += " deleteButtonSave"
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
                <>
                    <tr >
                        <td><p>{formErrors.english}</p><input className = {classNameEnglish} value={word.english} onChange={onChangeEnglish} /></td>
                        <td><p>{formErrors.transcription}</p><input className = {classNameTranscription} value={word.transcription} onChange={onChangeTranscription} /></td>
                        <td><p>{formErrors.russian}</p><input className = {classNameRussian} value={word.russian} onChange={onChangeRussian} /></td>
                        <td><p>{formErrors.tags}</p><input className = {classNameTags} value={word.tags} onChange={onChangeTags} /></td>
                        <td>
                            <button onClick={onSave} className = {classNameButton}><MdOutlineDownloadDone /></button>
                            <button onClick={onClickCancel} className="buttonCancel"><ImCancelCircle /></button>
                        </td>
                    </tr>
                </>
            )
        }
    }

export default Word;

