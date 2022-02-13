import React, { useState, useEffect } from 'react';

// объект-контекст для Consumer
const WordsContext = React.createContext();

// обертка для App компонентов
function WordsContextProvider(props) {
    const [words, setWords] = useState([]);

    useEffect (() => {
        getWords();
        // saveWords();
    }, [])

    // получение слов
    const getWords = () => {
        fetch('/api/words')
        .then((response) => response.json())
        .then((response) => setWords(response))
    }

    // добавление слов
    const saveWords = () => {

        const new_word={
            english: "butterfly",
            russian: "	бабочка",
            transcription: "[ˈbʌtəflaɪ]",
            tags: "насекомые",
        }

        fetch( 'api/words/add', {
            method: 'POST',
            body: JSON.stringify(new_word),
            headers: {
                'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(() => {
            getWords()
        });
}

// POST Изменение слова: [http://itgirlschool.justmakeit.ru/api/words](http://itgirlschool.justmakeit.ru/api/words)[/22/update](http://sandbox.itgirlschool.ru/api/words/22/update) (Подставить id)
// POST Удаление слова: [http://itgirlschool.justmakeit.ru/api/words](http://itgirlschool.justmakeit.ru/api/words)[/22/delete](http://sandbox.itgirlschool.ru/api/words/22/delete) (Подставить id)


    return (
        <WordsContext.Provider value={{words, getWords, saveWords}}>
            {props.children}
        </WordsContext.Provider>
    )

}

export {WordsContextProvider, WordsContext};
