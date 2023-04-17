import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Clock from "./image-components/Clock";
import HomeIcon from "./image-components/HomeIcon";
import NavigationBar from "./NavigationBar";

export default function HomePage() {

    const [authenticated, setAuthentication] = useState(false);
    const authenticateUser = () => {
        if (authenticated === true) {
            setAuthentication(false);
        } else {
            setAuthentication(true);
        }
    }
    const [date, setDate] = useState(new Date());
    const formattedDate = date.getMonth()+1 + '/' + date.getDate() + '/' + date.getFullYear();
    const formattedTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    
    return (
        <>
            <NavigationBar />
        <div>
            <h1>Home Page</h1>
            <Link to="/user"><button>Go to User Page</button></Link>
            <button onClick={authenticateUser}>{authenticated ? "Log out" : "Log In"}</button>
            {authenticated && <Link to="/search"><button>Go to Search page</button></Link>}
            <Link to="/user" ClassName="ClockLink"><Clock /></Link>
            <HomeIcon />
            <h1>{formattedDate}</h1>
            <h1>{formattedTime}</h1>
            <h1>Date Should Be Above This</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
        </div>
        </>
    )
}