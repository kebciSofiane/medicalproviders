import React from "react";
import ProvidersList from './ProvidersList.js';
import DetailsPage from './DetailsPage.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<ProvidersList />} />
          <Route path="/providersDetails/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;