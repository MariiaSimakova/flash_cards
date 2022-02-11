import {useState, useEffect} from "react";
import '../WordInput/wordInput.css'


function WordInput(props) {
    const [value, setValue] = useState(props.value);
    const [error, setError] = useState("");

    let className = "";
    if (error) {
        className += " error"
    }


    function onChange (evt) {
        validate(evt.target.value);
        console.log(value);
    }
    // передать value в родителя
            console.log(value);


    function validate (inputValue) {
        setValue(inputValue);  
        // console.log(inputValue);

        if (inputValue === "") {
            setError ('This field cannot be empty!');
        } else if (props.regExpEng && !props.regExpEng.test(inputValue)) {
            setError ('English letters are only allowed!');
        }
        else if (props.regExpTranscription && props.regExpTranscription.test(inputValue)) {
            setError ('No numbers are only allowed!');
        }

        else if (props.regExpRus && !props.regExpRus.test(inputValue)) {
            setError ('Russian letters are only allowed!');
        }
        else if (props.regExpTags && !props.regExpTags.test(inputValue)) {
            setError ('Russian letters are only allowed!');
        }
        else {
            setError ("");
        } 
    }

    useEffect (() => {
        validate(value);
    }, []);


    return(
        <>
            <div className="error_title">{error}</div>
            <input className={className} value={value} onChange={onChange} />
        </>
    );
}

export default WordInput;