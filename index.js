function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  var string = "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.";
  return string;
}

function nowServing(deliLine) {
  var first = deliLine.shift();
  var string = "Currently serving " + first + " .";

  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return string;
}
