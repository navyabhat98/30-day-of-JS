//story maker asks for 3 promts to form a short story.
var questions = 3;
var noun = prompt("Enter a noun: "+(questions)+" questions remaining");
var adjective = prompt("Enter an adjective: "+(questions-2)+" questions remaining.");
var verb = prompt("Enter a verb: "+(questions-3)+" questions remaining.");
var sentence = "There once was a "+adjective+" programmer who wanted to use javaScript to " +verb+" the "+noun;

document.write(sentence);