require('./instanthello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

talk.intro();
talk.hello("kyle");

var answer = question.ask("what is the meaning of life?");
console.log(answer);

goodbye();