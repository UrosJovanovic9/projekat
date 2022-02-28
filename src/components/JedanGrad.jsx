import React from 'react';
import { BsHeart, BsCheck2, BsCheckLg, BsEye } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useState } from 'react';

function JedanGrad({ grad }) {
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
				<div className="opisGrada">{opisGrada}</div>
			</div>

			<div className="jedanGradTekst">
				<p className="jedanGradNaslov">{grad.naziv}</p>
				<p className="jedanGradOpis">{grad.opis}</p>
			</div>
			<button className="btn3">
				<BsEye />
			</button>

			<button className="btn1">
				<BsHeart />
			</button>

			<button className="btn2" onClick={prikaziOpis}>
				<FiMoreHorizontal />
			</button>
		</div>
	);
}

export default JedanGrad;
