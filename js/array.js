function find(x,y) {
    for(let i=0;i<x.length;i++){
        if(y==x[i])
            return i;
    }
    return null;
}
let arr=[9,7,4,2];
console.log(find(arr,2));
console.log(find(arr,5));