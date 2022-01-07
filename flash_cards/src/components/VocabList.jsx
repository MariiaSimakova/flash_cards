import React from "react";
import '../components/vocabList.css'
import data from "../data.js";
import Word from "./Word";


function VocabList () {
    return (
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
			{data.map((item) => (
			<Word key={item.id} {...item} />
			))}
		</tbody>
	</table>
    );
}

export default VocabList;
