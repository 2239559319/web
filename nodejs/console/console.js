//console.log
console.log("Hello World");
//Hello World
console.log("%s","Hello","world");      //输出所有字符串
//Hello world
console.log("%s","Hello",{f00:"FOO"});
//Hello { f00: 'FOO' }
console.log("%d",10,10.5);
//10 10.5
console.log("%d","hello");
//NaN
//其他语句省略

//标准错误输出流输出
console.error("this is an error string");
//用法同console.log

//查看对象内容并输出到控制台
var obj={
    name:"xiaochuan",
    age:12
};
console.dir(obj);
//{ name: 'xiaochuan', age: 12 }

//断言
console.assert(1==2,"raise a exception");
//Assertion failed: raise a exception

//console.time和console.timeEnd统计代码执行时间
console.time("loop");
for(let i=0;i<10;i++){
    i+=3;
}
console.timeEnd("loop");
//loop: 0.165ms

//console.trace将当前栈信息作为标准错误输出

let a=1234;
const b=14;
console.trace('trace');
//Trace: trace
//     at Object.<anonymous> (C:\Users\w2239\Desktop\project\webstorm\2019\nodejs\1\28\console.trace.js:5:9)
//     at Module._compile (internal/modules/cjs/loader.js:688:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
//     at Module.load (internal/modules/cjs/loader.js:598:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:529:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
//     at startup (internal/bootstrap/node.js:285:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)
//
// Process finished with exit code 0