import React from 'react';

function Search() {
    return (
        <div className="p-4">
            <input
                className="w-full p-3 focus:outline-none rounded-lg bg-slate-100"
                type="text"
                placeholder="Search"
            />
        </div>
    );
}
export default Search;
