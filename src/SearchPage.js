import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

function SearchPage() {
    return (
        <>
            <NavigationBar />
            <div>
                <h1>Search Page</h1>
                <Link to="/"><button>Go Back Home</button></Link>
            </div>
        </>
    )
}

export default SearchPage;