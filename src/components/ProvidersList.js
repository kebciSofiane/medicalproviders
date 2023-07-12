import React from 'react';
import data from '../data/data_sample.json'
import { Link } from 'react-router-dom';

function ProvidersList() {
    return (
      <div>
        <h1 className='indexPageTitle'>Our medical providers: </h1>
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
  
export default ProvidersList;