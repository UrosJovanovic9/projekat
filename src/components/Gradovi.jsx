import React from 'react';
import JedanGrad from './JedanGrad.jsx';

function Gradovi({ gradovi, dodaj, ukloni }) {
	return (
		<div className="gradovi">
			{gradovi.map((g) => <JedanGrad grad={g} key={g.id} dodaj={dodaj} ukloni={ukloni} />)}
		</div>
	);
}

export default Gradovi;
