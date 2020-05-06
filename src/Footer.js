import React from 'react'
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';


class Footer extends Component{
    render() {
        return(
            <div>                

            <footer class="page-footer white">
            
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="black-text" style={{fontSize:'40px'}} >Discover</h5>
                <p class="black-text text-lighten-4" style={{cursor:'pointer', fontSize:'18px'}} >Careers</p>
                <p class="black-text text-lighten-4" style={{cursor:'pointer', fontSize:'18px'}} >About Us</p>
                <p class="black-text text-lighten-4" style={{cursor:'pointer', fontSize:'18px'}} >Discover UPlay</p>
              </div>

              {/* <div class='col 16 s12' >
                <h1 style={{color:'black'}} >Hello</h1>
              </div> */}

              <div class="col l4 offset-l2 s12">
                <h5 class="black-text" style={{fontSize:'40px'}} >Contact Us</h5>
                <ul>
                  <li><a class="black-text text-lighten-3" href="#!">
                    <FaFacebook style={{ marginTop:'10px', color:'cyan', marginLeft:'30px',cursor:'pointer' }}  size={40} />
                    </a></li>
                  <li><a class="black-text text-lighten-3" href="#!">
                    <FaTwitter style={{ marginTop:'10px', color:'cyan', marginLeft:'30px', cursor:'pointer'}} size={40} />
                    </a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">
                    <FaWhatsapp style={{ marginTop:'10px', color:'cyan', marginLeft:'30px',cursor:'pointer'}} size={40} />
                    </a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    
        </div>
        
        )
    }
}

export default Footer