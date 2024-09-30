import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faBehance, faReact, faNode, faAngular, faGithub } from '@fortawesome/free-brands-svg-icons'; 
function Footer() {
  return (
<footer class="footer">
  <div class="footer-content">
    <p>&copy; 2024 Your Name. All rights reserved.</p>
    <div class="social-icons">
    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faBehance} /></a>
    </div>
  </div>
</footer>

  )
}

export default Footer