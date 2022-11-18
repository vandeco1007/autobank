import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './components/sideBar'
import './style/style.css'
import './style/bill.css'
import Header from './components/header';
import MainContent from './components/mainContent';
import reportWebVitals from './reportWebVitals';
import Aeapi from './api/aeapi';
import authorize from './middlewares/bo.authorize';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='web-container'>
    <div className='toggle-btn'>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19.5" fill="white" stroke="#DADADA"/>
      <path d="M22.06 13L15 20.061L22.06 27.122L24.182 25L19.242 20.061L24.182 15.122L22.06 13Z" fill="#445BFF"/>
      </svg>
    </div>
    <Sidebar />
    <MainContent />
    {/* <Footer /> */}
    <div className='otp-area'>
      <div className='otp-container'>

      </div>
      <div className='notifier'>
        <h2 className='notification'>Có Vấn đề trong quá trình xuất khoản, Vui lòng kiểm tra lại số dư ngân hàng trước khi xuất lại đơn</h2>
        <button className='notify-send'>Xác Nhận</button>
      </div>
    </div>
  </div>
);

reportWebVitals();
