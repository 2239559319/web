let i=1;
let timer=setInterval(()=>{
    console.log(i);
    i++;
    if(i>10){
        clearInterval(timer);
    }
},1000);
timer.unref();  //取消回调
timer.ref();    //回复回调
//1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
//setTimeout()一样用法