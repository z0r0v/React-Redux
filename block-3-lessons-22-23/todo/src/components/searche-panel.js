import React from "react";

const SearchPanel = () => {

    const searcheStyle = {
        fontSize: '20px'
    };

    const searchText = 'Type here to search';
    return <input style={searcheStyle} placeholder={searchText}/>
};

export default SearchPanel;