#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter your first number", type: "number", name: "firstNumber" },
    {message: "Enter your second number", type: "number", name: "secondNumber" },
    {message: "Select one of operater to porfome action", type:"list", name:"operater",choices:
["ADDITION", "SUBTRACTION", "MULTLIPICATION", "DIVISION"],},
]);
// CONDITIONAL STATMENT
if(answer.operater === "ADDITION"){
    console.log(answer.firstNumber + answer.secondNumber) ;
}
else if(answer.operater === "SUBTRACTION"){
    console.log(answer.firstNumber - answer.secondNumber) ;
}
else if(answer.operater === "MULTLIPICATION"){
    console.log(answer.firstNumber * answer.secondNumber) ;
}else if(answer.operater === "DIVISION"){
    console.log(answer.firstNumber / answer.secondNumber) ;   
}
else{"please select correct operater "}
 
console.log('THE AND');