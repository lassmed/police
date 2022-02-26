c =document.querySelector('#color')
size =document.querySelector('#size')
police=document.querySelector("#police")
color.onchange=function (){
    document.querySelector("#contenu").style.color=c.value
}
size.onchange=function (){
    document.querySelector("#contenu").style.fontSize=size.value+"pt"
}
police.onchange=function (){
    document.querySelector('#contenu').style.fontFamily=police.value
}