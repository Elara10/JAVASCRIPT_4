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
var num1=455;
var num2=56.78;

//Strings
var str1="This is a string";
var str2='This is also a string';


//Objects

var marks={
    A:56,
    f:45
}
// console.log(marks);

//Booleans
var a=true;
var b=false;
// console.log(a,b);



//undefined

var und;
// console.log(undefined)


//null
var n=null;
// console.log(n);


/*
At a very high level,there are two types of data types in javascript
1.Primitive data types:number,null,string,symbol,boolean,bigInt,undefined
2.Reference or Non-Primitive data types:Array and  Objects
*/





var arr=[5,2,6,2]
// console.log(arr)


//Operators in Javascript

//Arithmetic operators
var a=100;
var b=10;
// console.log("The value of a+b is ",a+b);
// console.log("The value of a-b is ",a-b);
// console.log("The value of a*b is ",a*b);
// console.log("The value of a/b is ",a/b);

//Assignment Operators

var c=b;
// c+=2; c+2
// c-=2;  c-2
// c*=2;  c*2
// c/=2;  c/2
// console.log(c);


//Comparison operators
var x=34;
var y=4;
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

 console.log(!true);
 console.log(!false);