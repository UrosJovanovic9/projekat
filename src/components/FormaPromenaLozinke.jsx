import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function FormaPromenaLozinke(korisnik) {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/`;
		navigate(path);
	};

	const [ podaciKorisnika, setPodaciKorisnika ] = useState({
		email: '',
		password: ''
	});

	function handleInput(e) {
		// console.log(e);
		let noviPodaciKorisnika = podaciKorisnika;
		noviPodaciKorisnika[e.target.name] = e.target.value;
		setPodaciKorisnika(noviPodaciKorisnika);
	}

	function changePassword(e) {
		e.preventDefault();
		// console.log(korisnik.korisnik);
		// var korisnik_id = parseInt(korisnik, 10);
		// console.log(korisnik_id);
		console.log(podaciKorisnika);
		var config = {
			method: 'put',
			url: 'http://127.0.0.1:8000/api/changeuser/' + korisnik.korisnik,
			headers: {
				Authorization: 'Bearer ' + window.sessionStorage.getItem('auth_token')
			},
			data: podaciKorisnika
		};

		axios(config)
			.then(function(response) {
				console.log(response.data);
				window.sessionStorage.setItem('auth_token', null);
				alert('Lozinka je uspesno promenjena');
				navigate('/');
			})
			.catch(function(error) {
				console.log(error.response.data);
				alert('Greska prilikom promene lozinke. Lozinka mora imati minimum pet karaktera!');
			});
	}

	return (
		<div>
			<form className="forma">
				<h2 className="prijavaforma" for="forma">
					Promena lozinke
				</h2>
				<div className="form-group">
					<label for="formGroupExampleInput">Email</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						name="email"
						onInput={handleInput}
						placeholder="Email"
					/>
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Ime</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput2"
						name="name"
						onInput={handleInput}
						placeholder="Ime"
					/>
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Nova lozinka</label>
					<input
						type="password"
						className="form-control"
						id="formGroupExampleInput3"
						name="password"
						onInput={handleInput}
						placeholder="Nova lozinka"
					/>
				</div>
				<div className="btnForma">
					<button className="dugme1" type="submit" onClick={changePassword}>
						Promeni
					</button>
				</div>
				<div className="btnForma1">
					<button className="dugme3" type="submit" onClick={routeChange}>
						Prijavi se
					</button>
				</div>
			</form>
		</div>
	);
}

export default FormaPromenaLozinke;
