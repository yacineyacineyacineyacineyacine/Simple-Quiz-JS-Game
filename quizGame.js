var Question = function(number, question, answers, correctAnswer){
               this.number = number;
               this.question = question;
               this.answers = answers;
               this.correctAnswer = correctAnswer;
};
var question1 = new Question(1, 'is Javascript the coolest programming language ever?', ['yes','no'], 1);
var question2 = new Question(2, 'Where Algeria is situated?', ['Europe','Asia','America','Africa'], 4);
var question3 = new Question(3, 'what is the biggest country on Africa', ['Egypt', 'Morroco','Algeria','Tunisia'], 3);
var question4 = Object.create(Question, {
  number: {value:4},
  question :{value: 'does Algeria hava a Sahara?'},
  answers  :{value: ['yes','no']},
  correctAnswer:{value: 1},
});
var quiz = [question1, question2, question3, question4];
var random = Math.floor(Math.random() * 3);

//retreive the question and dispaly it
Question.prototype.randomQuestion = function(){
    var question = quiz[random];
    var correctAnswer = choosenQuestion.correctAnswer;
    console.log((random + 1) + ' ' + question.question);
         for (var j = 0; j < question.answers.length; j++) {
             console.log((j + 1) + ' ' +question.answers[j]);
          };
        return question;
      };
Question.prototype.checkAnswer = function (question){
  var input =parseInt(prompt("Fill the correct answer ")) ;
  if (input === question.correctAnswer) {
    console.log('correct');
  }else {
    console.log('uncorrect');
  };
}


// Call the methode randomQuestion
var choosenQuestion = quiz[random];
var answer = choosenQuestion.randomQuestion();
choosenQuestion.checkAnswer(answer);
//retreive the answer from the Gammeer

//

//See if the Gammer input is the correct answer

/*if (inputGamer === choosenQuestion.correctAnswer){
  console.log('correct');
}else{
  console.log('uncorrect');
}*/

/*for (var i = 0; i < quiz.length; i++) {
  if (random === i) {
    var correct = quiz[i].correctAnswer;
  };
  if (inputGamer === correct) {
    console.log('correct Answer');
  }else {
    console.log('uncorrect Answer');
  };
}*/
