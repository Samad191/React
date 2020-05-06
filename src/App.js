import React, {Component} from 'react';
import './App.css';
import Cards from './Cards'
// import Person from './Person/Person' ;
import Nav from './Nav'
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import Store from './Store'



import ParticlesBg from 'particles-bg'



class App extends Component {
    

    render() {
        return (
           
            // <div className='lime accent-2 '   > 
            <div className='lime accent-2' >
               <div className='conatiner' >
                   <Nav/>
                   {/* <Store/> */}
                   <Cards/>
                   <Footer/>
                   
                  
            

               </div>
            
            </div>

       
                     
            
        );
    }
}

export default App