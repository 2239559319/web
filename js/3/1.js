//异常处理,捕获，抛出
var m=10;
var n=parseInt(prompt("输入一个整数",""));
try {
    if(n==0){
        throw "出现错误";
    }
    else{
        document.write(n);
    }
}
catch (exception){
    document.write(exception);
}