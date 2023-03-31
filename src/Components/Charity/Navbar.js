import React from "react";

function Navbar(){
    return(
        <div className="navbar">
            <header>
                <nav>
                    <ul>
                     <li> <h1>Charity</h1></li>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Login</li></a>
                    <a href="#"><li>Sign up</li></a>
                    <a href="#"><li>Donate</li></a>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;