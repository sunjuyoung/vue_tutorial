//가상의 서버 데이터 요청 및 그결과 랜덤값 반환
function reqData(){
    return Math.random() >0.5;
}

const productReady = new Promise((resolve,reject)=>{

    let bStatus = reqData();
    if(bStatus){
        resolve('상품이 성공적으로 배송');
    }else{
        reject('failure')
    }

});

productReady.then((result)=>{

    console.log(result)
}).catch((result)=>{
    console.log(result);
})

