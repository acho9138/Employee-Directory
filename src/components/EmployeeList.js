import React, { useContext } from 'react';
import { data } from './Data';
import CaretButton from './CaretButton';

function EmployeeList() {
  // const [employee, setEmployee] = useContext(EmployeeContext);

  return (
    <div className="container table-responsive-lg" style={{ textAlign: 'center' }}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name <CaretButton onClick={() => { }} /> </th>
            <th scope="col">Phone <CaretButton onClick={() => { }} /> </th>
            <th scope="col">Email <CaretButton onClick={() => { }} /> </th>
            <th scope="col">DOB <CaretButton onClick={() => { }} /> </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index + item.name}>
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