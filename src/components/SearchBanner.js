import React from 'react';

function TitleBanner(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h2 className="display-4">Employee Directory</h2>
        <p className="lead">Search for specific employees</p>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <input
                  onChange={props.handleSearch}
                  value={props.value}
                  name="search"
                  type="text"
                  className="form-control"
                  placeholder="Search by Name"
                  id="search"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleBanner;
