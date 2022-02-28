import React from 'react';
import { Link } from 'react-router-dom';
import { MdTravelExplore } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
function NavigationBar() {
	return (
		<div className="navigationBar">
			<div className="logo">
				<MdTravelExplore />
			</div>
			<Link to="/" className="destinacije">
				Turističke destinacije
			</Link>
			<Link to="/pregled" className="pregled">
				Pregled destinacija
			</Link>
			<Link to="/prijava" className="prijava">
				Prijava
			</Link>
			<Link to="/registracija" className="registracija">
				Registracija
			</Link>
			{/* <button className="dugmePretraga">
				<BsSearch className="search" /> */}
			<input
				className="pretraga"
				type="text"
				id="myInput"
				onKeyUp={window['funkcijaZaPretragu']}
				placeholder="Pretrazi gradove ..."
			/>
			{/* </button> */}
		</div>
	);
}

export default NavigationBar;
