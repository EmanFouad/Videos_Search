import React, { useState } from 'react';

const SearchBar = ({onSearchSubmit}) => {
    const [term , setTerm] = useState('');

   const handleFormSubmit = (e) =>{
        e.preventDefault();
        onSearchSubmit(term);
    }
   const handleInputChange = (e) =>{
        setTerm(e.target.value)
    }
    return (
        <div className="ui segment" style={{marginTop:"35px"}}>
                <form onSubmit={handleFormSubmit}  className="ui form">
                    <div className="field">
                    <label>Search Videos</label>
                    <input type="text" 
                            value={term}
                            onChange={handleInputChange} />
                    </div>  
                </form>
        </div>
    );
}
 
export default SearchBar;
