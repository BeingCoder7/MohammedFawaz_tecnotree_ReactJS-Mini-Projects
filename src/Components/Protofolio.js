import React from "react";

function Protofolio(){





    return(
        <div className="protofolio">
    <header>
        <nav>
           
            <ul>
                <li id="nav-title">Mohammed Fawaz</li>
            </ul>
        </nav>
    </header><main>
    <section id="card1">
      <div class="card">
            <p>About Me</p>
            <ul class="aboutme">
                <li>Mohammed Fawaz</li>
                <li>Final Year</li>
                <li>Bachelor of Engineering</li>
                <li>Computer Science</li>
                <li>Hobbies</li>
                <ul>
                    <li>Watching Movies</li>
                    <li>Coding</li>
                    <li>Traveling</li>
                </ul>
            </ul>
      </div>
         
    
    </section>
    <section id="card2">
        <div class="card">
            <p>Project Done</p>
            <ul class="aboutme">
                <li>Cargo Management System</li>
                <li>Eifle Tower Using Computer Graphics</li>
            </ul>
      </div>
         
    
    
    </section>
    
    <section id="card3">
        <div class="card">
            <p>Skills</p>
            <ul class="aboutme">
                <li>C</li>
                <li>Java</li>
                <li>Python</li>
                <li>NodeJS</li>
                <li>Mysql</li>
            </ul>
      </div>
    
    </section>
    <center>
     <label>Upload Resume:</label>
     <input type="file"/>
    </center>
    </main>
    <footer>
        <li id="nav-title">Email:mail@gmail.com</li>
    </footer>
    </div>
    )

}

export default Protofolio;