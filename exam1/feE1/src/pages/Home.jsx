import React, { useEffect, useState } from "react";
import "./home.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
const [menu, setMenu] = useState([])
    useEffect(() => {
        getAllMenu()
    }, [])
    async function getAllMenu(){
        const res=await fetch("http://localhost:3000/ourmenu")
        const data=await res.json()
        setMenu(data)
    }
    
  return (
    <div className="homeContainer">
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
      </HelmetProvider>

      {/* hero section */}
      <section className="heroSection">
        <div className="heroBox">
          <h1 className="heroHeading">
            Food and more <strong className="point">.</strong>
          </h1>
          <p className="heroText"> By Chef Francis Smith</p>
        </div>
      </section>

      {/* welcome section */}

      <section className="welcome">
        <div className="welcomeHeader">
          
        <i id="bigIcon" className="fa-solid fa-mug-hot"></i>
          <div className="welcomeHeading">
            <div className="passWelcome"></div>
            <h5 className="welcomeHeading1">Welcome</h5>
            <div className="passWelcome"></div>
          </div>
        </div>
        <div className="welcomeBoxes">
          <div className="welcomeBox">
            <h4 className="welcomeYear">2002</h4>
            <p className="welcomeText">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
            </p>
          </div>
          <div className="welcomeBox">
            <h4 className="welcomeYear">2010</h4>
            <p className="welcomeText">
              Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id
              lobortis leo volutpat. Maecenas sollicitudin est in libero
              pretium.
            </p>
          </div>
          <div className="welcomeBox">
            <h4 className="welcomeYear">2018</h4>
            <p className="welcomeText">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
            </p>
          </div>
        </div>
      </section>

      {/* test section */}

      <section className="testSection">
        <div className="testHeader">
        <i id="bigIcon" class="fa-solid fa-ice-cream"></i>
          <div className="testDif">
            <div className="testPass"></div>
            <h1 className="testHeading">Testimonials</h1>
            <div className="testPass"></div>
          </div>
          <div className="testTexts">
            <p className="testText">
              Integer sed facilisis eros. In iaculis rhoncus velit in malesuada.
              In hac habitasse platea dictumst. Fusce erat ex, consectetur sit
              amet ornare suscipit, porta et erat. Donec nec nisi in nibh
              commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce
              ultricies ante tortor, non vestibulum est feu-giat ut.{" "}
            </p>
            <p className="testEnd">
              <span className="testTed">Ted Chapman</span>
              ,Client
            </p>
          </div>
        </div>
      </section>

      {/* services section */}
      <section className="welcome">
      <div className="welcomeHeader">
      <i id="bigIcon" class="fa-solid fa-burger"></i>
          <div></div>
          <div className="welcomeHeading">
            <div className="passWelcome"></div>
            <h5 className="welcomeHeading1">Our Services</h5>
            <div className="passWelcome"></div>
          </div>
        </div>
        <div className="welcomeBoxes">
          <div className="welcomeBox">
          <i id="icon" className="fa-solid fa-mug-saucer"></i>
            <h4 className="welcomeYear">Breakfast</h4>
            <p className="welcomeText">
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.
            </p>
          </div>
          <div className="welcomeBox">
          <i id="icon" className="fa-solid fa-burger"></i>
            <h4 className="welcomeYear">Brunch</h4>
            <p className="welcomeText">
            Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis.
            </p>
          </div>
          <div className="welcomeBox">
          <i id="icon" className="fa-solid fa-bowl-food"></i>
            <h4 className="welcomeYear">Lunch</h4>
            <p className="welcomeText">
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.
            </p>
          </div>
          <div className="welcomeBox">
          <i id="icon" className="fa-solid fa-utensils"></i>
            <h4 className="welcomeYear">Dinner</h4>
            <p className="welcomeText">
            Aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendreri.
            </p>
          </div>
        </div>
      </section>

      {/* menu section */}
      <section className="menuSection">
        <div className="menuHero"> 
      <i id="bigIcon" class="fa-solid fa-burger"></i>
<div className="menuHeader">
    <div className="menuPass"></div>
    <h1 className="menuHeading">Our Menu</h1>
    <div className="menuPass"></div>
</div>
</div>
<div className="menuMiddle"><p className="menuGold">Breakfast</p>
<p>Brunch</p>
<p>Lunch</p>
<p>Dinner</p>
</div>
<div className="menuFooter">
    <div className="menu">
        {menu.map((x)=>(
        <div className="menuBox" key={x._id}>
        <h3>{x.name}</h3>
        <strong className="footerText">{x.description}...........................................................</strong><strong>${x.price}</strong>
        </div> 
        ))}
      
    </div>
</div>
      </section>
    </div>
  );
}

export default Home;
