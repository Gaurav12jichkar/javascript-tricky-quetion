// function name(name,msg) {
//     console.log("hello my name is"+name)
//     return msg();
// }
// function msga(hello) {
//     console.log("hey your great");
//     return hello();
// }
// function hello(){
//     console.log("sun chhutiya")
// }
// name("gaurav",()=>{
//    msga(hello,()=>{
//     hello()
//    })
// })


// basic promices


// let promices= new Promise( (resolve,reject) =>{
//     let success=true;
//     if (success){
//         resolve("data fetch succesfully")
//     }
//     else{
//         reject("somthing went wrong")
//     }
// })
// promices.then((result)=>{
//     console.log("reslts is "+result)
// }).catch((error)=>{
//     console.log("somthing went wrong"+error)
// }).finally(()=>{
//     console.log("basic promices succesfuly ")
// })

//chain promicess

// Chaining Promises
// let promise1 = new Promise((resolve, reject) => {
//    setTimeout(()=>{resolve("hjfghsgfhdgh")},1000)
//   });
  
//   let promise2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{resolve("kkkkkkksh")},2000)
//   });
  
//   promise1
//     .then((result) => {
//       console.log(result); // Output: First Promise
//       return promise2;
//     })
//     .then((result) => {
//       console.log(result); // Output: Second Promise
//     });
  

// function getchees(){
//   return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//   const chees="🧀";
//   resolve(chees)
// },1000)
//   })
// }
// function makeDough(chees){
//   return new Promise((resolve,reject)=>{ 
// setTimeout(()=>{
//   const dough= chees+"🍩";
//   resolve(dough)
// },2000)
//   })
// }
// function bakepizza(dough){
//   return new Promise((resolve,reject)=>{
// setTimeout(()=>{
  
//   const pizza= "🍕🍕"+ dough;
//   resolve(pizza)
// },2000)
//   })
// }
// getchees().then((chees)=>{
// console.log("here is you"+chees)
// return makeDough(chees)
// }).then((Dough)=>{
//   console.log("here is you pizza dough ready")
//   return bakepizza(Dough)
// }).catch((error)=>{
//   console.log("error occured",error)
// })


// let promces1= new Promise((resolve,reject)=>{
// let success=true;
// if(success)
// {
//   resolve("hey whatsapp")
// }
// else{
//   reject("bhfgxcbfnbxmfbj")
// }
// })

// let promces2= new Promise((resolve,reject)=>{
//   let success=true;
//   if(success)
//   {
//     resolve("hey whatsapp11111111")
//   }
//   else{
//     reject("333345678")
//   }
//   })

//   promces1.then((result)=>{
//     console.log("ffdsjghhf",result)
//     return promces2;
//   })
//   .then((result)=>{
//     console.log("graetre"+result)
//   })
//   .catch((error)=>{
//     console.log("ERROr",error)
//   })

//reversed integer
// let num =23;
// let numstr= num.toString();
// let reverseinter=numstr.split("").reverse().join("");
// console.log(reverseinter)


//commaon number from 2 arry

// let array1=[1,2,3,4,5,6];
// let array2=[3,4,5,6,7,8,9]
// let common=[];
// for (const x of array1) {
//     if(array2.includes(x)){
//         common.push(x)
//     }
//     console.log(common)
// }



//find missing number in an array

// let array1=[1,2,3,4,6,7,8]
// const n=array1.length+1;
// const totalsum=(n*(n+1)/2);
// const arraysum=array1.reduce((acc,curr)=>acc+curr,0);
// console.log(totalsum-arraysum)

//if differnce is 2

// let array1=[2,4,6,8,10,14]
// const n=array1.length+1;
// const totalsum=(n*(n+1));
// const arraysum=array1.reduce((acc,curr)=>acc+curr,0);
// console.log(totalsum-arraysum)

// const input1={a:1,b:2,c:3,d:10,e:12}
// const input2={a:66,b:22,c:44,d:10,e:12}
// let obj={}
// for(let i in input1){
//     if(input1[i]==input2[i]){
//         obj[i]= input1[i]
//     }
//     console.log(obj)
// }

//unique
//  const array=[1,2,5,7,8,2,4,5,6,7,3,4,5,6,67]
//  const unique=[...new Set(array)]
//  console.log(unique)



//callback revision

// function greeting(greet,after) {
//     console.log("hello good",greet)
//     return after()
// }
// function greeting2(greet2,night) {
//     console.log("hello good",greet2)
//     return night()
// }
// function gretting3() {
//     console.log("hello good night")
// }
// greeting("morning",()=>{
//     greeting2("afternoon",()=>{
//         gretting3()
//     })
// })

//promices

// function greetin1() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
        
//         resolve("good morning")
        
//     }, 1000);
//   })  
// }

// function greetin2(greetin3) {
//     return new Promise((resolve,reject)=>{
//       setTimeout(() => {
          
//           resolve("good afternoon")
//           return greetin3()
//       }, 1000);
//     })  
//   }

//   function greetin3() {
//     return new Promise((resolve,reject)=>{
//       setTimeout(() => {
          
//           resolve("good night")
         
//       }, 1000);
//     })  
//   }
//   greetin1().then((data)=>{
//     console.log("greeting1 is sovled",data)})
//   .then((data)=>{
//     console.log("greeting2 is soved",data)
//   })
//   .then((data)=>{
//     console.log("greeting 3 is solved",data)
//   }).catch((error)=>{
//     console.log(error)
//   }).finally(()=>{
//     console.log("hey your all greeting are complete")
//   })
  

// let apires=new Promise((resolve,reject)=>{
// setTimeout(() => {
//   resolve("responce from api")  
// }, 1000);
// })
// async function getdata(){
//     let result=await apires;
//     console.log("heyy hava great day",result)
// }
// getdata()

//duplicate
// const arrnumber=[1,2,3,4,5,6,2,34,56,78]
// const duplicate=arrnumber.filter((val,index,arr)=>arr.indexOf(val)!==index)
// console.log(duplicate);

 //const str="hey god kya mere dreams pure hone kya "

//  const reversed=str.split("").reverse().join("");
//  console.log(reversed)
// const array=[1,2,3,[3,4,[5,6,4,5,6,78,8]]]
// let newarr=array.flat(Infinity)
// console.log(newarr)
   
// const array=[1,2,3,4,5,6,7]
// largest_element=Math.max(...array)
// //console.log(largest_element)
// index=array.indexOf(largest_element)
// array.splice(index,1)
// second_largest=Math.max(...array)
// console.log(second_largest)

// const inputNum=5
// var fact=1;
// if(inputNum<0){
//   console.log("factorial is not possible")
// }
// else{
//   for (let i = 1; i <=inputNum;i++){
//     fact=fact*i;
//   }
//   console.log(fact)
//   }

// var array1=[2,3,4,5,678,4,35];
// var array2=[2,234,56,6,7];
// let internsection=array1.filter((ele)=>{
//   return array2.includes(ele)
// })
// console.log([...new Set(internsection)])


// var array1=[2,3,4,5,678,4,35];
// var array2=[2,234,56,6,7];
// var union=[...array1,...array2]
// console.log(union)
// console.log([...new Set(union)])

//duplicate

// const array=[2,3,2,3,4,4,5,6,6,7,899,3]
// const duplicate= array.filter((val,index,arr)=>arr.indexOf(val)!==index)
// console.log(duplicate)

//unique
// const array=[2,3,2,3,4,4,5,6,6,7,899,3]
// const unique= array.filter((val,index,arr)=>arr.indexOf(val)===index)
// console.log(unique)
