/**
 * Casting Created by Phirom Yim on 4/13/14.
 */
//casting treat string as number and number as string
var stringVar = "6"; //string 6 not value of 6
var result = 7 + stringVar;
console.log(result);//concatenating as "&6
//to cast you have to put variable in parenthesis (stringVar)

var result1 = 7 + Number(stringVar);
//doesn't give it value but casting it like an actor casted in a play

var areaCode = 407;
var firstPart = 203;
var secPart = 4529;
//(407)203-4529
var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + " - " + String(secPart);
//String(x) casting number as strings
//"(" add in for phone number format, use concatenating
console.log(phoneNo);