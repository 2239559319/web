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
    console.log(b[0]);
}
findB(1410);