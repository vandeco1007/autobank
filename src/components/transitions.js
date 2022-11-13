import React from 'react'
import waitForElm from '../middlewares/waitForElm'
import Aeapi from '../api/aeapi'
import getHistory from '../controllers/history.controller'
import auto from '../middlewares/automation'
import iconxnct from '../asset/media/images/icons/iconxnct.svg'
import icontongdon from '../asset/media/images/icons/icontongdon.svg'
import icontongxuat from '../asset/media/images/icons/icontongxuat.svg'
import icontiendo from '../asset/media/images/icons/icontiendo.svg'

const Transitions = ()=>{
    return (
      <div className='transition content'>
        <div className='breadCrum'><a href='#'>Trang chủ</a> - <a href='#'>Vietin</a> - <a href='#'>Chuyển khoản</a></div>
        <div className='transition-container'>
          <div className='transition-wrapper'>
            <div className='table-header'>
              <div className='table-title'>
                <img src={iconxnct}></img>
                <p>Xác nhận chuyển tiền</p>
              </div>
              <div className='table-statistics-container'>
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
                    <p>&nbsp;.000đ</p>
                  </div>                  
                </div>
                <div className='table-statistics' id='unleash'>
                  <div className='title-statistics'>
                    <img src={icontiendo}></img>
                    <p id='limit-title'>&nbsp;Giới hạn</p>
                  </div>
                  <div className='num-statistics'>
                    <h1 id="num-statistics">47</h1>
                    <p className='person-css'>&nbsp;%</p>
                  </div>                  
                </div>
                <div className='button-start'>
                  <button id='automate'></button>
                </div>
              </div>
            </div>
            <fieldset className='bank-avoid'>
                <legend> Không xuất ngân hàng: </legend>
                <div className='bank-group'>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Agribank" value='Agribank'></input>
                    <label for="scales">Agribank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Vietcombank" value='Vietcombank'></input>
                    <label for="Vietcombank">Vietcombank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="MB BANK " value='MB BANK '></input>
                    <label for="MB BANK ">MB BANK </label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Techcom Bank" value='Techcom Bank'></input>
                    <label for="Techcom Bank">Techcom Bank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="MB BANK" value='MB BANK'></input>
                    <label for="MB BANK">MB BANK</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Sacombank" value='Sacombank'></input>
                    <label for="Sacombank">Sacombank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Vietin" value='Vietin'></input>
                    <label for="Vietin">Vietin</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Orient Commercial Bank, OCB" value='Orient Commercial Bank, OCB'></input>
                    <label for="Orient Commercial Bank, OCB">Orient Commercial Bank, OCB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="BIDV" value='BIDV'></input>
                    <label for="BIDV">BIDV</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="ACB" value='ACB'></input>
                    <label for="ACB">ACB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="VPBank" value='VPBank'></input>
                    <label for="VPBank">VPBank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="TPBank" value='TPBank'></input>
                    <label for="TPBank">TPBank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Maritime Bank, MSB" value='Maritime Bank, MSB'></input>
                    <label for="Maritime Bank, MSB">Maritime Bank, MSB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="SHBank, SHB" value='SHBank, SHB'></input>
                    <label for="SHBank, SHB">SHBank, SHB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="HD BANK" value='HD Bank'></input>
                    <label for="HD Bank">HD Bank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="HD BANK" value='HD Bank'></input>
                    <label for="HD BANK">HD BANK</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="ABBANK" value='ABBANK'></input>
                    <label for="ABBANK">ABBANK</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="BacABank" value='BacABank'></input>
                    <label for="BacABank">BacABank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="BaoVietBank, BVB" value='BaoVietBank, BVB'></input>
                    <label for="BaoVietBank, BVB">BaoVietBank, BVB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="DongA Bank" value='DongA Bank'></input>
                    <label for="DongA Bank">DongA Bank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Eximbank" value='Eximbank'></input>
                    <label for="Eximbank">Eximbank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="IVB" value='IVB'></input>
                    <label for="IVB">IVB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="KienLongBank" value='KienLongBank'></input>
                    <label for="KienLongBank">KienLongBank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="LienVietPostBank, LPB" value='LienVietPostBank, LPB'></input>
                    <label for="LienVietPostBank, LPB">LienVietPostBank, LPB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Lienviet" value='Lienviet'></input>
                    <label for="Lienviet">Lienviet</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Nam A Bank" value='Nam A Bank'></input>
                    <label for="Nam A Bank">Nam A Bank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="National Citizen Bank, NCB" value='National Citizen Bank, NCB'></input>
                    <label for="National Citizen Bank, NCB">National Citizen Bank, NCB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="PG bank" value='PG bank'></input>
                    <label for="PG bank">PG bank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="PVcom Bank" value='PVcom Bank'></input>
                    <label for="PVcom Bank">PVcom Bank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="SCB" value='SCB'></input>
                    <label for="SCB">SCB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="SeABank" value='SeABank'></input>
                    <label for="SeABank">SeABank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Shinhan BANK" value='Shinhan BANK'></input>
                    <label for="Shinhan BANK">Shinhan BANK</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="UBANK" value='UBANK'></input>
                    <label for="UBANK">UBANK</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="VIBBank, VIB" value='VIBBank, VIB'></input>
                    <label for="VIBBank, VIB">VIBBank, VIB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="VietABank, VAB" value='VietABank, VAB'></input>
                    <label for="VietABank, VAB">VietABank, VAB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="VietCapitalBank" value='VietCapitalBank'></input>
                    <label for="VietCapitalBank">VietCapitalBank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Wooribank" value='Wooribank'></input>
                    <label for="Wooribank">Wooribank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="CIMB" value='CIMB'></input>
                    <label for="CIMB">CIMB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Vietbank, VB" value='Vietbank, VB'></input>
                    <label for="Vietbank, VB">Vietbank, VB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Saigonbank, SGB" value='Saigonbank, SGB'></input>
                    <label for="Saigonbank, SGB">Saigonbank, SGB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="VPBSP" value='VPBSP'></input>
                    <label for="VPBSP">VPBSP</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="United Overseas Bank- UOB" value='United Overseas Bank- UOB'></input>
                    <label for="United Overseas Bank- UOB">United Overseas Bank- UOB</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="Oceanbank" value='Oceanbank'></input>
                    <label for="Oceanbank">Oceanbank</label>
                  </div>
                  <div>
                    <input type="checkbox" className='bankCheck' id="CB" value='CB'></input>
                    <label for="CB">CB</label>
                  </div>
                </div>
                <button className='set-bank-list'>Submit</button>
            </fieldset>
            <table className='dataTable' cellSpacing={'0px'}>
              <thead>
                <tr>
                  <th>ID KHÁCH HÀNG</th>
                  <th>TÊN KHÁCH HÀNG</th>
                  <th>TÀI KHOẢN</th>
                  <th>NGÂN HÀNG THỤ HƯỞNG</th>
                  <th>SỐ TIỀN CHUYỂN KHOẢN</th>
                  <th>LỜI NHẮN</th>
                  <th>XÁC NHẬN</th>
                </tr>
              </thead>
              <tbody id='dataContain'>
                <tr className='data-row'>
                  {/* <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td>a</td>
                  <td><button className='transferBtn' data-id='{"withdrawid":"467d4b4a-9919-4747-ae14-172aa011938e","playerId":"ceshi41","bankAcc":"1023968466","bankName":"Vietcombank","bankaccountname":"PHAM THI TRUONG","ammount":1000,"mess":"LUCKY LUKE"}'></button></td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}

waitForElm('.web-container').then(()=>{
  if(!localStorage.getItem('avoid-list')){
    localStorage.setItem('avoid-list','.')
  }
  if(localStorage.getItem('role')=='user'){
    Aeapi.transitions()
  }
})

waitForElm('#navigation').then(()=>{
  let paginition = document.getElementById('navigation')
  let starTime = document.getElementById('startTime').value
  let endTime = document.getElementById('endTime').value
  let playerChoices = document.getElementById('playerChoices').value
  let player = document.getElementById('player').value
  paginition.addEventListener('change', ()=>{
    console.log(paginition.value)
    if(endTime!='' && starTime!=''){
      getHistory(new Date(starTime).getTime(),new Date(endTime).getTime(),playerChoices,player,(paginition.value*1000))
    }else{
      alert('Vui lòng nhập ngày tháng')
    }
  })
})

waitForElm('.transferBtn').then(()=>{
  var transferBtn = document.querySelectorAll('.transferBtn')
  transferBtn.forEach((el)=>{
    el.addEventListener('click',()=>{
      let data = JSON.parse(el.getAttribute('data-id'))
      if(localStorage.getItem('avoid-list').includes(data.bankName)){
        alert('NGÂN HÀNG ĐANG BẢO TRÌ - VUI LÒNG KIỂM TRA LẠI VÀ BỎ LỆNH CẤM NGÂN HÀNG TRƯỚC KHI XUẤT KHOẢN')
      }else{
        Aeapi.transfer(el)
      }
      console.log(el.getAttribute('data-id'))
    })
  })
})

export default Transitions;
