import React from 'react';
import Dugme from './Dugme.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';

//useEffect -> osluskuje promene i izvrsava funkciju u zavisnosti da li su se promenljive unutar komponente promenile ili ne.

function UpravljajRezervacijama() {
	const [ rezervacije, setRezervacije ] = useState();
	useEffect(() => {
		if(rezervacije == null){
			axios.get('URL').then((res) => {
				setRezervacije(res.data.rezervacije); // res.data.kakoSeZoveNizKojiKupiPodatkeIzBaze
			});
		}
	}, [rezervacije])
	

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
							<th>Atribut 1 </th>
							<th>Atribut 2 </th>
						</tr>
						{ rezervacije == null ? <></> : rezervacije.map((rezervacija) => (
							<tr key = {rezervacija.id}>
								<td>{rezervacija.naziv}</td>
								<td>{rezervacija.atribut1}</td>
								<td>{rezervacija.atribut2}</td>
							</tr>
						))}
						<tr>
							<td>Naziv</td>
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
