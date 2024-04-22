

import inquirer from "inquirer";
import chalk from "chalk";

 const Currency : any ={
          "USD": 1, //Base Currncy.     
          "INR": 83.39,
          "GBP": 0.81,
          "EURO": 0.94,
          "SAR": 3.75,
          "AED":  3.67,
          "PKR":277.69, 
       };
 
let user_Answer= await inquirer.prompt (
    [
        {

         name: "from",
         type: "list",
         message: (chalk.green.bold.underline("Input From Currency")),
         choices: ["PKR","USD", "INR", "GBP", "EURO", "SAR", "AED"]
},
       {  name: "to",
         type: "list",
        message: (chalk.yellowBright.bold.underline("Input to Currency")),
        choices: ["PKR","USD", "INR", "GBP", "EURO", "SAR", "AED"]

     },
     {
         name: "amount",
         type: "input",
         message: (chalk.bgCyan.bold.underline("Input Amount")),
     } 
    ]
)
 


let fromamount = Currency[user_Answer.from];

let toamount = Currency[user_Answer.to];

let amount=user_Answer.amount;

let baseAmount= amount / fromamount;

let convertedAmount = Math.round( baseAmount * toamount);

//console.log("\t",chalk.bgGreenBright.bold(convertedAmount));
console.log(chalk.blueBright.bold (`Your Selected Currency exchange rate is`+ (chalk.green.bold `${fromamount}`), `converted with exchange rate of your asked currency`+(chalk.green.bold `${toamount}`), `now you can get =:-` + (chalk.green.bold`${convertedAmount}`), `Amount after Conversion`));







       