import React from 'react';
import Dugme from './Dugme.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Rezervacije({ gradoviRezervacije, ukupno, korisnik, token, refreshAgain }) {
	// const [ rezervacije, setRezervacije ] = useState([]);
	// setRezervacije(gradoviRezervacije);

	function dodajRezervacije(e) {
		e.preventDefault();
		if (gradoviRezervacije != null) {
			gradoviRezervacije.forEach((grad) => {
				// var data = JSON.stringify({
				// 	name: 'RezervacijaOpet',
				// 	status: 'Prihvacena',
				// 	user_id: 3,
				// 	city_id: 1
				// });

				var rez = {
					name: grad.naziv + '',
					status: grad.broj + '.',
					user_id: korisnik,
					city_id: grad.id
				};

				// console.log(korisnik);

				var config = {
					method: 'post',
					url: 'http://127.0.0.1:8000/api/reservations',
					headers: {
						Authorization: 'Bearer ' + window.sessionStorage.getItem('auth_token')
					},
					data: rez
				};

				axios(config)
					.then(function(response) {
						console.log(response.data);
						alert('Uspesno ste kreirali rezervaciju!');
						refreshAgain();
					})
					.catch(function(error) {
						console.log(error);
						alert('Greska prilikom kreiranja rezervacija');
					});

				// setRezervacije({ name: grad.naziv, status: grad.cena, user_id: korisnik, city_id: grad.id });
				// axios
				// 	.post('http://127.0.0.1:8000/api/reservations', rezervacije)
				// 	.then((res) => {
				// 		console.log(res.data);
				// 	})
				// 	.catch((e) => console.log(e));
			});
		}
	}

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
			<div className="dugmeKomponentaRezervacije">
				<Dugme />
			</div>
			<div className="dugmeKomponentaPotvrda">
				<button
					className="dugmePotvrdaRezervacije"
					onClick={token == null ? () => alert('Molimo Vas da se ulogujete') : dodajRezervacije}
				>
					Potvrdi rezervacije
				</button>
			</div>
		</div>
	);
}

export default Rezervacije;
