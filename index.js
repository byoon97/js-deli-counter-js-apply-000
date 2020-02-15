function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  var string = "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.";
  return string;
}

function nowServing(katzDeliLine) {
  katzDeliLine.shift();
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return katzDeliLine;
}
