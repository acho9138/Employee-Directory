import React from 'react';
import { data } from './Data'

const styles = {
  textAlign: 'center'
}

function EmployeeList() {
  return (
    <div className="container table-responsive-lg" style={styles}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, i) => {
              return (
                <tr key={i + item.name}>
                  <th scope="row">{item.name}</th>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.dob}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeList;