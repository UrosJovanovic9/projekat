import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function FormaRegistracija() {
	let navigatePrijava = useNavigate();

	const [ podaciKorisnika, setPodaciKorisnika ] = useState({
		name: '',
		surname: '',
		email: '',
		password: ''
	});

	function handleInput(e) {
		let noviPodaciKorisnika = podaciKorisnika;
		noviPodaciKorisnika[e.target.name] = e.target.value;
		setPodaciKorisnika(noviPodaciKorisnika);
	}

	function handleRegister(e) {
		e.preventDefault();
		axios
			.post('URL', podaciKorisnika)
			.then((res) => {
				console.log(res.data);
				navigatePrijava(`/prijava`);
			})
			.catch((e) => console.log(e));
	}

	//////////////////////////////////////////////////
	//////////////////////////////////////////////////
	//////////////////////////////////////////////////

	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/prijava`;
		navigate(path);
	};

	return (
		<div>
			<form className="forma" onSubmit={handleRegister}>
				<h2 className="prijavaforma" for="forma">
					Registracija
				</h2>
				<div className="form-group">
					<label for="formGroupExampleInput">Email</label>
					<input
						type="email"
						className="form-control"
						id="formGroupExampleInput1"
						placeholder="Email"
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
						onInput={handleInput}
					/>
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput">Ime</label>
					<input
						type="name"
						class="form-control"
						id="formGroupExampleInput3"
						placeholder="Ime"
						onInput={handleInput}
					/>
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Prezime</label>
					<input
						type="surname"
						class="form-control"
						id="formGroupExampleInput4"
						placeholder="Prezime"
						onInput={handleInput}
					/>
				</div>
				<div className="btnForma">
					<button className="dugme1" type="submit">
						Registracija
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

export default FormaRegistracija;
