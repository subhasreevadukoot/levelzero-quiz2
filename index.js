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
  console.log("Yay!! That's correct");
  score=score+1;
}
else if(userAnswer.toLowerCase()!==answer.toLowerCase())
{
  console.log("That's wrong!");
  console.log(chalk.yellow("--------------------"))
}

if (score>2 && score<4){
  level=2;
}
else if(score>=4){
  level=3;
}
else if(score === 5){
  console.log(chalk.green.purple('You are a pro!!', score));
}
console.log(chalk.green.bold('current score:', score));
console.log(chalk.green.bold('current level:', level));
}

var questions = [{
  question:`Inside which HTML element do we put the JavaScript? 
  a: <js> 
  b: <nojs> 
  c:<script>
  :  `,
  answer:'c',
},
{
  question:`Which of the following function of String object returns the character at the specified index?
  a - charAt()
  b - charCodeAt()
  c - concat()
  :  `,
  answer:'a',
},
{
  question:`JavaScript is a ___ -side programming language. 
  a:server 
  b:client 
  c:both`,
  answer:'c',
},
{
  question:`How do you find the minimum of x and y using JavaScript?
   
  a:  Math.min(x,y)
  b:  min(x,y) 
  c : (x,y).min()
  :  `,
   answer:'a',
},
 {
  question:` Which of the following is true about typeof operator in JavaScript?

a : The typeof is a unary operator that is placed before its single operand, which can be of any type.
b : Its value is a string indicating the data type of the operand.
c : Both of the above.
:   `,
   answer:'c',
} ]

for (let i=0;i<questions.length;i++){
  let currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
} 
console.log()
console.log(chalk.blue.bold('----------END---------------'))
console.log(chalk.yellow("Thank you!"))