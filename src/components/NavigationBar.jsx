import React from 'react';
import { Link } from 'react-router-dom';
import { MdTravelExplore } from 'react-icons/md';
// import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function NavigationBar({ nav, token }) {
	let navigate = useNavigate();

	function handleLogout(e){
		// e.preventDefault();
		if(window.sessionStorage.getItem('auth_token') !== 'null'){
			handleLogoutUser();
		}
		if(window.sessionStorage.getItem('admin_auth_token') !== 'null'){
			handleLogoutAdmin();
		}
		
	}

	function handleLogoutUser(e) {
		// e.preventDefault();
		var config = {
			method: 'post',
			url: 'http://127.0.0.1:8000/api/logout',
			headers: {
				Authorization: 'Bearer ' + window.sessionStorage.getItem('auth_token')
			}
		};

		axios(config).then((res) => {
			console.log(res.data);
			window.sessionStorage.setItem('auth_token', null);
			navigate('/');
		}).catch((error) => console.log(error));
	}

	function handleLogoutAdmin(e){
		// e.preventDefault();
		var config = {
			method: 'post',
			url: 'http://127.0.0.1:8000/api/admin/logout',
			headers: {
				Authorization: 'Bearer ' + window.sessionStorage.getItem('admin_auth_token')
			}
		};

		axios(config).then((res) => {
			console.log(res.data);
			window.sessionStorage.setItem('admin_auth_token', null);
			navigate('/');
		}).catch((error) => console.log(error));
	}
	


	return (
		<div className={nav === 1 ? 'navigationBar' : 'bottomBar'}>
			{nav === 1 ? (
				<div className="logo">
					<MdTravelExplore />
				</div>
			) : (
				<></>
			)}
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

			<Link to="/kontakt" className="pregled" onClick={window['initMap']}>
				Kontakt
			</Link>

			<Link to="/promenaLozinke" className="pregled">
				Promeni lozinku
			</Link>

			{token == null ? (
				<Link to="/" className="pregled">
					Prijava
				</Link>
			) : (
				<Link to="/" className="pregledOdjava" onClick={handleLogout}>
					Odjavi se
				</Link>
			)}

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
