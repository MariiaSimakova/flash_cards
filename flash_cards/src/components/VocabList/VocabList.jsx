import React from "react";
import '../VocabList/vocabList.css'
import data from "../../data.js";
import Word from "../Word/Word";


function VocabList () {
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
					{data.map((item) => (
					<Word key={item.id} {...item} />
					))}
				</tbody>
			</table>
		</div>	
    );
}

export default VocabList;
