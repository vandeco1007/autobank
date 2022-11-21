import React, {Component} from 'react';
import billControler from '../controllers/billController';
import BidvBill from './billbank/bidv';
import VietinBill from './billbank/vietin';
import VcbBill from './billbank/vcb';
import HistorySearch from './history.formField';
import iconhoadon from '../asset/media/images/icons/iconhoadon.svg'
import icontongdon from '../asset/media/images/icons/icontongdon.svg'
import icontongxuat from '../asset/media/images/icons/icontongxuat.svg'
import icontiendo from '../asset/media/images/icons/icontiendo.svg'
import billPrinting from '../controllers/billPrint';
import waitForElm from '../middlewares/waitForElm';

class Billing extends Component{
  render(){
    return (
      <div className='billing content'>
        <div className='breadCrum'><a href='#'>Trang chủ</a> - <a href='#'>Vietin</a> - <a href='#'>Thống kê</a></div>
        <div className='transition-container'>
          <div className='transition-wrapper'>
          <div className='table-header'>
            <div className='table-title'>
              <img src={iconhoadon}></img>
              <p>Thống kê chuyển khoản</p>
            </div>
            <div className='table-statistics-container'> {/* Thống kê tổng đơn tổng xuất */}
              <div className='table-statistics'>
                <div className='title-statistics'>
                  <img src={icontongdon}></img>
                  <p>&nbsp;Tổng đơn</p>
                </div>
                <div className='num-statistics'>
                  <h1 id='tongdon'>0</h1>
                  <p>&nbsp;đơn</p>
                </div>                  
              </div>
              <div className='table-statistics'>
                <div className='title-statistics'>
                  <img src={icontongxuat}></img>
                  <p>&nbsp;Tổng xuất</p>
                </div>
                <div className='num-statistics'>
                  <h1 id='tongxuat'>0</h1>
                  <p>&nbsp;.000 đ</p>
                </div>                  
              </div>
              <div className='table-statistics'>
                <div className='title-statistics'>
                  <img src={icontiendo}></img>
                  <p>&nbsp;Tiến độ</p>
                </div>
                <div className='num-statistics'>
                  <h1>47</h1>
                  <p className='person-css'>&nbsp;%</p>
                </div>                  
              </div>
              <div className='button-start'>
                <button id='download-button'>TẢI VỀ</button>
              </div>
            </div>            
          </div>
            <HistorySearch />
            <table className='transHistory' cellSpacing={0}>
              <thead>
                <th>IN</th>
                <th>PLAYER ID</th>
                <th>SỐ TIỀN</th>
                <th>THỜI GIAN DUYỆT</th>
                <th>SỐ TÀI KHOẢN</th>
                <th>NGÂN HÀNG</th>
                <th>TÊN KHÁCH HÀNG</th>
                <th>MÃ XUẤT KHOẢN</th>
                <th>MÃ GIAO DỊCH</th>
              </thead>
              <tbody className='tableData' cellSpacing={0}> 
              </tbody>
            </table>
            <VietinBill />
            <BidvBill />
            <VcbBill />
          </div>
        </div>
      </div>
    )
  }
}

billControler(); //Function tắt bill, in bill, lịch sử, thống kê, ...

// billPrinting(); //Function ra bill BIDV, Vietin, VCB


export default Billing;
