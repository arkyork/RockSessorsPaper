const cpu_select=document.getElementById('selection')
const user_select=document.getElementById('user')
const result_show=document.getElementById('result')
const possibility=document.querySelectorAll('button')

possibility.forEach(possibility => possibility.addEventListener('click',(e)=>{
    userselect=e.target.innerHTML
    user_select.innerHTML=userselect
    gen_cpu()
    calresult()
}))


function gen_cpu(){
    const randomNumber=Math.floor(Math.random() * 3)+1
    console.log(randomNumber)
    if (randomNumber==1){
        cpu_select.innerHTML="グー"
    }
    if (randomNumber==2){
        cpu_select.innerHTML="チョキ"

    }
    if (randomNumber==3){
        cpu_select.innerHTML="パー"

    }
}

function calresult(){
    if(cpu_select.innerHTML==user_select.innerHTML){
        result_show.innerHTML="引き分け"
    }else if( (user_select.innerHTML=="グー" & cpu_select.innerHTML=="チョキ") | (user_select.innerHTML=="チョキ" & cpu_select.innerHTML=="パー") |(user_select.innerHTML=='パー' &cpu_select.innerHTML=="グー")){
        result_show.innerHTML="勝ち"
    }else{
        result_show.innerHTML='負け'
    }
}