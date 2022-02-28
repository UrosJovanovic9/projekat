import React from 'react';
import JedanGrad from './JedanGrad.jsx';

function Gradovi({ gradovi }) {
	return <div className="gradovi">{gradovi.map((g) => <JedanGrad grad={g} key={g.id} />)}</div>;
}

export default Gradovi;
