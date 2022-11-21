import React, {Component} from 'react';
import vietincolor from '../asset/media/images/vietincolor.png'

class Header extends Component {
  render(){
    return (
      <div className='header'>
        
        <div className='main_nav'>
          <div className='bank-logo'>
            <img src={vietincolor}></img>
          </div> 
          <div className='side-header balance'>
            <h2><span id='balance'>0</span><span id='currency'> VND</span></h2>  
          </div>      
          <div className='side-header side-header-left'>
            <button id='logout' title="Đăng xuất"></button>
          </div>
        </div>
        <div className='slide-color'></div>
      </div>
    )
  }
}

export default Header;
