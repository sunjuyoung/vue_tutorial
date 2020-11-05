//msg(hello);

function msg(cb){
    console.log('1');
    cb();
    console.log('3');
}

function hello(){
    setTimeout(()=>{console.log('2')});
}

const numbers = [1,34,56,7834,23,3456,687];


numbers.sort((a,b)=>{
    return a-b;
});


console.log(numbers);


console.log("--");
let myObj = {"name":'홍길동',"age":13};
console.log(myObj);
let strJson = JSON.stringify(myObj);
console.log(strJson);
let newObj = JSON.parse(strJson);
console.log(newObj);


fetch('https://jsonplaceholder.typicoe.com/users')
    .then(res=>res.json())
    .then(pJSON=>console.log(pJSON));