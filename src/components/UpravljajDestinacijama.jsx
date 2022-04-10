import React from 'react';

function UpravljajDestinacijama() {
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

        <button className="dugmeDodajNoviGrad">Dodaj novi grad</button>
        </>
	);
}

export default UpravljajDestinacijama;
