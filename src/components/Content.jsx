import React from 'react';
import './content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faReact, faNode, faAngular, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Content() {
  return (
    <div>
      <div className="main">
        <div className="icons">
          <a href="#"><FontAwesomeIcon icon={faUser} /></a>
          <a href="#"><FontAwesomeIcon icon={faFileAlt} /></a>
          <a href="#"><FontAwesomeIcon icon={faCog} /></a>
          <a href="#"><FontAwesomeIcon icon={faSignOutAlt} /></a>
        </div>
        <div className="sidebar">
          <h1>Arjun Krishna.p</h1>
          <p>Developer</p>
          <div className="icons2">
            <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/arjun-krishna-2b1a3730a" target="blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/Arjyt"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
        <div className="main-content">
          <h1 id='about'>About Me</h1>
          <ul>
            <li>14/10/2003</li>
            <li>kasaragod</li>
            <li>male</li>
          </ul>
          <div className="p">
            <h5>
            Passionate and detail-oriented Frontend Developer with a strong foundation in creating visually appealing and
user-friendly web interfaces. Currently interning at Luminar Technolab, where I'm honing my skills in modern web
development technologies. Committed to delivering high-quality,responsive designs that enhance user experience.
            </h5>
          </div>

          {/* Skills Section */}
          <h1 >My Skills</h1>
          <div className="skills-grid"id='skills' >
            <div className="card">
              <FontAwesomeIcon icon={faReact} className="skill-icon" />
              <h2>React</h2>
              <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers.</p>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faNode} className="skill-icon" />
              <h2>Node.js</h2>
              <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing the development of server-side applications.</p>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faAngular} className="skill-icon" />
              <h2>Angular</h2>
              <p>Angular is a platform for building mobile and desktop web applications, using TypeScript and component-based architecture.</p>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faGithub} className="skill-icon" />
              <h2>GitHub</h2>
              <p>GitHub is a web-based version-control and collaboration platform for software developers, using Git for version control.</p>
            </div>
            <div className="card">
              <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" className="skill-icon" />
              <h2>MongoDB</h2>
              <p>MongoDB is a NoSQL database that uses a flexible schema, ideal for applications that manage large, unstructured data sets.</p>
            </div>
            <div className="card">
              <img src="https://img.icons8.com/color/48/000000/express.png" alt="Express" className="skill-icon" />
              <h2>Express</h2>
              <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile apps.</p>
            </div>
          </div>

          {/* Projects Section */}
          <h1 style={{paddingTop:"30px"}}>My Projects</h1>
          <div className="projects-grid" id='projects'>
            <div className="card c2">
              <h2>Travel and Tourisam</h2>
              <p>A responsive travel and tourism website with lot of tourismlocations and other info.</p>
            </div>
            <div className="card c2">
              <h2>E commerce website with only react</h2>
              <p>a e commerce website created only using react js</p>
            </div>
            <div className="card c2">
              <h2>Spotify clone</h2>
              <p>Created spotify clone.</p>
            </div>
            <div className="card c2">
              <h2>media player</h2>
              <p>created a fully functional media player website using json server.</p>
            </div>
            <div className="card c2">
              <h2>A biggy bank</h2>
              <p>created a piggy bank model using local storage.</p>
            </div>
            <div className="card c2">
              <h2>budget,discount,and bmi calculator</h2>
              <p>created budget,discount,and bmi calculator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
