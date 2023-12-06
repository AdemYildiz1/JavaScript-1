//Arithmetic
console.log(3+5*4-6)

//Assigments
var x =5
x+=5  // 10-> same as x=x+5
console.log(x)

//Comparision (>=,<=,!=..etc)
var one=1
var one_again=1
var one_string="1"

console.log(one==one_again) //true
console.log(one===one_again)//true
console.log(one==one_string)//true -> checking just value not type
console.log(one===one_string)//false ->check type and value

//Logic -no single and, or (&,|) operator in JS
console.log((5<2)&&(2>=3))
console.log((5<2)||(2>=3))
console.log(!(5==3))
