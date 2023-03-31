import React from "react";

function Photography(){ 
      return (
        <div className="photo">
          <header>
            <nav>
              <ul>
                <li id="nav-title">Welcome to Photography Site</li>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>Login</li> </a>
                <a href="#"><li>Sign up</li></a>
              </ul>
            </nav>
          </header><main>
            <img id="mainImg" src="https://www.premiumwp.com/wp-content/uploads/2017/08/pexels-photo-408518.jpeg" alt="intro image" width="100%" height="500px" />
            <section>
              <img className="container" src="https://th.bing.com/th/id/R.d8860aca1b0254881e0daa0beca20978?rik=kHIMBk92qT529Q&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Xy5A38N4znA%2fUpRWkLfgzfI%2fAAAAAAAATj8%2flVxzNPayl38%2fs1600%2fAmazing%2bphotography%2b(1).jpg&ehk=LnWTKoV2OVllJS6V1NNjHdYJ6eVBGfeXmYIt5Y%2bgOq0%3d&risl=&pid=ImgRaw&r=0" alt="image1" /> 
              <img className="container" src="https://assets.atdw-online.com.au/images/a11021df8ac18bcfc096922562e5b24f.jpeg?rect=222" alt="image1" /> 
              <img className="container" src="https://th.bing.com/th/id/OIP.WLvjx-rD_7383pRcD4s-uAHaHa?pid=ImgDet&w=500&h=500&rs=1" alt="image1" /> 
            </section>
            <section>
              <img className="container" src="https://th.bing.com/th/id/R.68280b0285f288325d4cdab66680a7cc?rik=ixb0lY%2bFIjBDQA&riu=http%3a%2f%2fwww.4kwallpaperhd.com%2fwp-content%2fuploads%2f2018%2f11%2fforest-mountain-river-Nature-Landscape-Desktop-Wallpaper.jpg&ehk=CqLjoo8YT9zPTHBwBZJzYPKMf4UTCLwaCL1uLz02uUU%3d&risl=1&pid=ImgRaw&r=0" alt="image1" /> 
              <img className="container" src="https://th.bing.com/th/id/OIP.Z3iF66QpQVHe8HkLPj-RggHaEo?pid=ImgDet&rs=1" alt="image1" /> 
              <img className="container" src="https://th.bing.com/th/id/OIP.1B8N6Jm-yF-XZ3-X4eqFhAHaE6?pid=ImgDet&w=960&h=637&rs=1" alt="image1" /> 
            </section>
          </main>
          <footer>
            <li id="nav-title">Email:photographer@gmail.com</li>
          </footer>
        </div>
      )
      }
  export default Photography;