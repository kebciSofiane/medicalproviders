import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data/data_sample.json'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './app.css';

function GetProvidersName() {

  return (
    <div>
      <h1>Our medical providers: </h1>
      <ul className="providersList">
        {data.map((provider) => (
          <li key={provider.id}>
            <Link to={`/providersDetails/${provider.id}`}>
              <div className="providersName">
                <h2>{provider.name}</h2>
                <p>{provider.address}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}


function getSingleProviderDetails(selectedProvider ) {
  return (
    <div>
      <h1>{selectedProvider.name}</h1>
      <p>Phone Number: {selectedProvider.phone_number}</p>
      <p>Address: {selectedProvider.address}</p>
      <p>Total cost: {selectedProvider.total_cost}</p>
      <p>Average patient age: {selectedProvider.average_patient_age} years</p>
      <p>Average inpatient claim cost: {selectedProvider.average_inpatient_claim_cost} </p>
      <p>Average outpatient claim cost: {selectedProvider.average_outpatient_claim_cost} </p>
    </div>
  )
}


function displayTheMap(selectedProvider){
  const position = selectedProvider.coordinates;
  return(
    <div className="map" id="map">
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Provider Location
        </Popup>
      </Marker>
    </MapContainer>
  </div>
  )
}


function DetailsPage() {
  const { id } = useParams();
  const selectedProvider = data.find(item => item.id == parseInt(id))
  return (
    <div>
      {getSingleProviderDetails(selectedProvider)}
      {displayTheMap(selectedProvider)}
    
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetProvidersName />} />
        <Route path="/providersDetails/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
