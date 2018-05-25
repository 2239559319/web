//自定义对象
/*
1)使用Object创建对象
var cat= new Object();
cat.name = "Tom";
cat.color= "blue";
　　(2)对象字面量创建对象
　　　　　
var cat = {
   name : "Tom",
   color : "blue"
};
*/
function peron(name,sex) {
    this.name = name;
    this.sex = sex;
    this.print = function () {
        console.log(this.name);
    }
}
var a = new peron("xiaochuan","boy");//创建对象必须要new
console.log(a.name);
a.print()