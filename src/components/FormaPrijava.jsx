import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function FormaPrijava({ dodajToken }) {
	const [ podaciKorisnika, setPodaciKorisnika ] = useState({
		email: '',
		password: ''
	});

	let navigateDestinacije = useNavigate();

	function handleInput(e) {
		// console.log(e);
		let noviPodaciKorisnika = podaciKorisnika;
		noviPodaciKorisnika[e.target.name] = e.target.value;
		setPodaciKorisnika(noviPodaciKorisnika);
	}

	function handleLogin(e) {
		e.preventDefault();
		axios
			.post('URL', podaciKorisnika)
			.then((res) => {
				console.log(res.data);
				window.sessionStorage.setItem('auth_token', res.data.access_token);
				dodajToken(res.data.access_token); // Funkcija
				navigateDestinacije(`/turistickeDestinacije`);
			})
			.catch((e) => console.log(e));
	}

	///////////////////////////////////////////////////
	///////////////////////////////////////////////////
	////////////////////////////////////////////////////

	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/registracija/*`;
		navigate(path);
	};

	let navigate1 = useNavigate();
	const RouteChange1 = () => {
		let path = `/promenaLozinke/*`;
		navigate1(path);
	};

	return (
		<div>
			<form className="forma" onSubmit={handleLogin}>
				<h2 className="prijavaforma" for="forma">
					Prijava
				</h2>
				<div className="form-group">
					<label for="formGroupExampleInput">Email</label>
					<input
						type="email"
						className="form-control"
						id="formGroupExampleInput1"
						placeholder="Email"
						name="email"
						onInput={handleInput}
					/>
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Lozinka</label>
					<input
						type="password"
						className="form-control"
						id="formGroupExampleInput2"
						placeholder="Lozinka"
						name="password"
						onInput={handleInput}
					/>
				</div>
				<div className="btnForma">
					<button className="dugme1" type="submit">
						Prijava
					</button>
				</div>
				{/* <div className="btnForma1">
					<button className="dugme2" type="submit" onClick={RouteChange1}>
						Promeni lozinku?
					</button>
				</div> */}
				<div className="btnForma1">
					<button className="dugme3" type="submit" onClick={routeChange}>
						Još uvek niste registrovani?
					</button>
				</div>
			</form>
		</div>
	);
}

export default FormaPrijava;
