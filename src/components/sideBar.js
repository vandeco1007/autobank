import React from 'react'
import vcbLogo from '../asset/media/images/brands/logo/vcb.webp'
import bidvLogo from '../asset/media/images/brands/logo/bidv.png'
import viettinLogo from '../asset/media/images/brands/logo/viettin.png'
import waitForElm from '../middlewares/waitForElm'
import bankLogin from '../api/bankLogin'
import logoautobanking from '../asset/media/images/logoautobanking.png'
import personicon from '../asset/media/images/user/person.svg'
import iconchuyenkhoan from '../asset/media/images/icons/iconchuyenkhoan.svg'
import iconthongke from '../asset/media/images/icons/iconthongke.svg'
import systemSetup from '../controllers/systemInfo.controller'
import { useEffect, useState } from 'react'

const Sidebar = ()=>{
  const [user, setUser] = useState(0)
  const [device, setDevice] = useState(0)
  const [bankName, setbankName] = useState(0)
  const [bankPin, setBankPin] = useState(0)
  setTimeout(function(){
    setUser(localStorage.getItem('bouser'))
    setDevice(localStorage.getItem('deviceName'))
    setbankName(localStorage.getItem('bankName'))
    if(!localStorage.getItem('bankPin')){
      localStorage.setItem('bankAccount','Vui lòng điền Số thẻ')
      localStorage.setItem('bankPin','Vui tạo mã Pin')
    }else{
      setBankPin(localStorage.getItem('bankPin'))
      document.getElementById('bankAcc').value=localStorage.getItem('bankAccount')
      document.getElementById('pin').value=localStorage.getItem('bankPin')
    }
    if(!localStorage.getItem('transaction-limit')){
      localStorage.setItem('transaction-limit',500)
    }else{
      document.getElementById('transaction-limit').value=localStorage.getItem('transaction-limit')
    }
  },100)  
    return (
      <div className='sidebar'>
        <div className='logo-autobanking'>
          <img src={logoautobanking}></img>
        </div>
        <div className='bankLogin'>
          <div className='bankInfo'>      
            <div className='bank-user'>
              <img src={personicon}></img>
            </div>
            <div className='bankAccount'>
              <h2>Xin chào {user}</h2>
              <div className='bankAccount-content'>
                <h3 className='loginContent'>{device}</h3>
                <input type={"text"} className='loginContent' id='bankName'></input>
                <input type={"text"} id='bankAcc'></input>
                <input type={"text"} id='pin'></input>
                <div className='limit'><label>Giới hạn đơn: </label><input type={"text"} id='transaction-limit'></input></div>
              </div>
            </div>
          </div>          
        </div>
        <div className='bank-title'>Ngân hàng</div>
     
        <div className='bank'>
          <div className='bank-hover'>
            <div className='vietinwhite'></div>
          </div>
          <div className='appendContent'>
            <a href='/' target="_blank">
              <div className='icon-append-container'>
                <img src={iconchuyenkhoan}></img>
              </div>
              Chuyển khoản
            </a>
            <a href='/billing' target="_blank">
              <div className='icon-append-container'>
                <img src={iconthongke}></img>
              </div>
              Thống kê
            </a>
          </div>
        </div>

        <div className='bank'>
          <div className='bank-hover'>
            <div className='bidvwhite'></div>
          </div>
          <div className='appendContent'>
            <a href='https://autobanking789.web.app' target="_blank">
              <div className='icon-append-container'>
                <img src={iconchuyenkhoan}></img>
              </div>
              Chuyển khoản
            </a>
            <a href='https://autobanking789.web.app/billing' target="_blank">
              <div className='icon-append-container'>
                <img src={iconthongke}></img>
              </div>
              Thống kê
            </a>
          </div>
        </div>

        <div className='bank'>
          <div className='bank-hover'>
            <a className='vcbwhite'></a>
          </div>
          <div className='appendContent'>
            <a href='/' target="_blank">
              <div className='icon-append-container'>
                <img src={iconchuyenkhoan}></img>
              </div>
              Chuyển khoản
            </a>
            <a href='/' target="_blank">
              <div className='icon-append-container'>
                <img src={iconthongke}></img>
              </div>
              Thống kê
            </a>
          </div>
        </div>

        <div className='app-ver'>
          <p>BETA 1.0.0</p>
          <i>JUN88 AutoBanking, Reserved</i>
        </div>
      </div>
    )
}

waitForElm('.bankAccount').then(()=>{
  systemSetup()
})

waitForElm('.sidebar').then(()=>{
  if(!localStorage.getItem('sideCollapse')){
    localStorage.setItem('sideCollapse',"true")
  }
  if(localStorage.getItem('sideCollapse')=="true"){
    document.getElementsByClassName('sidebar')[0].style.width='15%'
    document.getElementsByClassName('header')[0].style.width='88%'
    document.getElementsByClassName('toggle-btn')[0].style.transform='translate(0%) rotate(0)'

  }else{
    document.getElementsByClassName('sidebar')[0].style.width='0%'
    document.getElementsByClassName('header')[0].style.width='100%'
    document.getElementsByClassName('toggle-btn')[0].style.transform='translate(50%) rotate(180deg)'
  }
  document.getElementsByClassName('toggle-btn')[0].addEventListener('click',function(){
    if(localStorage.getItem('sideCollapse')=="true"){
      document.getElementsByClassName('sidebar')[0].style.width='0%'
      document.getElementsByClassName('header')[0].style.width='100%'
      document.getElementsByClassName('toggle-btn')[0].style.transform='translate(50%) rotate(180deg)'

      localStorage.setItem('sideCollapse','false')
    }else{
      document.getElementsByClassName('sidebar')[0].style.width='15%'
      document.getElementsByClassName('header')[0].style.width='88%'
      document.getElementsByClassName('toggle-btn')[0].style.transform='translate(0%) rotate(0)'
      localStorage.setItem('sideCollapse','true')
    }
  })
})

export default Sidebar;
