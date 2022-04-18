import React from 'react';
import { useState } from 'react';

function UpravljajDestinacijama() {

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
							<td>Naziv</td>
							<td> nesto 1</td>
							<td> nesto 2</td>
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
				<h2 className="prijavaforma" for="forma">
					Dodaj novi grad
				</h2>
				<div className="form-group">
					<label for="formGroupExampleInput">Naziv</label>
					<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Naziv" />
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Drzava</label>
					<input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Drzava" />
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput">Naseljenost:</label>
					<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Naseljenost" />
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Valuta</label>
					<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Valuta" />
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Opis</label>
					<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Opis" />
				</div>
				<div className="form-group">
					<label for="formGroupExampleInput2">Cena</label>
					<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Cena" />
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
