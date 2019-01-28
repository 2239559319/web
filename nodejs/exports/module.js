var foo=function (name,age) {
    _name=name;
    _age=age;
};

foo.prototype.getName=function () {
    return _name;
};
foo.prototype.getAge=function () {
    return _age;
};
foo.prototype.name="xiaochuan";
foo.prototype.age=21;

module.exports=foo;