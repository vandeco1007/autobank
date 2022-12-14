import waitForElm from "../middlewares/waitForElm";

const billPrinting = () => {

  waitForElm('.billPrinter').then(() => {
    let billPrnt = document.querySelectorAll('.billPrinter')
  
    billPrnt.forEach((el) => {
      el.addEventListener('click', () => {
        let jsonpars = JSON.parse(el.getAttribute('data-id'))
        let transBank = String(jsonpars.transId).toLowerCase();//LowerCase mã giao dịch làm điều kiện in bill
        console.log('Hihi ' + transBank)

        // //<--------------- In bill BIDV --------------->
        if(transBank.indexOf('bidv') == 0) {

          let billingContent = document.getElementsByClassName('bidv')[0]
          let jsonpars = JSON.parse(el.getAttribute('data-id'))
          let decriptions = document.getElementsByClassName('decriptions')[0]
          let code = document.getElementsByClassName('code')[0]
          let getBidv = document.getElementsByClassName('get-bidv')
          let bidvHour = document.getElementsByClassName('bidv-hour')[0]

          let time = new Date(jsonpars.time)
          let codeString = String(jsonpars.time)

          billingContent.style.opacity='1'
          billingContent.style.zIndex='10'      

          code.textContent=jsonpars.transId.split(' ')[1]
          
          //Set 2 số cho giờ, phút --------------------->
          let twoHours = '';
          let twoMinutes = '';
          if(time.getHours() < 10){
            twoHours = '0' + time.getHours();
          } else {
            twoHours = time.getHours();
          }

          if (time.getMinutes() < 10) {
            twoMinutes = '0' + time.getMinutes()
          }else {
            twoMinutes = time.getMinutes()
          }
          //--------------------->
          bidvHour.textContent = twoHours+':'+twoMinutes
          getBidv[0].textContent = jsonpars.ammount.toLocaleString('en-US') + " VND ";
          getBidv[1].textContent=jsonpars.bankAcc
          getBidv[2].textContent=" " + jsonpars.mess
          getBidv[3].textContent=" " + jsonpars.bankName + " "
          getBidv[4].textContent=time.getDate()+"/"+(time.getMonth()+1)+"/"+time.getFullYear()+" "+twoHours+':'+twoMinutes+':'+time.getSeconds()
          getBidv[5].textContent=" " + jsonpars.mess
          // getBidv[6].textContent=codeString.substr(7,6) //Code

        } else {
          console.warn('BIDV Bill not printed !')
        }

        // <--------------- In bill Vietin --------------->
        if(transBank.indexOf('vietin') == 0) {

          let billingContent = document.getElementsByClassName('vietin')[0]
          let jsonpars = JSON.parse(el.getAttribute('data-id'))
          let decriptions = document.getElementsByClassName('decriptions')[0]
          let code = document.getElementsByClassName('code')[0]
          let getVietin = document.querySelectorAll('.get-vietin')
          let time = new Date(jsonpars.time)
          let dateDisplay = document.getElementsByClassName('date-vietin')[0]
          let timeDisplay = document.getElementsByClassName('hour-vietin')[0]

          let codeString = String(jsonpars.time)

          billingContent.style.opacity='1'
          billingContent.style.zIndex='10'

          code.textContent=jsonpars.transId.split(' ')[1]          
          
          //Set 2 số cho giờ, phút --------------------->
          let twoHours = '';
          let twoMinutes = '';
          if(time.getHours() < 10){
            twoHours = '0' + time.getHours();
          } else {
            twoHours = time.getHours();
          }

          if (time.getMinutes() < 10) {
            twoMinutes = '0' + time.getMinutes()
          }else {
            twoMinutes = time.getMinutes()
          }
          //--------------Num to text------------>
          var th = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
          var dg = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
          var tn = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Eineteen'];
          var tw = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

          function toWords(s) {

              s = s.toString();
              s = s.replace(/[\, ]/g, '');
              if (s != parseFloat(s)) return 'not a number';
              var x = s.indexOf('.');
            var fulllength=s.length;
            
              if (x == -1) x = s.length;
              if (x > 15) return 'too big';
            var startpos=fulllength-(fulllength-x-1);
              var n = s.split('');
            
              var str = '';
              var str1 = ''; 
              var sk = 0;
              for (var i = 0; i < x; i++) {
                  if ((x - i) % 3 == 2) {
                      if (n[i] == '1') {
                          str += tn[Number(n[i + 1])] + ' ';
                          i++;
                          sk = 1;
                      } else if (n[i] != 0) {
                          str += tw[n[i] - 2] + ' ';

                          sk = 1;
                      }
                  } else if (n[i] != 0) {
                      str += dg[n[i]] + ' ';
                      if ((x - i) % 3 == 0) str += 'Hundred ';
                      sk = 1;
                  }
                  if ((x - i) % 3 == 1) {
                      if (sk) str += th[(x - i - 1) / 3] + ' ';
                      sk = 0;
                  }
              }
              if (x != s.length) {
                  
                  str += 'And '; 
                  str1 += 'Cents '; 

              var j=startpos;
              
              for (var i = j; i < fulllength; i++) {
              
                  if ((fulllength - i) % 3 == 2) {
                      if (n[i] == '1') {
                          str += tn[Number(n[i + 1])] + ' ';
                          i++;
                          sk = 1;
                      } else if (n[i] != 0) {
                          str += tw[n[i] - 2] + ' ';
                  
                          sk = 1;
                      }
                  } else if (n[i] != 0) {
              
                      str += dg[n[i]] + ' ';
                      if ((fulllength - i) % 3 == 0) str += 'Hundred ';
                      sk = 1;
                  }
                  if ((fulllength - i) % 3 == 1) {
              
                      if (sk) str += th[(fulllength - i - 1) / 3] + ' ';
                      sk = 0;
                  }
              }
              }
            var result=str.replace(/\s+/g, ' ') + str1;
              
              return result; 
            
          }
          //----------------------------------------------
          dateDisplay.textContent = time.getDate() + "/" + (time.getMonth()+1) + "/" + time.getFullYear()
          timeDisplay.textContent = twoHours + ':' + twoMinutes
          getVietin[0].textContent = jsonpars.transId.split(' ')[1]
          getVietin[1].textContent = "********" + localStorage.getItem('bankAccount').slice(-4)
          getVietin[2].textContent = localStorage.getItem('bankUsername') //đang là null
          getVietin[3].textContent = jsonpars.bankAcc
          getVietin[4].textContent = jsonpars.mess
          getVietin[5].textContent = jsonpars.bankName
          getVietin[6].textContent = jsonpars.ammount.toLocaleString('en-US') + " VND"
          getVietin[7].textContent = toWords(jsonpars.ammount) + ' Dong'
          getVietin[9].textContent = jsonpars.mess   
        } else {
          console.warn('Vietin Bill not printed')
        }

        //<--------------- In bill Vietcombank --------------->
        if(transBank.indexOf('vcb') == 0) {

          let day = ['Chủ Nhật','Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy',]
          let billingContent = document.getElementsByClassName('vcb')[0]
          let jsonpars = JSON.parse(el.getAttribute('data-id'))
          let decriptions = document.getElementsByClassName('decriptions')[0]
          let code = document.getElementsByClassName('code')[0]
          let getVcb = document.getElementsByClassName('get-vcb')
          let time = new Date(jsonpars.time)
          let timeDisplay = document.getElementsByClassName('time')
          let codeString = String(jsonpars.time)
          console.log(jsonpars.time)

          billingContent.style.opacity='1'
          billingContent.style.zIndex='10'

          let twoHours = '';
          let twoMinutes = '';
          if(time.getHours() < 10){
            twoHours = '0' + time.getHours();
          } else {
            twoHours = time.getHours();
          }

          if (time.getMinutes() < 10) {
            twoMinutes = '0' + time.getMinutes()
          }else {
            twoMinutes = time.getMinutes()
          }

          code.textContent=jsonpars.transId.split(' ')[1]
          getVcb[0].textContent=twoHours+':'+twoMinutes
          getVcb[1].textContent=jsonpars.ammount.toLocaleString('en-US') + " VND"
          getVcb[2].textContent=twoHours+':'+twoMinutes + " " + day[time.getDay()] + " " + time.getDate()+"/"+(time.getMonth()+1)+"/"+time.getFullYear()
          getVcb[3].textContent=jsonpars.mess
          getVcb[4].textContent=jsonpars.bankAcc
          getVcb[5].textContent=jsonpars.bankName
          getVcb[6].textContent=codeString.substr(6,7)
          getVcb[7].textContent=jsonpars.mess
        } else {
          console.warn('VCB Bill not printed')
        }

      })
    })
  })
    
}

export default billPrinting;