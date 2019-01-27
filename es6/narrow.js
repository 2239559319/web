//箭头函数使用

//(参数1, 参数2, …, 参数N) => { 函数声明 }
let a=(b,c)=>{          //a是函数名
    return b*c;
};
console.log(a(3,4));

//(参数1, 参数2, …, 参数N) => 表达式（单一）//没有返回语句
let b=(c,d)=>c.length+d.length;             //b是函数名
console.log(b("as","wqe"));

// 当只有一个参数时，圆括号是可选的：
// (单一参数) => {函数声明}
// 单一参数 => {函数声明}
let c=a=>a.length;
console.log(c([1,3,5]));

// 没有参数的函数应该写成一对圆括号。
//() => {函数声明}
let d=()=>console.log("hhhhh");
d();