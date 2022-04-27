import React from 'react';
import { Link } from 'react-router-dom';
import { MdTravelExplore } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import axios from "axios";
function NavigationBar({ nav, token }) {

	function handleLogout(){
		var config = {
			method: "post",
			url : "URL",
			headers : {
				'Authorization' : "Bearer" + window.sessionStorage.getItem("auth_token"),
			},
		};
		axios(config).then((res) => {
			console.log(res.data);
			window.sessionStorage.setItem("auth_token", null);
		});
	}



	return (
		<div className={nav === 1 ? 'navigationBar' : 'bottomBar'}>
			{nav === 1 ? 
			(<div className="logo">
				<MdTravelExplore />
			</div>) : (<></>) }
			{/* <div className="logo">
				<MdTravelExplore />
			</div> */}
			<Link to="/turistickeDestinacije" className="destinacije">
				Turističke destinacije
			</Link>

			<Link to="/pregledRezervacija" className="pregled">
				Vaše rezervacije
			</Link>

			<Link to="/upravljajRezervacijama" className="pregled">
				Upravljaj rezervacijama
			</Link>

			<Link to="/kontakt" className="pregled" onClick = {window['initMap']} >
				Kontakt
			</Link>

			<Link to="/upravljajDestinacijama" className="pregled">
				Upravljaj destinacijama
			</Link>

			{token == null ? (<Link to="/prijava" className="pregled">Prijava</Link>) : (<Link to="/" className="pregled" onClick = {handleLogout}>Odjavi se</Link>)}
			

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
