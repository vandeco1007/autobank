const vietinBillPrint = () => {
    let day = ['Chủ Nhật','Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy',]
    let billPrnt = document.querySelectorAll('.billPrinter')
    let billingContent = document.getElementsByClassName('vietin')[0]
    billPrnt.forEach((el)=>{
      el.addEventListener('click',()=>{
        let jsonpars = JSON.parse(el.getAttribute('data-id'))
        let decriptions = document.getElementsByClassName('decriptions')[0]
        let code = document.getElementsByClassName('code')[0]
        let tdRight = document.getElementsByClassName('td-right')
        let time = new Date(jsonpars.time)
        let timeDisplay = document.getElementsByClassName('time')
        console.log(jsonpars.time)

        billingContent.style.opacity='1'
        billingContent.style.zIndex='10'
        console.log('Printed')

        code.textContent=jsonpars.transId.split(' ')[1]
        timeDisplay[0].textContent=time.getDate()+"/"+(time.getMonth()+1)+"/"+time.getFullYear()+" "+time.getHours()+':'+time.getMinutes()
        tdRight[0].textContent= "********"+localStorage.getItem('bankAccount').slice(-4)
        tdRight[1].textContent=localStorage.getItem('bankUsername')
        tdRight[2].textContent=jsonpars.bankAcc
        tdRight[3].textContent=jsonpars.mess
        tdRight[4].textContent=jsonpars.ammount.toLocaleString('en-US')
        tdRight[5].textContent=jsonpars.mess
        navigator.clipboard.writeText(jsonpars.playerId)
        .then(() => {
            console.log("Text copied to clipboard...")
        })
            .catch(err => {
            console.log('Something went wrong', err);
        })
      })
    })
}

export default vietinBillPrint;