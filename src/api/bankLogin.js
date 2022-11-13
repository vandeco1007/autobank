import dateValue from '../constant/date'
const bankLogin = (user,password)=>{
  var myHeaders = new Headers();
  myHeaders.append("Authorization", btoa(user+":"+password));
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  if(user=='admin' && password=='admin'){
    localStorage.setItem('role','admin')
    setTimeout(function(){
      window.location.href='/'
    },500)
  }else{
    fetch("http://localhost:8090/TotalControl/v2/login", requestOptions)
    .then(response => response.json())
    .then(result =>{
      if(result.status==true){
        console.log(result.value.token)
        localStorage.setItem('bankUser',user)
        localStorage.setItem('bankToken',result.value.token)
        fetch("http://localhost:8090/TotalControl/v2/devices?q=all&token="+result.value.token, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result.ids)
          let loginContainer = document.getElementsByClassName('bankLoginForm')[0]
          document.getElementsByClassName('bankLoginForm')[0].innerHTML=""
          result.ids.forEach((item)=>{
            let button = document.createElement('button')
            let device = document.createTextNode(item)
            button.appendChild(device)
            button.setAttribute('id',item)
            button.setAttribute('class','chooseDevices')
            loginContainer.appendChild(button)
            button.addEventListener('click',function(){
              localStorage.setItem('deviceName',button.getAttribute('id'))
              if(!localStorage.getItem(button.getAttribute('id'))){
                localStorage.setItem(button.getAttribute('id'),0)
              }
              setTimeout(function(){
                window.location.href='/'
              },500)
            })
          })
        })
        .catch(error => console.log('error', error));
        // window.location.reload()
      }else{
        localStorage.setItem('bankUser',"Vui Long Dang Nhap Lai")
        alert("Đăng Nhập Không Chính Xác")
        window.location.reload()
      }
    }).catch(error => console.log('error', error));
  }
}

export default bankLogin