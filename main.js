//BMI LESS THAN 18.5 = UNDER WEIGHT.
//BMI IS BETWEEN TO 18.5 TO 24.9 = HEALTHY WEIGHT RANGE.
//BMI IS ABOVE 24.9 = OVEWEIGHT.
// BMI CALCULATOR
var weightinkg = 73; //<---- weight in kg.
var hightinfeet = (6) / 3.37; //<----height in feet.
var BMI = weightinkg / (hightinfeet * hightinfeet); //<---formula
console.log("your BMI is ".concat(BMI));
