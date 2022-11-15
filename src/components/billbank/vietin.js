import React, {Component} from "react";
import '../../style/billbank/vietincss.css';

const VietinBill = () => {
    return (
        <div className="vietin vietin-bill-container">           
            <div className='cancelPrnt'>x</div>
            <div className="vietin-bill-wrapper">
                <p className="hour phone-hour">18:44</p>
                {/* Logo & Date */}
                <div className="head-bill">
                    <div className="time-code">
                        <div className="time">
                            <p className="date">12/11/2022</p>
                            &nbsp;
                            <p className="hour">18:44</p>
                        </div>
                        <div className="code">480S22B0JM8TKBE0</div>
                    </div>
                </div>
                {/* Infomation */}
                <div className="information">
                    <div className="info">
                        <div className="left-info">From account</div>
                        <div className="right-info">
                            <div className="above-content td-right">********8556</div>
                            <div className="below-content td-right">NGUYEN VAN MAN</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="left-info">To account</div>
                        <div className="right-info account">
                            <div className="above-content td-right">100872860817</div>
                            <div className="below-content td-right">NGUYEN VAN TIEP</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="left-info">Bank</div>
                        <div className="right-info">
                            <div className="above-content td-right">Vietnam Technological and Commercial Bank (TCB)</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="left-info">Amount</div>
                        <div className="right-info fee">
                            <div className="below-content td-right">1,000,000 VND</div>
                            <div className="above-content td-right">One Million Dong</div>
                        </div>
                    </div>
                    <div className="info a-line">
                        <div className="left-info">Fee</div>
                        <div className="right-info">
                            <div className="above-content">Free</div>
                        </div>
                    </div>
                    <div className="info a-line">
                        <div className="left-info">Content</div>
                        <div className="right-info">
                            <div className="above-content td-right">thienhoa123</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VietinBill;