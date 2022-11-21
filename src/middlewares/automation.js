const auto = (result)=>{
    var automate = document.getElementById('automate')
    if(!localStorage.getItem('state')){
        localStorage.setItem('state',"true")
      }
      if(localStorage.getItem('state')=="true"){
        autoBank(result)
        automate.textContent='DỪNG'
      }else{
        automate.textContent='BẮT ĐẦU'
        console.log('stop')
      }
      automate.addEventListener('click',function(){
        window.location.reload()
        if(localStorage.getItem('state')=="true"){
          automate.textContent='DỪNG'
          localStorage.setItem('state','false')
        }else{
          automate.textContent='BẮT ĐẦU'
          window.location.reload()
          localStorage.setItem('state','true')
        }
      })
}

function autoBank(result){
  console.log(result)
  let orders = localStorage.getItem(localStorage.getItem('deviceName'))
  let limit = localStorage.getItem('transaction-limit')
  if((orders/limit)*100<100){
    setTimeout(function(){
      if(result==0){
        window.location.reload()
      }else{
        if(localStorage.getItem('state')=="true"){
          document.getElementsByClassName('transferBtn')[0].click()
        }else{
            console.log('stop')
        }
      }
    },500)
  }else{
    setTimeout(function(){
      document.getElementById('logout').click()
    },500)
  }
}

export default auto