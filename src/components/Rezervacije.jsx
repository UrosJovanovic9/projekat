import React from 'react';
import Dugme from './Dugme.jsx';

function Rezervacije({ gradoviRezervacije, ukupno }) {
	return (
		<div className="rezervacije">
			<div>
				{/* <h3>Ovo je pregled filmova</h3> */}

				<table className="tabela" id="myTable">
					<tbody>
						<tr>
							<th>Naziv grada</th>
							<th>Cena</th>
							<th>Broj rezervacija</th>
						</tr>
						{gradoviRezervacije.map((grad) => (
							<tr key={grad.id}>
								<td>{grad.naziv}</td>
								<td>{grad.cena + 'e'}</td>
								<td>{grad.broj}</td>
							</tr>
						))}
						<tr>
							<th colSpan="2"> Ukupno:</th>
							<th>{ukupno + 'e'}</th>
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

export default Rezervacije;
