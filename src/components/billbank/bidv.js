import React, {Component} from "react";
import waitForElm from "../../middlewares/waitForElm";
import '../../style/billbank/bidvcss.css';

const BidvBill = () => {
    return (
        <div className="bidv bidv-bill-container">
            <div className='cancelPrnt'></div>
            <div className="bidv-bill-wrapper">
                <p className="hour phone-hour bidv-hour">18:44</p>
                <div className="information">
                    Quý khách đã chuyển thành công <br></br>
                    số tiền <span className="css-td get-bidv">500,000 VND </span>
                    đến số tài khoản <span className="css-td get-bidv">19039111603019</span>/
                    <span className="css-td get-bidv"> NGUYEN VAN HUNG</span>/
                    <span className="css-td get-bidv"> Techcombank </span>
                    vào lúc <span className="get-bidv">12/11/2022 19:31:10</span>.Nội dung: <br></br>
                    <span className="get-bidv">HUNG3663</span>
                    {/* <div className="bidv-code">Số tham chiếu <span className="code-td-css get-bidv"> 828066</span></div> */}
                </div>
            </div>
        </div>
    )
}

export default BidvBill;