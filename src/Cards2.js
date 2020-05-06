import React, { Component } from 'react'
import X from './download.jpeg'
import Y from './download (1).jpeg'
import Z from './download (2).jpeg'
import Footer from './Footer'


class Cards2 extends Component {
    render() {
        return(
            <div className='container' >
                <div className='row' >
                    <div className='col s12 m5 ' >
                      <div className='card' >
                          <div className='card-image' >
                              <img src={X} alt='Hello' />
                              <button className='halfway-fab btn-floating blue darken-2 pulse' >
                                  <i className='material-icons' >near_me</i>
                              </button>
                             </div>
                             <div className='card-content' >
                                  <div className='card-title' >
                                      TOM CLANCY'S THE DIVISON
                                  </div>
                                  <p>This game is an action, adventure smdosd sds sdsd sdfs sdsdsd sdsffs sfdfsf </p>
                                  <div className='card-action' >
                                <a href='' >MORE DETAILS</a>
                            </div>
                          </div>
                      </div>

                    </div>

                    <div className='col s12 m5' >
                      <div className='card' >
                          <div className='card-image' >
                              <img src={Y} alt='Hello'  />
                              <button className='halfway-fab btn-floating green pulse' >
                                  <i className='material-icons' >toys</i>
                              </button>
                          </div>
                          <div className='card-content' >
                              <p>RAINBOW SIX SEIGE</p>
                            
                          </div>
                      </div>

                    </div>
                    
                    <div className='col s12 m5' >
                      <div className='card' >
                          <div className='card-image'  >
                              <img src={Z} alt='Hello'  />
                              <button className='halfway-fab btn-floating teal darken-1 pulse' >
                                  <i className='material-icons' >videogame_asset</i>
                              </button>
                          </div>
                          <div className='card-content' >ASSASSINS'S CREEED VALHALA</div>
                      </div>

                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Cards2