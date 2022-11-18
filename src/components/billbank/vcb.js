import React, {Component} from "react";
import '../../style/billbank/vcbcss.css';
import transferVcb from '../../asset/media/images/icons/transferVcb.png'

const VcbBill = () => {
    return(
        <div className="vcb vcb-bill-container">
            <div className='cancelPrnt'>x</div>
            <div className="vcb-bill-wrapper">
                <span className="hour">15:00</span>
                <div className="head-bill">
                    <span className="money">999,888,000 VND</span>
                    <span className="date">15:00 Thứ Ba 25/10/2022</span>
                </div>
                <div className="information">
                    <div className="info">
                        <div className="left-info">Tên người thụ hưởng</div>
                        <div className="right-info get-vcb">NGUYEN HO TUAN TINH</div>
                    </div>
                    <div className="info">
                        <div className="left-info">Tài khoản thụ hưởng</div>
                        <div className="right-info get-vcb">19856523505</div>
                    </div>
                    <div className="info">
                        <div className="left-info">Ngân hàng thụ hưởng</div>
                        <div className="right-info get-vcb">Ngân hàng Quân Đội (MB)</div>
                    </div>
                    <div className="info">
                        <div className="left-info">Mã giao dịch</div>
                        <div className="right-info get-vcb">265877742235</div>
                    </div>
                    <div className="info">
                        <div className="left-info">Nội dung</div>
                        <div className="right-info get-vcb">Helu jarr</div>
                    </div>
                    <div className="info">
                        <div className="left-info toggle">Lưu mẫu chuyển tiền</div>
                        <div className="transfer-vcb">
                            <img src={transferVcb}></img>
                        </div>
                    </div>
                    <div className="info">
                        <div className="left-info"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VcbBill;