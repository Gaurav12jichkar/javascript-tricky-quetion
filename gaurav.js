// for (let index = 0; index < 10; index++) {
//     setTimeout(() => {
      
//     console.log(index)
//     }, 1000);
    
    
// }

// for (var index = 0; index < 10; index++) {
//     setTimeout(() => {
       
//         console.log(index)
//     }, 1000);
    
    
// }


// age=prompt("enter the age")

// if (age>20) {
//     console.log("your are in college")
// } else {
//     console.log("your are in school")
// }


//  var age=prompt("enter the age")
// switch (age) {
//     case "12":
//         console.log("youe are student")
//         break;
//         case "23":
//         console.log("youe are college passout")
//         break;
//         case "32":
//         console.log("youe are marride age")
//         break;
//         case "42":
//         console.log("youe are last stage of young")
//         break;
//         case "52":
//         console.log("youe are retired")
//         break;
//         case "62":
//         console.log("youe are old")
//         break;

//     default:
//         console.log("you enter wrong key")
//         break;
// }


// const word=["hello","words","welcome","sleerp"]
// console.log(word.push("kanda"))
// console.log(word.unshift("kanda"))

// console.log(word.splice(1,1))
// console.log(word)

//function


// function addition(a,b) {
    
//     console.log(a+b)
// }
// addition(2,4)

//function expression

// const variable= function (a,b) {
//    return(a+b) 
// }
// console.log(variable(2,5))

//neasted function

// function add_square(a,b) {
//     function square(x) {
//         return x*x
//     }
//     return square(a)+(b)
// }
// const a= add_square(2,3);
// const b= add_square(4,3)
// console.log(a,b)

//advance function

//  const lal=()=>{
//     console.log("hello")
// }

// console.log(lal())
// const vaee=(a,b,s)=>{
//     return a+b+s}

// console.log(vaee(4,7,4))

//callback function

// function greet(name,ccc) {
//   console.log("hi"+" "+name)  
//   ccc()
// }
// function callme(ddd) {
//     console.log("your doing really good")
//     ddd()
// }
// function ddd() {
//     console.log("hhhhhh")
// }

// greet("allu",callme(ddd))

//array callback function

//const array=[2,3,-4,-56,7,35,9]
// const firstNeg=(num)=>{
// return num<0
// }

//const result =array.find(firstNeg)
// 

 //const person={mame:"jgdsajf",hghgs:"hjgfs",hrjd:"dshfuhds"}
// array.forEach(element => {
//   console.log("element",element)
// });

//map
 //const array =[2,3,4,56]
//  const mapArray= array.map((num)=>{
//     return num*2
//  })
//  console.log(mapArray)

//filter

// const filterArray=array.filter((num)=>{
//     return num>56;
// })
// console.log(filterArray)

//redue
// const reduceArray=array.reduce((cur,nex)=>{
//     return cur+nex
// }
// )
// console.log(reduceArray)

//reverse array
// const allu= array.reverse()
// console.log(allu)
// let array=[34,345,89,34,75,9769]
//  var getNew=[]
//  len=array.length;
//  for (let i =len; i>=1 ; i--){
//   getNew.push(i) 

//  }
//  console.log(getNew)
 
 
//promices

// const ticket=new Promise (function (res,rej) {
// const isBored =false
//     if (isBored) {
//         res("youre redy for flight flying")
//     }
//     else{
//         rej("youre  not redy for flight flying")
//     }
    
// })
// ticket.then((data)=>{
//     console.log("whooo gets your flight")


// })
// .catch((data)=>{
//     console.log("ohh no u will not ablike ")
// })

//using ascyn processing

// function getcheese() {
//    return new Promise((resovle,reject)=>{
//     setTimeout(() => {
//         const cheese="🧀";
//         resovle(cheese)
//     }, 2000);
//    }) 
// }
// function makedough(cheese) {
//     return new Promise((resovle,reject)=>{
//      setTimeout(() => {
//         const dough=cheese+"🍩";
//          resovle(dough)
//      }, 2000);
//     }) 
//  }
//  function makePizza(dough) {
//     return new Promise((resovle,reject)=>{
//      setTimeout(() => {
//          const pizza=dough+"🍕";
//          resovle(pizza)
//      }, 2000);
//     }) 
//  }
//  getcheese().then((cheese)=>{
//     console.log("here is your chees",cheese)
//     return makedough(cheese)
//  })
//  .then((dough)=>{
//     console.log("here is your dough",dough)
//     return makePizza(dough)
//  })
//  .then((pizza)=>{
//     console.log("here is your pizza",pizza)
    
//  })
//  .catch((data)=>{
//     console.log( "error occor")
//  })

//spred operator
// const mern =["react","node"]
// const stack=[...mern,"express","mongodb"]
// console.log(stack)

//practice problem 
//const arrNumber=[1,2,3,4,5,7,4,3,43]
// const duplicate=arrNumber.filter((val ,index,arr)=>
// arr.indexOf(val)!==index)
// console.log(duplicate)


//unic number
// const arrNumber=[1,2,3,4,5,7,4,3,43]
// const unic=arrNumber.filter((val ,index,arr)=>
// arr.indexOf(val)===index)
// console.log(unic)


//max and min

//const arrNumber=[1,6,4,2,3,44,567,55,88]
// const MaxFun =(arr)=> {
//    return arr.reduce(function (pre,cur) {
//     return pre>cur ?pre:cur
//    }) 
// }
// console.log(MaxFun(arrNumber))

//min
// const arrNumber=[1,6,4,2,3,44,567,55,88]
// const MinFun =(arr)=> {
//     return arr.reduce(function (pre,cur) {
//      return pre<cur ?pre:cur
//     }) 
//  }
//  console.log(MinFun(arrNumber))

//second largest number

// const array=[2,4,5,78,8,74,]
// const lrgest =(arr)=>{
//     First_largest= Math.max(...arr)
//      index=arr.indexOf(First_largest)
//     arr.splice(index,1)
//     secondLargest=Math.max(...arr)
//     return(secondLargest)
    
// }
// console.log(lrgest(array))

//find missing number in agiven array 

// const arrNum=[2,4,8,12]
// const missNum=[]
// const missingValue=(arr)=>{
// const minValue=Math.min(...arrNum)

// const Maxvalue=Math.max(...arrNum)
//  for (let i=minValue;i<Maxvalue;i++){
//     if (arr.indexOf(i)<0) {
//      missNum.push(i)   
//     }
// }
//     return missNum
// }  
//     console.log(missingValue(arrNum))      
    
 
//odd and evden 
// const value=[1,24,6,57,67,45,7,67,534,56]
// const even=value.filter((item)=>{
//     if(item%2==0)
//     {
//       console.log("its even number");
//     }
//     else{
//       console.log("its  odd  number");
//     }
// })
// console.log(even)

//factorial number

// const inputNum=prompt("enter numner")
// var fact=1;
// if (inputNum<0) {
//   console.log("factoral is not poassible")
  
// }
// else{
//   for(let i=1;i<=inputNum;i++){
//     fact=fact*i
//   }
//   console.log(fact)
// }


//reverse string in js

// var str="my name is gaurav"

// function reversStr(str) {

   
//   var revrt=str.split("").reverse().join("")
//    //console.log(revrt)
   
//         let allu =revrt.split().reverse().join("")
//         console.log(allu);
     

// }
// reversStr(str)

//splice

// const number=[1,2,3,4,5,6]
// number.splice(2,1)
// console.log(number)

//revese word by word

// let str="allu is karelaa"
// let sre1=str.split(" ")

// console.log(sre1)


// const str="this is javascript programming"

// const arrofstr=str.split("")
// const allu= console.count(arrofstr)
// console.log(allu)
//console.log(arrofstr)






















































































































































































































































































































































































































































































































































































































































