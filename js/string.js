var s = "hello world";
console.log(s.charAt(1));
console.log(s.charAt(s.length-1));
console.log(s.substring(1,4));
console.log(s.slice(1,4));
console.log(s.slice(-3));
console.log(s.indexOf("l"));
console.log(s.lastIndexOf("l"));
console.log(s.indexOf("l",3));
console.log(s.split(" "));
console.log(s.replace("h","H"));
console.log(s.toUpperCase());
/* 输出结果
e
d
ell
ell
rld
2
9
3
[ 'hello', 'world' ]
Hello world
HELLO WORLD
 */