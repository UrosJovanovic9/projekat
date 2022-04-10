import React from 'react';
import { Link } from 'react-router-dom';
import { MdTravelExplore } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
function NavigationBar({ nav }) {
	return (
		<div className={nav === 1 ? 'navigationBar' : 'bottomBar'}>
			{nav === 1 ? 
			(<div className="logo">
				<MdTravelExplore />
			</div>) : (<></>) }
			{/* <div className="logo">
				<MdTravelExplore />
			</div> */}
			<Link to="/" className="destinacije">
				Turističke destinacije
			</Link>

			<Link to="/pregledRezervacija" className="pregled">
				Vaše rezervacije
			</Link>

			<Link to="/upravljajRezervacijama" className="pregled">
				Upravljaj rezervacijama
			</Link>

			<Link to="/kontakt" className="pregled">
				Kontakt
			</Link>

			<Link to="/upravljajDestinacijama" className="pregled">
				Upravljaj destinacijama
			</Link>

			<Link to="/prijava" className="prijava" />

			<Link to="/promenaLozinke" className="pregled" />

			<Link to="/registracija" className="registracija" />
			{/* <button className="dugmePretraga">
				<BsSearch className="search" /> */}
			{/* <input
				className="pretraga"
				type="text"
				id="myInput"
				onKeyUp={window['funkcijaZaPretragu']}
				placeholder="Pretrazi gradove ..."
			/> */}
			{/* </button> */}
		</div>
	);
}

export default NavigationBar;
