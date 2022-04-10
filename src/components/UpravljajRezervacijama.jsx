import React from 'react';
import Dugme from './Dugme.jsx';

function UpravljajRezervacijama() {
	return (
		<div className="rezervacije">
			<input
				className="pretraga"
				type="text"
				id="myInput"
				onKeyUp={window['funkcijaZaPretragu']}
				placeholder="Pretrazi rezervacije ..."
			/>
			<div>
				<table className="tabela" id="myTable">
					<tbody>
						<tr>
							<th>Naziv Rezervacije</th>
							<th>Nesto 1 </th>
							<th>Nesto 2 </th>
						</tr>

						<tr>
							<td>Naziv</td>
							<td> nesto 1</td>
							<td> nesto 2</td>
						</tr>
						<tr>
							<td>Naziv dva</td>
							<td> nesto 1</td>
							<td> nesto 2</td>
						</tr>
						<tr>
							<td>Drugi naziv</td>
							<td> nesto 1</td>
							<td> nesto 2</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="dugmeKomponenta">
				<Dugme />
			</div>
		</div>
	);
}

export default UpravljajRezervacijama;
