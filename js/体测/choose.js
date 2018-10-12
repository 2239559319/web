//体测预约界面找场次预约按钮
function matchNum(numId) {
    var t = document.getElementsByTagName('tr');
    for (var i = 0; i < t.length; i++) {
        if (t[i].cells[0].textContent == numId) {
            return t[i].cells[6];
        }
    }
}
function findB(numId) {
    var t=matchNum(numId);
    var b=t.getElementsByTagName('button');
    return b[0];
}


function choose(numId) {
    var b=findB(numId);
    if(b.disabled==false){
        b.click();
        var termId=document.getElementById(numId.toString());
        var checks=termId.getElementsByTagName('input');
        for(var i=2;i<checks.length-1;i++){
            checks[i].checked=true;
        }
        checks[checks.length-1].click();
        document.getElementById(numId.toString()+'_confirm').click();
    }
}
setInterval(
    choose,
    1000,
    1401
);