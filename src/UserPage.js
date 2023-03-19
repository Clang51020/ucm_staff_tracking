import React from "react";
import { Link } from 'react-router-dom';

export default function UserPage() {
    return (
        <div>
            <h1>Hello, User Page</h1>
            <Link to="/"><button>Go Back</button></Link>
        </div>
    )
}