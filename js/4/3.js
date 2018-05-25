/*Array对象
创建对象示例new
*/
var m=new Array(4,1,4),n=new Array(6,2);
console.log(m);//[ 4, 1, 4 ]
console.log(m.length)//长度是属性
m=m.concat(n);//连接两个或多个数组
console.log(m);
m.sort()//排序
console.log(m);
m.pop();//删除并返回数组最后一个元素
console.log(m);
m.shift();//删除并返回数组第一个元素
console.log(m);
m.push(10)//向末尾添加一个元素并返回新数组长度
console.log(m.length)