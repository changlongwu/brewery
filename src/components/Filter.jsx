import { useState,useEffect } from 'react'


const Filter = ({breweriesData})=>{
    const searchItems = (searchInput) =>{
        if(searchInput!==""){
            const filteredData = breweriesData.filter((brewery)=>
                brewery.name.toLowerCase().includes(searchInput.toLowerCase()))

            setFilteredResults(filteredData)
            console.log(filteredData)
        }
    }



    // i need a state to store userinput
    const [searchInput, setSearchInput] = useState("");
    // i need a state to store filtered results
    const [filteredResults, setFilteredResults] = useState(null);

    return (
        <div className='Filter'>
            <input 
            type="text" 
            placeholder='enter brewery name'
            onChange={(input)=>setSearchInput(input.target.value)}
            />

            <button onClick={()=>{searchItems(searchInput)}}>submit</button>
        </div>
    )
}

export default Filter;