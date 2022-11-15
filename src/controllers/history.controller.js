import authorize from "../middlewares/bo.authorize";
import bidvBillPrint from "./bidvBillPrint";
import vietinBillPrint from "./vietinBillPrint";

const getHistory = (startTime, endTime, playerChoices, playerId, paginitions, limit)=>{
    let url = []
    let myHeaders = new Headers();
    myHeaders.append("accept", " */*");
    myHeaders.append("accept-encoding", " gzip, deflate, br");
    myHeaders.append("authorization", localStorage.getItem('token'));
    myHeaders.append("origin", " https://bo.f8bet.cc");
    myHeaders.append("referer", " https://bo.f8bet.cc/");
    myHeaders.append("Cookie", "__cf_bm=eRN8pUNPav1TR9mYCn51uVAev2F2uFlVAz.7869Bo.k-1665682812-0-AZouNqKJFI125f1jlLoD4aT09ABUKzvjNDQa0JJDpyr9Rn7rmSa4oQvWG6kLxuRUj9neqrot9qSSAA1QSrJ6NIs=");

    let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    if(playerId==''){
      url[0]='https://boapi.f8bet.cc/f8bet-ims/api/v1/withdrawals/search?&starttime='+startTime+'&endtime='+endTime+'&dl=false&exactmatch=true&limit=1000&offset='+paginitions+'&sort=DESC&sortcolumn=withdrawaltime&statusType=WITHDRAWAL_RECORD&statuslist=8&statuslist=14&withdrawaltypestr=BANK&timefilter=audittime&zoneType=ASIA_SHANGHAI&auditor='+localStorage.getItem('bouser')
    }

    
    if(playerId!=''){
      console.log(playerId)
      if(playerChoices=='playerId'){
        url[0]='https://boapi.f8bet.cc/f8bet-ims/api/v1/withdrawals/search?dl=false&starttime='+startTime+'&endtime='+endTime+'&exactmatch=true&language=4&limit=100&offset='+paginitions+'&offset=0&sequence=0&sort=DESC&sortcolumn=withdrawaltime&statusType=WITHDRAWAL_RECORD&statuslist=8&statuslist=14&withdrawaltypestr=BANK&timefilter=audittime&zoneType=ASIA_SHANGHAI&playerid='+playerId
      }else{
        url[0]='https://boapi.f8bet.cc/f8bet-ims/api/v1/withdrawals/search?dl=false&starttime='+startTime+'&endtime='+endTime+'&exactmatch=true&language=4&limit=100&offset='+paginitions+'&sequence=0&sort=DESC&sortcolumn=withdrawaltime&statusType=WITHDRAWAL_RECORD&statuslist=8&statuslist=14&withdrawaltypestr=BANK&timefilter=audittime&zoneType=ASIA_SHANGHAI&withdrawid='+playerId
      }
    }

    console.log(url[0])
    console.log(playerChoices)

    fetch(url[0], requestOptions)
    .then(response => response.json())
    .then(result=> {
      authorize(result)
      if(!result.msg){
        document.getElementById('filter').disabled=false 
      }else{
          alert(result.msg)
          document.getElementById('filter').disabled=true
      }
      let formContainer = document.getElementsByClassName('history-form-container')[0]
      let formGroup = document.getElementById('pageNav')
      let navigation = "<label>Trang: </label><select id='navigation'>"
      // if(document.querySelectorAll('#navigation').length==0){
        formContainer.prepend(formGroup)
      // }
      // if(result.element)
      console.log(result.total)
      for(let i=0;i<Math.ceil(result.total/1000);i++){
        navigation+="<option class='nav' value='"+i+"'>"+(i+1)+"</option>"
      }
      navigation+="</select>"
      formGroup.innerHTML = navigation
      document.getElementById('navigation').value=(paginitions/1000)
      let paginition = document.getElementById('navigation')
      let starTime = document.getElementById('startTime').value
      let endTime = document.getElementById('endTime').value
      let playerChoices = document.getElementById('playerChoices').value
      let player = document.getElementById('player').value
      paginition.addEventListener('change', ()=>{
        if(endTime!='' && starTime!=''){
          getHistory(new Date(starTime).getTime(),new Date(endTime).getTime(),playerChoices,player,(paginition.value*1000))
        }else{
          alert('Vui lòng nhập ngày tháng')
        }
      })

      document.getElementsByClassName('tableData')[0].innerHTML=''
      document.getElementById('tongdon').textContent = result.summary.totalcount
      if(!result.summary.withdrawalamt){
        document.getElementById('tongxuat').textContent = 0
      }else{
        document.getElementById('tongxuat').textContent = result.summary.withdrawalamt
      }
      result.data.forEach(element => {
          let dataTable = document.getElementsByClassName('tableData')[0]
          let tableTr = document.createElement('tr')
          dataTable.appendChild(tableTr)          
          let btnContainer = document.createElement('td')
          let btn = document.createElement('button')
          let btnNode = document.createTextNode('in')
          btn.appendChild(btnNode)
          btnContainer.appendChild(btn)
          btn.setAttribute('class','billPrinter')
          btn.setAttribute('data-id','{"time":'+element.audittime+',"withdrawid":"'+element.withdrawid+'","playerId":"'+element.playerid+'","bankAcc":"'+element.bankaccount+'","bankName":"'+element.bankname+'","ammount":'+element.actualwithdrawalamt*1000+',"mess":"'+element.bankaccountname+'","transId":"'+element.approvereason+'"}')
          tableTr.appendChild(btnContainer)

          let playerId = document.createElement('td')
          let playerIdCont = document.createTextNode(element.playerid)
          playerId.appendChild(playerIdCont)
          tableTr.appendChild(playerId)

          let amount = document.createElement('td')
          let amountNum = document.createTextNode((element.actualwithdrawalamt*1000))
          amount.appendChild(amountNum)
          tableTr.appendChild(amount)

          let auditTime = document.createElement('td')
          let auditTimeValue = document.createTextNode(new Date(element.audittime).toLocaleString())
          auditTime.appendChild(auditTimeValue)
          tableTr.appendChild(auditTime)
  
          let bankAcc = document.createElement('td')
          let bankAccNum = document.createTextNode(element.bankaccount.toLocaleString().slice(0,2)+'******'+element.bankaccount.toLocaleString().slice(-2))
          bankAcc.appendChild(bankAccNum)
          tableTr.appendChild(bankAcc)
  
          let bank = document.createElement('td')
          let bankName = document.createTextNode(element.bankname)
          bank.appendChild(bankName)
          tableTr.appendChild(bank)
  
          let name = document.createElement('td')
          let nameValue = document.createTextNode(element.bankaccountname)
          name.appendChild(nameValue)
          tableTr.appendChild(name)
  
          let withdraw = document.createElement('td')
          let withdrawId = document.createTextNode(element.withdrawid)
          withdraw.appendChild(withdrawId)
          tableTr.appendChild(withdraw)
  
          let trans = document.createElement('td')
          let transId = document.createTextNode(element.approvereason)
          trans.appendChild(transId)
          tableTr.appendChild(trans)

          // Bill Printer
          let transBank = String(element.approvereason).toLowerCase();
          if(transBank.indexOf("bidv") == 0) {
            bidvBillPrint();
          }
        });
    }).catch(error => console.log('error', error));
}

export default getHistory