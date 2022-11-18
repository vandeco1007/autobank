import React, {Component} from "react";
import '../../style/billbank/vietincss.css';

const VietinBill = () => {
    return (
        <div className="vietin vietin-bill-container">           
            <div className='cancelPrnt'>x</div>
            <div className="vietin-bill-wrapper">
                <p className="hour phone-hour hour-vietin">18:44</p>
                {/* Logo & Date */}
                <div className="head-bill">
                    <div className="time-code">
                        <div className="time">
                            <p className="date-vietin">12/11/2022</p>
                            &nbsp;
                            <p className="hour-vietin">18:44</p>
                        </div>
                        <div className="code get-vietin">480S22B0JM8TKBE0</div>
                    </div>
                </div>
                {/* Infomation */}
                <div className="information">
                    <div className="info">
                        <div className="left-info">From account</div>
                        <div className="right-info">
                            <div className="above-content get-vietin">********8556</div>
                            <div className="below-content get-vietin">NGUYEN VAN MAN</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="left-info">To account</div>
                        <div className="right-info account">
                            <div className="above-content get-vietin">100872860817</div>
                            <div className="below-content get-vietin">NGUYEN VAN TIEP</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="left-info">Bank</div>
                        <div className="right-info">
                            <div className="below-content get-vietin">Vietnam Technological and Commercial Bank</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="left-info">Amount</div>
                        <div className="right-info fee">
                            <div className="above-content get-vietin">1,000,000 VND</div>
                            <div className="below-content get-vietin"><span>One Million Dong</span></div>
                        </div>
                    </div>
                    <div className="info a-line">
                        <div className="left-info">Fee</div>
                        <div className="right-info">
                            <div className="above-content get-vietin">Free</div>
                        </div>
                    </div>
                    <div className="info a-line">
                        <div className="left-info">Content</div>
                        <div className="right-info">
                            <div className="above-content get-vietin">U là trời</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VietinBill;