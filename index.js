
function shout(string) { return string.toUpperCase() }
function sayHiToGrandma(string){
  if (string === string.toLowerCase()) return "I can't hear you!";
  else if (string === "I love you, Grandma.") return "I love you, too.";
  else if (string === string.toUpperCase()) return "YES INDEED!";
}

 sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma.");

function whisper(string) { return string.toLowerCase()}

function logShout(string)