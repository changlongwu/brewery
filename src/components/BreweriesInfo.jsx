import { useState,useEffect } from 'react'

const BreweriesInfo = ({breweriesData}) => {
    return (
        <div className='BreweriesInfo'>
               <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>State</th>
                    </tr>
                  </thead>
                  <tbody>
                    {breweriesData && breweriesData.map((brewery) => (
                      <tr key={brewery.name}>
                        <td>{brewery.name}</td>
                        <td>{brewery.address_1}</td>
                        <td>{brewery.city}</td>
                        <td>{brewery.state_province}</td>
                      </tr>
                    ))}
                  </tbody>
                </table> 

        </div>
    )
}


export default BreweriesInfo;
