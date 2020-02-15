function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  var string = "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.";
  return string;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + deliLine.shift() + ".";
  }
}
