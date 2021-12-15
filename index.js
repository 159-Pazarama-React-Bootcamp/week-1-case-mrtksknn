var str = '6666666666666662';

function Length(str) {
  if (str.length == 16) {
    return true
  }
  return false
}

function Bigger(str) {
  var sum = 0
  for (var i = 0; i < str.length; i++) {
    sum += parseInt(str[i])
  }
  if(sum <= 16) {
    return false
  }
  return true
}

function Same(str) {
  var i = 0;
    for (let i = 1; i < str.length; i++)
      if (str[i] != str[0])
        return true;
 
    return false;
    
}

function LastChar(str) {
  var last = str.slice(-1);
  if(last % 2 == 0) {
    return true
  }
  return false
}

function isNumeric(str) {
    console.log( !isNaN(str - parseFloat(str)))
}

function CardValidation(str) {
  if (Length(str)) {
    if(Bigger(str)) {
      if(Same(str)) {
        if(LastChar(str)) {
          isNumeric(str)
        }
        else {
          console.log('false')
        }
      }
      else {
        console.log('false')
      }
    }
    else {
      console.log('false')
    }
  }
  else {
    console.log('false')
  }
}

CardValidation(str)
