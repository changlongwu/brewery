import { useState,useEffect } from 'react'
import './App.css'

// import components
import BreweriesInfo from './components/BreweriesInfo';
import Filter from './components/Filter';
import SideBar from './components/SideBar';

function App() {
  const [breweriesData, setBreweriesData] = useState(null);

  // i need a state to store userinput
  const [searchInput, setSearchInput] = useState("");
  // i need a state to store filtered results
  const [filteredResults, setFilteredResults] = useState(null);

  const searchItems = (searchInput) =>{
    if(searchInput!==""){
        const filteredData = breweriesData.filter((brewery)=>
            brewery.name.toLowerCase().includes(searchInput.toLowerCase()))

        setFilteredResults(filteredData)
        console.log(filteredData)
    }
}

  useEffect(()=>{
    const fetchBreweriesData = async () => {
      const response = await fetch(' https://api.openbrewerydb.org/v1/breweries?per_page=9');
      const Data = await response.json();
      setBreweriesData(Data);
      console.log(Data);
    }

    fetchBreweriesData().catch(console.error)

  },[])


  return (
    <div className='whole-page'>
      <SideBar/>

      {/* <Filter
      breweriesData ={breweriesData}
      /> */}

      <div className='Filter'>
        <input 
        type="text" 
        placeholder='enter brewery name'
        onChange={(input)=>setSearchInput(input.target.value)}
        />
        <button onClick={()=>{searchItems(searchInput)}}>submit</button>
      </div>

        

      {/* <BreweriesInfo
      breweriesData ={breweriesData}
      /> */}

        <div className='BreweriesInfo'>
               <table>
                  <thead>
                    <tr>
                      <th className='Card'>Name</th>
                      <th className='Card'>Address</th>
                      <th className='Card'>City</th>
                      <th className='Card'>State</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      searchInput.length>0?
                      
                      filteredResults &&  filteredResults.map((brewery) => (
                          <tr key={brewery.name}>
                            <td>{brewery.name}</td>
                            <td>{brewery.address_1}</td>
                            <td>{brewery.city}</td>
                            <td>{brewery.state_province}</td>
                          </tr>))
                      
                      :
                      breweriesData && breweriesData.map((brewery) => (
                        <tr key={brewery.name}>
                          <td>{brewery.name}</td>
                          <td>{brewery.address_1}</td>
                          <td>{brewery.city}</td>
                          <td>{brewery.state_province}</td>
                        </tr>
                      ))
                    }
                    
                    
                  </tbody>
                </table> 

        </div>
    </div>

  )
}

export default App
