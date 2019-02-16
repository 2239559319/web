var timer=setInterval(function () {
    var date=new Date();
    if(isRightTime(date)){
        console.log("到时间了");
        //dosomethings主代码
        clearInterval(timer);
    }
    console.log(date)
},1000);
function isRightTime(date) {            //计算是否到时间
    if(date.getMinutes()==53){          //53分时
        return true;
    }
    else{
        return false;
    }
}