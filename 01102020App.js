function alphabetPosition(text) {
  let alphabetString = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArray = alphabetString.split("");
  let textArray = text.toLowerCase().split("");
  let alphabetPositionArray = [];
  let position = 0;
  let alphabetPositionString = "";

  for(let i = 0; i<textArray.length; i++){
    position = alphabetArray.indexOf(textArray[i]);
    if(position !== -1){
      alphabetPositionArray.push(position+1);
    }
  }

  alphabetPositionString = alphabetPositionArray.toString().replace(/,/g, " ");
  console.log(alphabetPositionString);

  return alphabetPositionString;

}

alphabetPosition("The sunset sets at twelve o' clock.");
