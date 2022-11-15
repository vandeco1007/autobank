import React, {Component} from 'react';
import VietinBill from './billbank/vietin';
import BidvBill from './billbank/bidv';
import waitForElm from '../middlewares/waitForElm';
import HistorySearch from './history.formField';
import getHistory from '../controllers/history.controller';
import iconhoadon from '../asset/media/images/icons/iconhoadon.svg'
import icontongdon from '../asset/media/images/icons/icontongdon.svg'
import icontongxuat from '../asset/media/images/icons/icontongxuat.svg'
import icontiendo from '../asset/media/images/icons/icontiendo.svg'
import iconprint from '../asset/media/images/icons/iconprint.svg'

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
                  <p>&nbsp;đơn</p>
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
            {/* <VietinBill /> */}
            <BidvBill />
          </div>
        </div>
      </div>
    )
  }
}


// waitForElm('.billPrinter').then(()=>{
//   let billingContent = document.getElementsByClassName('bidv')[0]
//   document.getElementsByClassName('cancelPrnt')[0].addEventListener('click',function(){
//     console.log('center')
//     billingContent.style.opacity='0'
//     billingContent.style.zIndex='-1'
//   })
// })

waitForElm('.transHistory').then(()=>{
  function downloadCSVFile(csv, filename) {
    var csv_file, download_link;
    csv_file = new Blob([csv], {type: "text/csv"});
    download_link = document.createElement("a");
    download_link.download = filename;
    download_link.href = window.URL.createObjectURL(csv_file);
    download_link.style.display = "none";
    document.body.appendChild(download_link);
    download_link.click();
  }
  document.getElementById("download-button").addEventListener("click", function () {
    var html = document.getElementsByClassName("tableData")[0].outerHTML;
    htmlToCSV(html, "TaiBieu.csv");
  });

  let submitForm = document.getElementById('historyFormSubmit')
  submitForm.addEventListener('click', ()=>{
    let starTime = document.getElementById('startTime').value
    let endTime = document.getElementById('endTime').value
    let playerChoices = document.getElementById('playerChoices').value
    let player = document.getElementById('player').value
    if(endTime!='' && starTime!=''){
      getHistory(new Date(starTime).getTime(),new Date(endTime).getTime(),playerChoices,player,0)
    }else{
      alert('Vui lòng nhập ngày tháng')
    }
  })

  function htmlToCSV(html, filename) {
    var data = [];
    var rows = document.querySelectorAll("table tr");					
    for (var i = 0; i < rows.length; i++) {
      var row = [], cols = rows[i].querySelectorAll("td, th");						
      for (var j = 0; j < cols.length; j++) {
        row.push(cols[j].innerText);
      }
      data.push(row.join(","));		
    }
    downloadCSVFile(data.join("\n"), filename);
  }
})

export default Billing;
