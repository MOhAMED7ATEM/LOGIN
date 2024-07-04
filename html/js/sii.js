var logout=document.getElementById('loge')
logout.addEventListener('click',function(){
    window.location.href='../index.html'
} )
var nomee=document.getElementById('Name').innerHTML=`${
    JSON.parse(localStorage.getItem("addname"))
}` ;