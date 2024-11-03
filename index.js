//console.log("hello")
//1
// let a=[];
// let b=[];
// console.log(a==b)//false
// console.log(a===b)//false

//2

// let a=[];
// let b=a;
// console.log(a==b)//true
// console.log(a===b)//true
//3

// let a=[20];
// let b=[20];
// console.log(a[0]==b[0])
// console.log(a[0]===b[0])
//4

// let z=[1,2,3,4]
// console.log(...z)
//5
//console.log(typeof NaN)

//6
// let data= 10 - -10;//20 number
//let data= 10 + -10;//0 number
//let data= "10" - -10;//20 number
//let data= "10" - 10;//0 number
//let data=  "10" + 10;//1010 string
// console.log(  typeof data)
//7
// const set = new Set([1,2,3,4,4,5,5]);//1,2,3,4,5
// console.log(set )
//8
// let data ={name:"anil"}
// console.log(delete data.name)//true
// console.log(data)
//9
// let data ={name:"anil"}
// console.log(delete data)//false
// console.log(data)

//10
// const data=["peter","harry","lava"]
// const[...y]=data;
// console.log(...y)//peter","harry","lava

// const data=["peter","harry","lava"]
// const[y]=data;
// console.log(y)//peter

//11
// const data=["peter","harry","lava"]
// const[,y]=data;//second value
//  console.log(y)

//12
// const data = { name: "anil", age: 20, skill: "35" }
// const { name } = data;
// console.log(name)

//how to get name property without getting .operator
//13
// let data2 = { name: "anil", age: 20, skill: "35" }
// let data1 = {skill:"gahhs",hobby:"hbjkshfk" }
// data2 ={...data2,...data1}//merg 2 object
// console.log(data2)

//14
// let data2 = { name: "anil", age: 20, skill: "35" }
//  let data1 = {skill:"gahhs",hobby:"hbjkshfk" }
// data2 ={...data2,...data1}//merg 2 object
// console.log(data2)
//15
// const  name ="anil"
// console.log(name())

//16
// const result =false ||{}||null
// console.log(result)
//19
//console.log(Promise.resolve(5))//Promise {<fulfilled>: 5}
//20
//console.log("heart"==="heart")
//21
// let name="sidhu"
// function getName() {
//     console.log(name)
//     let name='anil'
//}
//getName()//error provide krenga

//27
// const name ="subcribe";
// const age ="21"
// console.log(isNaN(name))
// console.log(isNaN(age))

//28
// let person ={name:"anil"};
// //what can modify person object
// Object.seal(person);
// person.name="gaurav";
// console.log(person)
//29
//let data =[2,8,4,6];
//remove first element 
// data.shift();
// console.log(data)
//30
// let data =[2,8,4,6];
// data.pop();
// console.log(data)
//31
//cheak any number is even or odd 
// let a=30
// console.log(30%2==0)

//43
// let a=1;
// let c=2;
// console.log(--c===a)//true
//44
// let a=1;
// let c=2;
// let b=1;
// console.log(a===b===--c)//false
//45
// console.log(3*3)//9
// console.log(3**3)//27
// console.log(3***3)//error

//46

// console.log(a)
// var a;

//47
//console.log([[[[[1]]]]])
 // 52
//  for (var i=0;i<3 ;i++) {
//     setTimeout(()=>console.log(i),1)
    
//  }//333
//53
// for (let i=0;i<3 ;i++) {
//     setTimeout(()=>console.log(i),1)
    
//  }0,1,2

//54
// console.log(+true)//1
// console.log(typeof +true)//number
//55
 //console.log(!"anil")//false
//56
