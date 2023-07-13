import React from 'react';

function ProviderDetails(selectedProvider) {
    return (
      <div >
        <h1>{selectedProvider.name}</h1>
        <p> <span className='informationTitle'>Address: </span>{selectedProvider.address}</p>
        <p> <span className='informationTitle'>Phone Number:</span> {selectedProvider.phone_number}</p>
        <p> <span className='informationTitle'>Total cost: </span>{selectedProvider.total_cost}</p>
        <p> <span className='informationTitle'>Average patient age: </span>{selectedProvider.average_patient_age}</p>
        <p> <span className='informationTitle'>Average inpatient claim cost: </span>{selectedProvider.average_inpatient_claim_cost} </p>
        <p> <span className='informationTitle'>Average outpatient claim cost: </span>{selectedProvider.average_outpatient_claim_cost} </p>
      </div>
    )
  }

  export default ProviderDetails;