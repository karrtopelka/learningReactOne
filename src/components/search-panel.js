import React from 'react';

const SearchPanel = () => {
    const searchText = "Type your todo";
    const searchStyle = {
        color: 'red',
        fontSize: '16px',

    };
    return <input type="text" placeholder={searchText} className="foo" style={searchStyle} />
};

export default SearchPanel;