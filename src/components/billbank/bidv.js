import React, {Component} from "react";
import dateValue from "../../constant/date";
import waitForElm from "../../middlewares/waitForElm";
import '../../style/billbank/bidvcss.css';

const BidvBill = () => {

    
waitForElm('#startTime').then(()=>{
    document.getElementById('startTime').value = new Date(dateValue.currentStartDay).getFullYear()+"-"+(new Date(dateValue.currentStartDay).getMonth()+1)+'-'+(new Date(dateValue.currentStartDay).getDate())+'T00:00:01'
    document.getElementById('endTime').value = new Date(dateValue.currentEndDay).getFullYear()+"-"+(new Date(dateValue.currentStartDay).getMonth()+1)+'-'+(new Date(dateValue.currentStartDay).getDate())+'T23:59:59'
})
    
waitForElm('.billPrinter').then(()=>{
    let billingContent = document.getElementsByClassName('bidv')[0]
    document.getElementsByClassName('cancelPrnt')[0].addEventListener('click',function(){
      console.log('center')
      billingContent.style.opacity='0'
      billingContent.style.zIndex='-1'
    })
  })

    return (
        <div className="bidv bidv-bill-container">
            <div className='cancelPrnt'>x</div>
            <div className="bidv-bill-wrapper">
                <p className="hour phone-hour">18:44</p>
                <div className="information">
                    Quý khách đã chuyển thành công <br></br>
                    số tiền <span className="css-td td-right">500,000 VND </span>
                    đến số tài khoản <span className="css-td td-right">19039111603019</span>/
                    <span className="css-td td-right"> NGUYEN VAN HUNG</span>/
                    <span className="css-td td-right"> Techcombank </span>
                    vào lúc <span className="td-right">12/11/2022 19:31:10</span>.Nội dung: <br></br>
                    <span className="td-right">HUNG3663</span>
                    <div className="bidv-code">Số tham chiếu <span className="code-td-css td-right"> 828066</span></div>
                </div>
                
            </div>

        </div>
    )
}

export default BidvBill;