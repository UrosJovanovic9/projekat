import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Kontakt() {
	// const [ isLoaded ] = useLoadScript({ googleMapsApiKey: 'AIzaSyCp2TeN4jSXWRV1JHlwiP6cbj-jiikvR9M' });

	// function Map() {
	// 	// return <GoogleMap zoom = {10} center = {} ></GoogleMap>;
	// }

	return (
		<div className="kontaktInformacije">
			<div className="kontaktTekst">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam dolorum cumque at odit optio
					obcaecati, nesciunt molestiae nemo culpa veniam tempora enim perferendis aspernatur? Veritatis natus
					placeat autem esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam dolorum
					cumque at odit optio obcaecati, nesciunt molestiae nemo culpa veniam tempora enim perferendis
					aspernatur? Veritatis natus placeat autem esse.
				</p>
				{/* <p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam dolorum cumque at odit optio
					obcaecati, nesciunt molestiae nemo culpa veniam tempora enim perferendis aspernatur? Veritatis natus
					placeat autem esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam dolorum
					cumque at odit optio obcaecati, nesciunt molestiae nemo culpa veniam tempora enim perferendis
					aspernatur? Veritatis natus placeat autem esse.
				</p> */}
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam dolorum cumque at odit optio
					obcaecati, nesciunt molestiae nemo culpa veniam tempora enim perferendis aspernatur? Veritatis natus
					placeat autem esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam dolorum
					cumque at odit optio obcaecati, nesciunt molestiae nemo culpa veniam tempora enim perferendis
					aspernatur? Veritatis natus placeat autem esse.
				</p>
			</div>
			<div id="map" className="mapa" />
		</div>
	);
}

export default Kontakt;
