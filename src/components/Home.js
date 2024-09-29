import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <ul className="nav__links">
          <li className="link"><button onClick={() => navigate('/')}>HOME</button></li>
          <li className="link"><button onClick={() => navigate('/portfolio')} type="button">ABOUT US</button></li>
        </ul>
      </nav>

      <div className="container">
        <div className="container__left">
          <div className="left__content">
            <h4>Web Development</h4>
            <p>
            Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.

Web development is closely related to the job of designing the features and functionality of apps (web design). The term development is usually reserved for the actual construction of these things (that is to say, the programming of sites).
            </p>
          </div>
        </div>
        <div className="container__right">
          <img src={`${process.env.PUBLIC_URL}/me.png`} alt="Portrait of Christian Genovana" />
          <div className="right__content">
            <h1>Christian</h1>
            <h4>Genovana</h4>
            <p>
              My name is Christian Genovana from BSIT - 3B. For more information about Web Development, please explore my website.
            </p>
            <div className="action__btns">
              <button className="btn primary__btn">Explore</button>
              <button className="btn secondary__btn">See More</button>
            </div>
            <div className="socials">
              <span><i className="ri-tiktok-line"></i></span>
              <span><i className="ri-youtube-fill"></i></span>
              <span><i className="ri-facebook-fill"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
