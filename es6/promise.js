var promise = new Promise(function (resolve, reject) {
    var htmlobj=$.ajax({url:"/",success:function (data) {
            resolve(data);
        }});
});
promise.then(function (data) {
    console.log(data);
});

async function getbody() {
    var body = await $.get();
    return body;
}
var body=getbody().then(function (data) {
    console.log(data);
});
console.log(body);