import React from 'react';
import ProviderDetails from './ProviderDetails.jsx';
import ProvidersPositionOnMap from './ProvidersPositionOnMap.jsx';
import data from '../data/data_sample.json'
import { useParams } from 'react-router-dom';

function DetailsPage() {
    const { id } = useParams();
    const selectedProvider = data.find(item => item.id == parseInt(id))
    return (
      <div className='singleProviderDetails'>
        {ProviderDetails(selectedProvider)}
        {ProvidersPositionOnMap(selectedProvider)}
      </div>
    );
  }

  export default DetailsPage;