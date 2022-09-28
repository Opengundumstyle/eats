import React  from 'react'
import Navbar from '../nav/navbar_container'
import Slider from './slider'
class Splash extends React.Component{

      constructor(props){
           super(props)
      }
   render(){
     return(
        <div className='splash-page-div'>
          <div><Navbar/></div>
          <div><Slider/></div>
        </div>
          
     )
   }
      
}

export default Splash