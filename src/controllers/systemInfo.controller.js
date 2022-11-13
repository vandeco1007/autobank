const systemSetup = ()=>{
    document.getElementById('bankAcc').addEventListener('input', function(){
        console.log(document.getElementById('bankAcc').value)
        localStorage.setItem('bankAccount',document.getElementById('bankAcc').value)
    })
    document.getElementById('pin').addEventListener('input', function(){
        localStorage.setItem('bankPin',document.getElementById('pin').value)
    })
    document.getElementById('transaction-limit').addEventListener('input', function(){
        localStorage.setItem('transaction-limit',document.getElementById('transaction-limit').value)
    })

    //Counter

    document.getElementById('logout').addEventListener('click',function(){
        localStorage.setItem('token','session ended!')
        localStorage.setItem('role','user')
        localStorage.setItem('state','false')
        setTimeout(function(){
            window.location.href='/login'
        },500)
    })

    let numStatic = document.getElementById('num-statistics')
    if(!numStatic){
        console.log('No record to display')
    }else{
        let orderNum = localStorage.getItem(localStorage.getItem('deviceName'))
        let limit = localStorage.getItem('transaction-limit')
        document.getElementById('num-statistics').textContent = orderNum/limit*100
        let unleash = document.getElementById('unleash')
        unleash.addEventListener('click',function(){
            localStorage.setItem(localStorage.getItem('deviceName'),0)
            setTimeout(function(){
                window.location.reload()
            },500)
        })
        unleash.addEventListener('mouseover',function(){
            document.getElementById('limit-title').textContent="Reset về 0"
        })    
        unleash.addEventListener('mouseleave',function(){
            document.getElementById('limit-title').textContent="Giới hạn"
        })
    }

    let bankName = document.getElementById('bankName')
    if(!localStorage.getItem('bankName')){
        localStorage.setItem('bankName','VTIN')
        bankName.value=localStorage.getItem('bankName')
    }else{
        bankName.value=localStorage.getItem('bankName')
        bankName.addEventListener('input',function(){
            localStorage.setItem('bankName',bankName.value)
            bankName.value=localStorage.getItem('bankName')
        })
    }

    //Extra function

    let extra = document.getElementsByClassName('admin-extra')[0]
    if(!extra){
        console.log('No content to display')
    }

    let auditor = document.getElementById('auditor')
    auditor.value=localStorage.getItem('bouser')
    auditor.addEventListener('input',function(){
        localStorage.setItem('bouser',auditor.value)
    })

        //Hide record
    let filter = document.getElementById('filter')
    filter.addEventListener('change',function(){
        if(!document.getElementsByClassName('.billPrinter')[0]){
            console.log(filter.value)
            if(filter.value=='auto'){
                let hideObject = document.getElementsByClassName('tableData')[0].querySelectorAll('tr')
                hideObject.forEach(el=>{
                    if(!el.textContent.includes(localStorage.getItem('bankName'))){
                        el.remove()
                    }
                })
            }else{
                document.getElementById('historyFormSubmit').click()
            }
        }else{
            console.log('No record')
        }
    })

    //Bank avoiding list 

    var list = document.querySelectorAll('.bankCheck')

    if(!localStorage.getItem('avoid-list')){
        localStorage.setItem('avoid-list','.')
    }
    list.forEach(item=>{
        if(!localStorage.getItem('avoid-list')){
            localStorage.setItem('avoid-list','.')
        }else{
            if(localStorage.getItem('avoid-list').includes(item.value)){
                item.checked=true
            }
        }
    })
    
    var finalResult = []

    document.getElementsByClassName('set-bank-list')[0].addEventListener('click',function(){
        let checked = document.querySelectorAll('.bankCheck:checked')
        checked.forEach(el=>{
            console.log(el.value)
            finalResult.push(el.value)
        })
    
        localStorage.setItem('avoid-list',finalResult.toString())
        console.log(finalResult)
    })

}

export default systemSetup