import React, { Component } from 'react'
import X from './1.jpg'
import Y from './2.jpg'
import Z from './3.jpg'
import A from './4.jpg'
import Cards2 from './Cards2'


import ParticlesBg from 'particles-bg'

class Cards extends Component {
    render() {
        return(
            <div className='container' >
                <br/>
                <br/>
                
                <div className='row'>
                {/* <ParticlesBg type="circle"  num={200} bg={true} /> */}
                

               
                    <div className='col s12 m5' style={{marginLeft:'80px'}} >
                        <div className='card' >
                            <div className='card-image' >
                                <img src={X} alt='hello'  />
                                <button className='halfway-fab btn-floating pink pulse' >
                                    <i className='material-icons' >favorite</i>
                                </button>
                                
                            </div>
                            <div className='card-content' >
                                <span className='card-title' >
                                    ASSASSINS'S CREED ORIGINS
                                </span>
                                <p>This game takes place</p>
                            </div>
                            <div className='card-action' >
                                <a href='' >MORE DETAILS</a>
                            </div>
                        </div>
                        
                    </div>

                    <div className='col s12 m5'>
                        <div className='card' >
                            <div className='card-image' >
                                <img src = {A} alt='heool' />
                                <button className='halfway-fab btn-floating pulse yellow darken-1' >
                                    <i className='material-icons' >flash_on</i>
                                </button>
                            </div>
                            <div className='card-content' >
                                <span className='card-title' >
                                    UBISOFT GAMES MONTREAL
                                </span>
                                <p>Ubisoft is a Canadian gaming company</p>
                            </div>
                            <div className='card-action' >
                                <a href='' >MORE DETAILS</a>
                            </div>
                        </div>
                    </div>
                </div>

                <Cards2/>
            </div>
        )
    }
}

export default Cards