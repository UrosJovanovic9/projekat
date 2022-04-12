import React from 'react';
import { BsHeart, BsCheck2, BsCheckLg, BsEye, BsDashLg, BsPlusLg } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { VscChromeClose } from 'react-icons/vsc';
import { useState } from 'react';

function JedanGrad({ grad, dodaj, ukloni }) {
	const [ opisGrada, setOpisGrada ] = useState('');
	const [ i, seti ] = useState(0);
	function prikaziOpis() {
		if (i % 2 == 0) {
			setOpisGrada(grad.opisGrada);
		} else {
			setOpisGrada('');
		}
		seti(i + 1);
	}

	return (
		<div className="jedanGrad">
			<div>
				<img className="slika" src={grad.slika} />
			</div>

			<div className="jedanGradTekst">
				<p className="jedanGradNaslov">{grad.naziv}</p>
				<p className="jedanGradOpis">{grad.opis}</p>
				<div className="opisGrada">{opisGrada}</div>
			</div>
			<button className="btn3" onClick={() => dodaj(grad.id)}>
				<BsCheckLg />
			</button>

			<button className="btn1" onClick={() => ukloni(grad.id)}>
				<VscChromeClose />
			</button>

			<button className="btn2" onClick={prikaziOpis}>
				<FiMoreHorizontal />
			</button>
		</div>
	);
}

export default JedanGrad;
