const authorize = (result)=>{
    if(!result.msg){
        console.log(result)
    }else{
        if(window.location.href.split('/')[3]!='login'){
            localStorage.setItem('role','user')
            window.location.href='/login'
        }
    }
}

export default authorize
