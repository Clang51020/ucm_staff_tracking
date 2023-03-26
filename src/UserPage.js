import React from "react";
import { Link } from 'react-router-dom';
import User from "./image-components/User";
import NavigationBar from "./NavigationBar";

export default function UserPage() {
    return (
        <>
            <NavigationBar />
            <div>
                <h1>Hello, User Page</h1>
                <Link to="/"><button>Go Back</button></Link>
                <User />
            </div>
        </>
    )
}