import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data/data_sample.json'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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


function DetailsPage(){
  return <p>Details:</p>
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
