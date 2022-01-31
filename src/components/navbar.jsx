import React, { Component } from 'react';

// stateless function component     simple writing code that return rather then rendering
const Navbar = ({totalCounters}) => {
    return (
    <nav className="navbar navbar-light bg-light">
    <a className = "navbar-brand" href="#">
        Navbar{" "}
     <span className="badge badge-pill badge-secondary">
         { totalCounters}
         </span>
    </a>
</nav>
);
};
 
export default Navbar;