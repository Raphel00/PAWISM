import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import PetList from './components/List'; 
import PetDetail from './components/PetDetails'; 
import SearchBar from './components/Search'; 
import Filter from './components/Filter'; 
import About from './components/About'; 
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

  return (
    <Router>
      <Header />
      <div className="container">
        <SearchBar setSearchTerm={setSearchTerm} />
        <Filter setFilterType={setFilterType} />
        <Routes>
          <Route
            path="/adopt"
            element={<PetList searchTerm={searchTerm} filterType={filterType} />}
          />

          <Route path="/pet/:id" element={<PetDetail />} />

          <Route path="/about" element={<About />} /> {/* About Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

