import React from "react";
import { Link } from "react-router-dom";

function SearchPage() {
    return (
        <div>
            <h1>Search Page</h1>
            <Link to="/"><button>Go Back Home</button></Link>
        </div>
    )
}

export default SearchPage;