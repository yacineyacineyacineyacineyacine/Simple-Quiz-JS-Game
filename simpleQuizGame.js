/*(function(){
  function Question (question, answers, correct){
                     this.question = question;
                     this.answers = answers;
                     this.correct = correct;
  }
  Question.prototype.displayQuestion = function(){
     console.log(this.question);
     for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ' : ' + this.answers[i])
     };
  };
  Question.prototype.checkAnswer = function(answer){
    if (answer === this.correct) {
      console.log('correct');
    }else {
      console.log('uncorrect');
    }
  };

  q1 = new Question('Is Javascript the coolest programming lunguage in the world? ', ['yes', 'no'], 0);
  q2 = new Question('What is the name of this game\'s ower? ', ['Yacine', 'Mohamed','Hichem'],0);
  q3 = new Question('What does best describing coding? ', ['Boring', 'Hard', 'Fun','Tediuos'], 2);
  var question = [q1, q2, q3];
  var n = Math.floor(Math.random() * question.length);
  question[n].displayQuestion();
  var answer = parseInt(prompt('please select the correct answer'));
  question[n].checkAnswer(answer);

})();*/
//make it perfect
(function(){
  function Question (question, answers, correct){
                     this.question = question;
                     this.answers = answers;
                     this.correct = correct;
  }
  Question.prototype.displayQuestion = function(){
     console.log(this.question);
     for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ' : ' + this.answers[i])
     };
  };
  Question.prototype.checkAnswer = function(answer, callBack){
    var sc;
    if (answer === this.correct) {
      console.log('correct answer!');
      sc = callBack(true);
    }else {
      console.log('Wrong answer try again :)');
      sc = callBack(false);
    }
    this.displayScore(sc);
  };
Question.prototype.displayScore = function(score){
  console.log('your curent score is: ' + score);
  console.log('------------')
}
  q1 = new Question('Is Javascript the coolest programming lunguage in the world? ', ['yes', 'no'], 0);
  q2 = new Question('What is the name of this game\'s ower? ', ['Yacine', 'Mohamed','Hichem'],0);
  q3 = new Question('What does best describing coding? ', ['Boring', 'Hard', 'Fun','Tediuos'], 2);
  var question = [q1, q2, q3];

  function score(){
    var sc = 0;
    return function(correct){
      if (correct) {
        sc++;
      };
    return sc;
  };
};

   var keepScore = score();
  function nextQuestion(){
    var n = Math.floor(Math.random() * question.length);
    question[n].displayQuestion();
    var answer =prompt('please select the correct answer');

    if (answer !== 'exit') {
    question[n].checkAnswer(parseInt(answer), keepScore);
    nextQuestion();
  };

  };
  nextQuestion();


})();
