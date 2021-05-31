const chalk = require('chalk');
const readLineSync = require('readline-sync');
let userName= readLineSync.question("Hello, may I have your name? ");

console.log('Welcome', chalk.yellow(userName))
let score = 0;
let level = 1;
console.log(chalk.blue.underline.bold('Let us see how well you know JavaScript'));
console.log(' ');

const play = (question, answer) => {

let userAnswer= readLineSync.question(question);

if(userAnswer.toLowerCase()===answer.toLowerCase())
{
  console.log("Yay!! You know me");
  score=score+1;
}
else if(userAnswer.toLowerCase()!==answer.toLowerCase())
{
  console.log("That's wrong!");
  console.log(chalk.yellow("--------------------"))
}

if (score>5){
  level=2;
}
else if(score>10){
  level=3;
}
console.log(chalk.green.bold('current score:', score));
console.log(chalk.green.bold('current level:', level));
}

var questions = [{
  question:`Inside which HTML element do we put the JavaScript? 
  a: <js> 
  b: <nojs> 
  c:<script>`,
  answer:'c',
},
{
  question:`JavaScript is a ___ -side programming language. a:server b: client c:both`,
  answer:'c',
},
{
  question:`Which of the following will write the message “Hello” in an alert box? 
   
  a: alertBox(“Hello DataFlair!”);  
  b: alert(“Hello DataFlair!”);`` ,
  c : msgAlert(“Hello DataFlair!”);`,
   answer:'b',
},
{
  question:`Which of the following will write the message “Hello” in an alert box? 
   
  a: alertBox(“Hello DataFlair!”);  
  b: alert(“Hello DataFlair!”);`` ,
  c : msgAlert(“Hello DataFlair!”);`,
   answer:'b',
},
{
  question:`How do you find the minimum of x and y using JavaScript?
   
  a: Math.min(x,y)
  b: min(x,y) 
  c : (x,y).min()`,
   answer:'b',
},
{
  question:`Which of the following will write the message “Hello” in an alert box? 
   
  a: alertBox(“Hello DataFlair!”);  
  b: alert(“Hello DataFlair!”);`` ,
  c : msgAlert(“Hello DataFlair!”);`,
   answer:'b',
}]

for (let i=0;i<questions.length;i++){
  let currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
} 
console.log()
console.log(chalk.blue.bold('----------END---------------'))
console.log(chalk.yellow("Thank you!"))