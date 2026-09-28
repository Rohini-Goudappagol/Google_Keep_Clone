import { useState } from 'react'
import '../../styles/searchBar.css'

const SearchBar = () =>{
    const [search, setSearch] = useState('');
    const handleInputOnChange = (e) =>{
        setSearch(e.target.value)
    }
    const handleReset =()=>{
        setSearch('')
    }
    return(
        <div className='searchBarParentContainer'>
            <div className="searchBarIconContainer">
        <i class="fa-solid fa-magnifying-glass "></i>
      </div>

      <input
        type="text"
        placeholder="search"
        className="searchBarInputContainer"
        value={search}
        onChange={handleInputOnChange}
      />
    {search?.length?<div className="searchBarIconContainer" onClick={handleReset} >
        <i class="fa-solid fa-x" ></i>
      </div>:""}

        </div>
    )
}

export default SearchBar