function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  var string = "Welcome " + person + ". You are number " + katzDeliLine.length + " in line.";
  return string;
}
