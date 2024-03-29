import React from 'react';
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'https://cdn.esm.sh/react-leaflet';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// import { MapContainer, TileLayer, useMap } from 'react-leaflet';
// import { MapContainer, TileLayer, Marker, Popup } from 'https://cdn.esm.sh/react-leaflet';

function Kontakt() {
	// const [ isLoaded ] = useLoadScript({ googleMapsApiKey: 'AIzaSyCp2TeN4jSXWRV1JHlwiP6cbj-jiikvR9M' });

	// function Map() {
	// 	// return <GoogleMap zoom = {10} center = {} ></GoogleMap>;
	// }

	// const position = [ 44.7992, 20.4695 ];

	return (
		<div className="kontaktInformacije">
			<div className="kontaktTekst">
				<p className="kontaktPrviParagraf">
					Mi smo jedna od vodećih turistickih agencija, tur-operatora. Osnovani smo 1996 godine. Nudimo širok
					asortiman kvalitetnih usluga za putnike iz celog sveta.
					<br />
					<br />
				</p>

				<p>
					Organizujemo razne grupne ture za daleke destinacije, pakete za letnji odmor vezane za čarter
					letove, kao i organizacijom seminara i kongresa u zemlji i inostranstvu , prodajom međunarodnih avio
					karata, team building programe seminare i mnoge druge pouzdane i pogodne usluge.
					<br />
					<br />
					Članica smo <i>IATA-e i YUTA-e.</i> Radimo samo sa licenciranim dobavljačima, čime se obezbeđuje
					pružanje kvalitetnih usluga.
					<br />
					<br />
					Naš tim se sastoji od veoma iskusnog, kvalitetno obrazovanog i ljubaznog osoblja. Ponosimo se našim
					razlicitim kategorijama proizvoda i odličnom uslugom koju ćete dobiti od našeg tima.{' '}
					<b>To je ono što nas izdvaja.</b>
				</p>
				{/* <p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam dolorum cumque at odit optio
					obcaecati, nesciunt molestiae nemo culpa veniam tempora enim perferendis aspernatur? Veritatis natus
					placeat autem esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam dolorum
					cumque at odit optio obcaecati, nesciunt molestiae nemo culpa veniam tempora enim perferendis
					aspernatur? Veritatis natus placeat autem esse.
				</p> */}
				{/* <p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam dolorum cumque at odit optio
					obcaecati, nesciunt molestiae nemo culpa veniam tempora enim perferendis aspernatur? Veritatis natus
					placeat autem esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam dolorum
					cumque at odit optio obcaecati, nesciunt molestiae nemo culpa veniam tempora enim perferendis
					aspernatur? Veritatis natus placeat autem esse.
				</p> */}
			</div>
			<div id="map" className="mapa">
				{
					// <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
					// 	<TileLayer
					// 		attribution="&copy; <a href=http://osm.org/copyright;>OpenStreetMap</a> contributors"
					// 		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					// 	/>
					// 	<Marker position={position}>
					// 		<Popup>
					// 			A pretty CSS3 popup. <br /> Easily customizable.
					// 		</Popup>
					// 	</Marker>
					// </MapContainer>
				}
			</div>
		</div>
	);
}

export default Kontakt;
