/* console.log(process.argv[2])
console.log(process.argv[3])
console.log(process.argv[4])
*/

var operation = Number(process.argv[2])
var firstNum = Number(process.argv[3])
var secondNum = Number(process.argv[4])
var thirdNum = Number(process.argv[5])
var total

console.log(Number(process.argv[2]))

if(operation==1)
{
  total = firstNum + secondNum + thirdNum
  console.log('the sum of the numbers is ' + total)
}
else if (operation==2) {
  total = firstNum * secondNum * thirdNum
  console.log('the product of the numbers is '+ total)
}
