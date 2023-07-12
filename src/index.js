import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data/data_sample.json'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './app.css';

function GetProvidersName() {
  return (
    <div>
      <h1 className='title'>Our medical providers: </h1>
      <ul className="providersList">
        {data.map((provider) => (
          <li key={provider.id}>
            <Link to={`/providersDetails/${provider.id}`} className="providerLink">
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


function getSingleProviderDetails(selectedProvider) {
  return (
    <div >
      <h1>{selectedProvider.name}</h1>
      <p> <span className='detailTitle' >Address: </span>{selectedProvider.address}</p>
      <p> <span className='detailTitle'>Phone Number:</span> {selectedProvider.phone_number}</p>
      <p> <span className='detailTitle'>Total cost: </span>{selectedProvider.total_cost}</p>
      <p> <span className='detailTitle'>Average patient age:</span>{selectedProvider.average_patient_age} years</p>
      <p> <span className='detailTitle'>Average inpatient claim cost: </span>{selectedProvider.average_inpatient_claim_cost} </p>
      <p> <span className='detailTitle'>Average outpatient claim cost: </span>{selectedProvider.average_outpatient_claim_cost} </p>
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
    <div className='singleProviderDetails'>
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
