import React, { useContext, useState } from "react";
import '../VocabList/vocabList.css'
// import data from "../../data.js";
import Word from "../Word/Word";
import {WordsContext} from '../context/WordsContext'


function VocabList () {
	// подписка на контекст для Consumer
    const {words} = useContext(WordsContext);
	// console.log(words);


    return (
		<div className="table__wrapper">
			<table className="table">
				<thead>
					<tr>
						<th>English</th>
						<th>Transcription</th>
						<th>Russian</th>
						<th>Tags</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{words.map((item) => (
					<Word key={item.id} {...item} />
					))}
				</tbody>
			</table>
		</div>	
    );
}

export default VocabList;
