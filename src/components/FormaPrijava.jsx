import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function FormaPrijava({ dodajToken, dodajKorisnika }) {
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
		// e.preventDefault();
		// axios
		// 	.post('http://127.0.0.1:8000/api/login', podaciKorisnika)
		// 	.then((res) => {
		// 		console.log(res.data);
		// 		window.sessionStorage.setItem('auth_token', res.data.access_token);
		// 		dodajToken(res.data.access_token); // Funkcija
		// 		navigateDestinacije(`/turistickeDestinacije`);
		// 	})
		// 	.catch((e) => console.log(e));

		e.preventDefault();
		var config = {
			method: 'post',
			url: 'http://127.0.0.1:8000/api/login',
			headers: {
				Authorization: 'Bearer ' + window.sessionStorage.getItem('auth_token')
			},
			data: podaciKorisnika
		};

		axios(config)
			.then(function(response) {
				console.log(response.data);
				window.sessionStorage.setItem('auth_token', response.data.access_token);
				dodajToken(response.data.access_token); // Funkcija
				// console.log(response.data.data.id);
				dodajKorisnika(response.data.data.id);
				navigateDestinacije(`/turistickeDestinacije`);
			})
			.catch(function(error) {
				console.log(error);
				alert('Neuspesno logovanje');
				navigateDestinacije(`/`);
			});
	}

	function handleLoginAdmin(e) {
		e.preventDefault();
		var config = {
			method: 'post',
			url: 'http://127.0.0.1:8000/api/admin/login',
			headers: {
				Authorization: 'Bearer ' + window.sessionStorage.getItem('admin_auth_token')
			},
			data: podaciKorisnika
		};

		console.log(podaciKorisnika);

		axios(config)
			.then(function(response) {
				// console.log(response.data);
				console.log(response.data.token);
				window.sessionStorage.setItem('admin_auth_token', response.data.token);
				dodajToken(response.data.token);
				navigateDestinacije(`/turistickeDestinacije`);
			})
			.catch(function(error) {
				console.log(error);
				alert('Neuspesno logovanje');
				navigateDestinacije(`/`);
			});
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

	// const notify = () => toast('Greska prilikom registracije');

	return (
		<div>
			<form className="forma">
				<h2 className="prijavaforma" for="forma">
					Prijava
				</h2>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Email</label>
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
					<label htmlFor="formGroupExampleInput2">Lozinka</label>
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
					<button className="dugme1" type="submit" onClick={handleLogin}>
						Prijava
					</button>
				</div>
				<div className="btnForma">
					<button className="dugme4" type="submit" onClick={handleLoginAdmin}>
						Prijava(admin)
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
