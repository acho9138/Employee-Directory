import React, { useEffect, useState } from 'react';
import { data } from '../utils/Data';
import CaretButton from './CaretButton';

const EmployeeList = ({ searchTerm }) => {
  const [employees, setEmployees] = useState([...data]);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    const filterEmployees = [...data].filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
    });
    setEmployees(filterEmployees)
  }, [searchTerm])

  const sortEmployees = (category) => {
    let sortedEmployees
    if (category !== currentCategory) {
      sortedEmployees = [...employees].sort((ele1, ele2) => {
        const val1 = ele1[category]
        const val2 = ele2[category]
        if (val1 < val2) return -1;
        if (val2 > val1) return 1;
        return 0;
      });
    } else {
      sortedEmployees = [...employees].reverse()
    }
    setEmployees(sortedEmployees)
    setCurrentCategory(category)
  }

  return (
    <div className="container table-responsive-lg" style={{ textAlign: 'center' }}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name <CaretButton onClick={() => { sortEmployees("name") }} /></th>
            <th scope="col">Phone <CaretButton onClick={() => { sortEmployees("phone") }} /></th>
            <th scope="col">Email <CaretButton onClick={() => { sortEmployees("email") }} /></th>
            <th scope="col">DOB <CaretButton onClick={() => { sortEmployees("dob") }} /></th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map((item, index) => {
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