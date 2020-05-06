import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Component } from 'react'
import Nav2 from './Nav2'

class Nav extends Component {

    handleClick = () => {
        console.log('Hello')
        
    }
    
    render() {
        
        return(
            <BrowserRouter>
            <nav className='nav-wraper indigo' >
               <div className='conatiner' >
                   <a style={{fontSize:'30px', marginLeft:'100px', color:'white'}} >UBISOFT</a>

                   <ul className='right' >
                        <li style={{marginRight:'50px', color:'white'}} >Home</li>
                        <li><Link className='btn-floating green darken-4 z-depth-0' style={{marginRight:'300px'}}> 
                <i className='material-icons' style={{backgroundColor:'black'}}  >notifications</i>
                 </Link></li>
                 <li><span className='badge white-text pink new' style={{position:'relative', top:'22px', right:'300px'}} >5</span></li>
                 
                 <li className='material-icons ' style={{marginTop:'20px', marginRight:'50px', cursor:'pointer'}} onClick={this.handleClick}  >search</li>
                   
                   <li> <span className='btn black' style={{borderRadius:'10px', marginRight:'15px'}} >UBISOFT Cloud
                        <i className='material-icons right ' style={{position:'relative', bottom:'10px'}}  >
                            cloud
                            </i>
                        </span>
                    </li>
                   </ul>
               </div>
            </nav>
            
            </BrowserRouter>

        )
    }
}

export default Nav