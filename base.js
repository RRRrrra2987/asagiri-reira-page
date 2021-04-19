function sleep(waitMsec) {
    var startMsec = new Date();
    
    while (new Date() - startMsec < waitMsec);
}
var count1=1
var count2=1
function action1(){
    if (count1%2==1){
        let target = document.getElementById("reaction1");
        target.className = "mieru";
    }
    else{
            let target = document.getElementById("reaction1");
        target.className = "mienai";
}
count1=count1+1}
function action2(){
    if (count2%2==1){
        document.getElementById("reaction2").innerHTML="<iframe src='https://turbowarp.org/507730810/fullscreen' allowtransparency='true' width='500' height='400' id='reaction2'></iframe>"
        console.log("b")
    }
    else{
        document.getElementById("reaction2").innerHTML="<div id='reaction2'></div>"
        console.log("a")
}
count2=count2+1}
