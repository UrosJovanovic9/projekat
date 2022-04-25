import React from 'react';
import { useNavigate } from 'react-router-dom';

function FormaRegistracija() {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/prijava`;
		navigate(path);
	};

	return (
		<div>
			<form className="forma">
				<h2 className="prijavaforma" for="forma">
					Registracija
				</h2>
				<div className="form-group">
					<label for="formGroupExampleInput">Email</label>
					<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Email" />
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Lozinka</label>
					<input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Lozinka" />
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput">Ime</label>
					<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ime" />
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Prezime</label>
					<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Prezime" />
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
