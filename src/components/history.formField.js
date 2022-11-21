import iconsearch from '../asset/media/images/icons/iconsearch.svg';


const HistorySearch = function(){
    return(
        <div className='history-form-wrapper'>
            <div className="history-form-container">
                {/* <button id="download-button"></button> */}
                <div className="form-group" id="pageNav">
                </div>
                <div className="form-group">
                    <select id='playerChoices' className="choices">
                        <option value={'playerId'}>ID khách hàng</option>
                        <option value={'withdraw'}>Mã đơn</option>
                    </select>
                    <div className='width-player'>
                        <input type={'text'} id='player' className='width-player'></input>
                    </div>
                </div>
                <div className="form-group">
                    <label>Thời gian bắt đầu</label>
                    <input type={'datetime-local'} id='startTime' required></input>
                </div>
                <div className="form-group">
                    <label>Thời gian kết thúc</label>
                    <input type={'datetime-local'} id='endTime' required></input>
                </div>

                <div className="admin-extra">
                    <div className="form-group">
                        <select id='filter' className="choices" disabled>
                            <option value={'all'}>Toàn bộ đơn</option>
                            <option value={'auto'}>Chỉ đơn tự động</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type={'text'} id='auditor' placeholder='Mã số XNK'></input>
                    </div>
                </div>
                <button id="historyFormSubmit">
                    <img src={iconsearch}></img>
                </button>
            </div>
        </div>
    )
}

export default HistorySearch;