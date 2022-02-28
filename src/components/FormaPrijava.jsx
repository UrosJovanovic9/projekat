import React from 'react';
import { useNavigate } from 'react-router-dom';

function FormaPrijava() {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/registracija/*`;
		navigate(path);
	};
	return (
		<div>
			<form className="forma">
				<h2 className="prijavaforma" for="forma">
					Prijava
				</h2>
				<div className="form-group">
					<label for="formGroupExampleInput">Email</label>
					<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Email" />
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Lozinka</label>
					<input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Lozinka" />
				</div>
				<div className="btnForma">
					<button className="dugme1" type="submit">
						Prijava
					</button>
				</div>
				<div className="btnForma1">
					<button className="dugme2" type="submit">
						Zaboravljena lozinka?
					</button>
				</div>
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
