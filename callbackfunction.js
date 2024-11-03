//simple callback function

// function greet(name,callback) {
//     console.log('hi'+' '+name)
//     callback()
// }

// function callme() {
//    console.log("i am callback function") 
// }
// greet('rahul',callme)

//example
// const calculate=(a,b,operation)=>{
//     return operation(a,b)
// }
// const addition=calculate(3,4,function (num1,num2){
//     return num1+num2;
// })
// const substraction=(a,b)=>a-b;
// const subresult= calculate(8,3,substraction)


// console.log(addition)
// console.log(subresult)

//const a=[4,1,6,-2,-5,3,4,5,9]

//const firstINteger=(num)=>{return num<0}
//const result=a.find(firstINteger)
//const reresult=a.findIndex(firstINteger)
//const result=a.find(firstINteger)
//const result=a.find(firstINteger)
//console.log(result)
//console.log(reresult)
// a.forEach((num)=>{
//     console.log("array num",num)
// })


//promices


// const Ticket =new Promise(function (resolve,reject) {
//     const is_boreded=true
//     if(is_boreded){
//         resolve ("you are not in the flight")
//     }
//     else{
//         reject("your not in the floght")
//     }
// })
// Ticket.then((data)=>{
// console.log("whooo")
// })
// .catch((data)=>{
//     console.log("oo no")
// })

//example of promices using callback

function getcheese() {
    return new Promise((resolve,_reject)=>{
        setTimeout(()=>{
            const cheese="🧀"
            resolve (cheese)
        },2000)
    });
}

function getdough() {
    return new Promise((resolve,_reject)=>{
        setTimeout(()=>{
            const dough=cheese+"🍩"
            resolve (dough)
        },2000)
    });
}

function bakepizza() {
    return new Promise((resolve,_reject)=>{
        setTimeout(()=>{
            const pizza=dough+"🍕"
            resolve (pizza)
        },2000)
    });
}
// getcheese().then((cheese)=>{
// console.log("here is cheese",cheese)
// return getdough((cheese))
// })
// getdough.then((dough)=>{
//     console.log("here is dough",dough)
//     return bakepizza((dough))
//     })
//     .Catch((data)=>{
//         console.log("errot occer",data)
//     })

    //using async  await


    // async function orderPizza() {
    //     try{
    //         const cheese=await getcheese();
    //       console.log(cheese)  
    //       const dough=await getdough();
    //       console.log(dough)
    //     }
    //     catch{
    //         console.log(Error)
    //     }
    // }
