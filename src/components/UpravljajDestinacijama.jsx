import React from 'react';
import { useState, useEffect } from 'react';
import FloatingLabel  from 'react-bootstrap-floating-label';
import Form from 'react-bootstrap-floating-label'
import axios from "axios";

function UpravljajDestinacijama() {

	// const[grad, setGrad] = useState({
	// 	id:
	// })

	const[destinacije, setDestinacije] = useState();
	useEffect(()=> {
		if(destinacije == null){
			axios.get("URL").then((res) => {
				setDestinacije(res.data.destinacije);
			})
		}
	}, [destinacije])


	const [show, setShow] = useState(false)

	return (

        <>
		<div className="upravljajDestinacijama">
			<div className="tabelaUpravljanjeDestinacijama">
				<table className="tabelaDestinacije">
					<tbody>
						<tr>
							<th>Naziv naslov</th>
							<th>Nesto 1 naslov</th>
							<th>Nesto 2 naslov</th>
						</tr>

						<tr>
						{ destinacije == null ? <></> : destinacije.map((destinacija) => (
							<tr key = {destinacija.id}>
								<td>{destinacija.naziv}</td>
								<td>{destinacija.atribut1}</td>
								<td>{destinacija.atribut2}</td>
							</tr>
						))}
						</tr>
						<tr>
							<td>Naziv dva</td>
							<td> nesto 1</td>
							<td> nesto 2</td>
						</tr>
						<tr>
							<td>Drugi naziv</td>
							<td> nesto 1</td>
							<td> nesto 2</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="buttonsUpravljajDestinacijama">
				<button className="dugmeIzmeni">Izmeni</button>
				<button className="dugmeObrisi">Obrisi</button>
			</div>
		</div>

        <button onClick={() => setShow(true)} className="dugmeDodajNoviGrad">Dodaj novi grad</button>

		{show? <div className = 'formaZaUpravljanjeDestinacijama'>
		<form className="forma">
				<h2 className="prijavaforma" htmlFor="forma">
					Dodaj novi grad
				</h2>
				<div className="form-group">
					<label for="formGroupExampleInput">Naziv:</label>
					<input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Naziv" />
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Drzava:</label>
					<input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Drzava" />
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput">Naseljenost:</label>
					<input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Naseljenost" />
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Valuta:</label>
					<input type="text" class="form-control" id="formGroupExampleInput4" placeholder="Valuta" />
				</div>
				<div className="form-group">
				<label for="formGroupExampleInput2">Opis:</label>
					<textarea type="text" class="form-control" id="formGroupExampleInput5" placeholder="Opis grada"/>
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Cena:</label>
					<input type="text" class="form-control" id="formGroupExampleInput6" placeholder="Cena" />
				</div>
				<div className="btnForma">
					<button className="dugmeUpravljajDestinacijama" type="submit">
						Dodaj
					</button>
				</div>
			</form>

		</div> : null}
        </>
	);
}

export default UpravljajDestinacijama;
