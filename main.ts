//BMI LESS THAN 18.5 = UNDER WEIGHT.
//BMI IS BETWEEN TO 18.5 TO 24.9 = HEALTHY WEIGHT RANGE.
//BMI IS ABOVE 24.9 = OVEWEIGHT.

// BMI CALCULATOR

let weightinkg = 73;         //<---- weight in kg.

let hightinfeet = (6)/3.37;   //<----height in feet.

let BMI = weightinkg / (hightinfeet * hightinfeet);   //<---formula
console.log(`your BMI is ${BMI}`);
 