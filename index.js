//1.WAYS TO PRINT IN JAVASCRIPT
// console.log("Hello World");
// alert("me");

// document.write("this is document write")

//2.JAVSCRIPT CONSOLE API

// console.log("Hello World", 4 + 2, "Another log");
// console.warn("this is a warning");
// console.error("This is an error")



//3.Javascript Variables
//What are variables?-Containers to store data values.


/*

multi 
line 
comment
*/
//   var number1=34;
//   var number2=56;
//   console.log(number1+number2);


//4.Data types in js
//Number
var num1 = 455;
var num2 = 56.78;

//Strings
var str1 = "This is a string";
var str2 = 'This is also a string';


//Objects

var marks = {
    A: 56,
    f: 45
}
// console.log(marks);

//Booleans
var a = true;
var b = false;
// console.log(a,b);



//undefined

var und;
// console.log(undefined)


//null
var n = null;
// console.log(n);


/*
At a very high level,there are two types of data types in javascript
1.Primitive data types:number,null,string,symbol,boolean,bigInt,undefined
2.Reference or Non-Primitive data types:Array and  Objects
*/





var arr = [5, 2, 6, 2]
// console.log(arr)


//Operators in Javascript

//Arithmetic operators
var a = 100;
var b = 10;
// console.log("The value of a+b is ",a+b);
// console.log("The value of a-b is ",a-b);
// console.log("The value of a*b is ",a*b);
// console.log("The value of a/b is ",a/b);

//Assignment Operators

var c = b;
// c+=2; c+2
// c-=2;  c-2
// c*=2;  c*2
// c/=2;  c/2
// console.log(c);


//Comparison operators
var x = 34;
var y = 4;
// console.log(x==y);
// console.log(x<=y);
// console.log(x>=y);
// console.log(x>y);
// console.log(x<y);




//Logical operators

//AND

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);


//OR

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);


//NOT

//  console.log(!true);
//  console.log(!false);



// FUNCTION
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1,c2);



//conditionals in js
//single if --
// var age=41;

// if(age>18)
// {
//     console.log('You can drink rasna  water')
// }

//if -else statement

// if(age>18)
// {
//     console.log('You can drink rasna  water')
// }
// else{
//     console.log('You cannot drink rasna water')
// }





//if-else ladder




//lOOPS

// var arr = [1, 2, 3, 4, 5, 6,7];
// console.log(arr)
// for(var i=0;i<arr.length;i++)
// {
//     if(i==2){
//         continue;
//     }
//     console.log(arr[i])

// }
// arr.forEach(function(element){
//     console.log(element)
// })

//WHILE LOOP

// let j = 10;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }


//DO-WHILE LOOP
// do {
//     console.log(arr[j]);
//     j++;
// }
// while (j < arr.length);


let myArr = ["Fan", "Camera", 34, null, true];
//Array methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry");
// myArr.shift()
// console.log(myArr.unshift("Harry"));
// console.log(myArr);
// 
// (6) ['Harry', 'Fan', 'Camera', 34, null, true]
// myArr.toString()
// 'Harry,Fan,Camera,34,,true'
// myArr.sort()
// (6) [34, 'Camera', 'Fan', 'Harry', null, true]




//String methods in js

let myLovelyString = "Harry is a good boy good good";
// console.log(myLovelyString.length)  //29
// console.log(myLovelyString.indexOf("good"))  //11
// console.log(myLovelyString.lastIndexOf("good"))
// console.log(myLovelyString.slice(1,4))
// let v=myLovelyString.replace("Harry","Rohan");
// v=v.replace("good","bad")
// console.log(v,myLovelyString)

// DATE

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());




//DOM MANIPULATION
let elem = document.getElementById('click');
// console.log(elem);

let elemclass = document.getElementsByClassName("container")
// console.log(elemclass);

// elemclass[0].style.background='yellow';
elemclass[0].classList.add("bg-primary")
elemclass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

// tn= document.getElementsByTagName('div')
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para"
// tn[0].appendChild(createdElement)

// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold"
// tn[0].replaceChild(createdElement2, createdElement)


// sel = document.querySelector('.container')
// console.log(sel)

// sel = document.querySelectorAll('.container')
// console.log(sel)




// function clicked() {
//     console.log("The button was clicked")
// }

// window.onload = function () {
//     console.log('The document was loaded')
// } 
//EVENTS IN JAVASCRIPT
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked</b>"
//     console.log("click on Container")
// })

// firstContainer.addEventListener('mouseover',function(){
//     console.log("mouseover on Container")
// })

// firstContainer.addEventListener('mouseout',function(){
//     console.log("mouse out of Container");
// })


// let prevHTML= document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("mouse up when clicked on Container");
// })


// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked</b>"
//    console.log("mouse down when clicked on Container");
// })



//SETTIMEOUT AND SETINTERVAL
// sum=(a,b)=>{
//     return a+b;
// }

// logkaro=()=>{
//     document.querySelectorAll('.container')[1].innerHTML="<b>Set interval fired</b>"
//     console.log("I am your log");
// }
// clr=setTimeout(logkaro,5000);
//USE CLEARINTERVAL(CLR)/CLEARTIMEOUT(CLR) TO CANCEL SETINTERVAL/SETTIMEOUT
// clr=setInterval(logkaro,2000);



//JAVASCRIPT LOCALSTORAGE
// localStorage.setItem('name','harry')
// undefined
// localStorage
// Storage { name: "harry", length: 1 }
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();
// "harry"




//JSON
// obj = { name: "harry", length: 1, a: { this: 'tha\\"t' } }
// // --{"name":"harry","length":1,"a":{"this":"tha\\\"t"}}
// jso = JSON.stringify(obj);
// // console.log(typeof jso)
// // console.log(jso)
// parsed = JSON.parse(`{"name": "harry", "length": 1 , "a":{"this":"that"}}`)
// console.log(parsed);


//TEMPLATE LITERALS--BACKTICKS
a=34;
console.log(`this is my ${a}`)