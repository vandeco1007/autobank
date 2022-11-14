import React from "react";
import Login from "./login";
import logoautobanking from '../asset/media/images/text.png'
import Version from "./version";
import '../style/loginPopup.css';

class LoginPopup extends React.Component {
    render() {
        return (
            <div className="login-popup">
                <div className="login-popup-wrapper">
                    <div className='bankLoginForm'>         
                        <h1 id="head-effect-1" className="header-effect">Welcome</h1>
                        <h1 id="head-effect-2" className="header-effect">Hệ thống chuyển khoản tự động</h1>
                        <h1 id="head-effect-3" className="header-effect">789BET AutoBanking</h1>
                        <div className="formField">
                            <input type={'text'} id='bankUsername' placeholder="Tên đăng nhập"></input>
                        </div>
                        <div className="formField">
                            <input type={'password'} id='bankPassword' placeholder="Mật khẩu"></input>
                        </div>        
                        <Login />
                        <button id="loginBtn" className="btn-submit">
                            Đăng nhập
                        </button>
                        <img src={logoautobanking}></img>
                        <Version />
                    </div>
                        
                </div>        
                {/* Background line */}
                <div class='light x1'></div>
                <div class='light x2'></div>
                <div class='light x3'></div>
                <div class='light x4'></div>
                <div class='light x5'></div>
                <div class='light x6'></div>
                <div class='light x7'></div>
                <div class='light x8'></div>
                <div class='light x9'></div>        
            </div>
        )
    }
}

export default LoginPopup;