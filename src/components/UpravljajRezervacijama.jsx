import React from 'react';
import Dugme from './Dugme.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';

//useEffect -> osluskuje promene i izvrsava funkciju u zavisnosti da li su se promenljive unutar komponente promenile ili ne.



function UpravljajRezervacijama() {
	const [ rezervacije, setRezervacije ] = useState();
	useEffect(() => {
		if(rezervacije == null){
			// console.log("Token: " + window.sessionStorage.getItem('auth_token'));
			// axios.get('http://127.0.0.1:8000/api/reservations').then((res) => {
			// 	setRezervacije(res.data.reservations); // res.data.kakoSeZoveNizKojiKupiPodatkeIzBaze
			// });

			var config = {
				method: 'get',
				url: 'http://127.0.0.1:8000/api/admin/reservations',
				headers: { 
				  Authorization: 'Bearer ' + window.sessionStorage.getItem('admin_auth_token')
				},
				data:null
			  };
			  
			  axios(config)
			  .then(function (response) {
				console.log(response.data);
				setRezervacije(response.data.reservations);
				// alert("Rezervacija je uspesno obrisana!")
			  })
			  .catch(function (error) {
				console.log(error);
			  });



		}
	}, [rezervacije])

	function ukloni(id){
		// e.preventDefault();

		var config = {
			method: 'delete',
			url: 'http://127.0.0.1:8000/api/admin/reservations/' + id,
			headers: { 
			  Authorization: 'Bearer ' + window.sessionStorage.getItem('admin_auth_token')
			},
			data:null
		  };
		  
		  axios(config)
		  .then(function (response) {
			console.log(response.data);
			alert("Rezervacija je uspesno obrisana!");
		  })
		  .catch(function (error) {
			console.log(error);
			// alert("Greska prilikom brisanja rezervacije!");
		  });
	}

	////////////////////////////////////////////////////////////////////////

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
							<th>Status(broj rezervacija) </th>
							<th>Email korisnika</th>
							<th></th>
							{/* <th>Grad</th> */}
						</tr>
						{ rezervacije == null ? <></> : rezervacije.map((rezervacija) => (
							<tr key = {rezervacija.id}>
								<td>{rezervacija.name}</td>
								<td>{rezervacija.status}</td>
								<td>{rezervacija.user.email}</td>
								<td><button className="dugmeObrisiRezervaciju" onClick={()=>ukloni(rezervacija.id)}>Obrisi</button></td>
								{/* <td>{rezervacija.city.name}</td> */}
							</tr>
						))}
						{/* <tr>
							<td>Naziv</td>
							<td> nesto 1</td>
							<td> nesto 2</td>
						</tr> */}
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
