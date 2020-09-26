import React from 'react';
import SearchForm from './SearchForm.js';

function TitleBanner() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h2 className="display-4">Employee Directory</h2>
        <p className="lead">Search for specific employees</p>
        <div className="row">
          <div className="col-md-6">
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleBanner;