import React, { Component } from 'react'
import X from './images (2).jpeg'
// import Y from './coreui-icons-master/svg/brand/UBISOFT'


class Store extends Component {
    render() {
        return(
            <div>
                <div className='container' >
                    <h4>UBISOFT STORE</h4>
                

                    <div className='col' >
                        
                        <img src={X} alt='Hello' style={{height:'300px', width:'400px'}} />
                        
                        
                        <div className='row' >
                        <div className='col s2 blue' >
                        Hello                        
                    
                        </div>
                        
                        <div className='col s2 yellow' >Hello</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Store