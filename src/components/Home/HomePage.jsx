import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
        Home page
        <br/>
        <Link to="about">Learn More</Link>
    </div>  
);
export default HomePage;