import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data/data_sample.json'
import { BrowserRouter as Router, Routes, Route, Link,useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.css'; // Import the CSS file

function GetProvidersName(){
  return(
    <div>
      <h1>Our medical providers: </h1>
      <ul>{data.map(provider => (
        <li key={provider.id}>
          <Link to={`/providersDetails/${provider.id}}`}>{provider.name}</Link>
        </li>
        ))}
      </ul>
    </div>
  )
}


function DetailsPage() {
  const {id} = useParams();
  const selectedItem = data.find(item => item.id== parseInt(id) )
  const position = selectedItem.coordinates; 

  return (
    <div>
      <h1>Provider Details:</h1>
      <p>Phone Number: {selectedItem.phone_number}</p>
      <p>Address: {selectedItem.address}</p>
      <p>Total cost: {selectedItem.total_cost}</p>
      <p>Average patient age: {selectedItem.average_patient_age} years</p>
      <p>Average inpatient claim cost: {selectedItem.average_inpatient_claim_cost} </p>
      <p>Average outpatient claim cost: {selectedItem.average_outpatient_claim_cost} </p>
      <div className="map" id="map">
        <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
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
    <App/>
  </React.StrictMode>
);
