// if statement same as java
var num1=100
var num2=10

if (num1>num2)
{
    console.log("num1 is greater than num2")
}else if(num2>num1)
{
    console.log("num2 is greater than num1")
}else
{
    console.log("num1 is equal to num2")
}

//ternary is the same as java
var age=25
var allowRegister=age > 18 ?true :false;

console.log(allowRegister)

//switch statement as same java
var year=2021
var month=4
var dayCount

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        dayCount=31
        break
    case 4: case 6: case 9: case 11:  
        dayCount=30
        break
    default:
        dayCount=-1 // invalid
        break;
}

