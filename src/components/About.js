import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';


const images = {
  css: `${process.env.PUBLIC_URL}/css.jpg`,
  js: `${process.env.PUBLIC_URL}/js.jpg`,
  html: `${process.env.PUBLIC_URL}/html.jpg`,
};

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <ul className="nav__links">
          <li className="1"><button className="about_button" onClick={() => navigate('/')}>HOME</button></li>
          <li className="1"><button  className="about_button" onClick={() => navigate('/portfolio')} type="button">ABOUT US</button></li>
        </ul>
      </nav>
      <div id="portfolio">
        <div className="main-text" id="project">
          <h2>Language <span>Tool</span></h2>
          <div className="portfolio-content">
            {['css', 'js', 'html'].map((lang) => (
              <div className="row" key={lang}>
                <img src={images[lang]} alt={lang.toUpperCase()} />
                <div className="layer">
                  <h5>What is {lang.toUpperCase()}?</h5>
                  <p>
                    {lang === 'css' ? 'CSS CSS stands for Cascading Style Sheets. It is used to control the presentation and layout of HTML elements on a web page. While HTML structures the content, CSS enhances it by applying styles such as colors, fonts, spacing, and positioning.' :
                     lang === 'js' ? 'JavaScript (JS) is a programming language used to create interactive and dynamic elements on web pages. It enables developers to implement features like form validation, animations, and real-time content updates.' :
                     'HTML HTML stands for HyperText Markup Language. It is the standard language used to create and structure content on the web. HTML uses a system of tags and elements to define the structure of web pages, including text, images, links, and other multimedia.'}
                  </p>
                  <button className="layer-button" onClick={() => navigate('/')} type="button">
                    <i className='bx bx-link-external' style={{ color: '#151515' }}></i> Back to Home
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
