import React, { useState } from 'react';
import TitleBanner from './components/SearchBanner.js';
import EmployeeList from './components/EmployeeList.js';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <TitleBanner value={searchTerm} handleSearch={handleSearch} />
      <EmployeeList searchTerm={searchTerm} />
    </>
  );
}

export default App;
