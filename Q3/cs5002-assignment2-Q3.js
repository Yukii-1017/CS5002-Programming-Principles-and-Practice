//Part one- random numbers and input numbers
var sysNums = []
for(var a = 0; sysNums.length < 3 ; a++){
  var nums = Math.floor(Math.random() * 40 + 1);

  while(sysNums.includes(nums)) {
    nums = Math.floor(Math.random() * 40 + 1);
  } 
  
  sysNums.push(nums);
}
console.log(sysNums)

var inputNums = [];
for(var i = 0; i < 3; i++) {
  var input =  prompt('Please enter three different numbers between 1 and 40.');
  console.log(input);
  //input =+ input is used to switch the type from string to number, so that it is comparable with nums
  input =+ input;

    while(input < 1 || input > 40 || inputNums.includes(input) || isNaN(input)) {
      input = prompt('Sorry, please re-enter different numbers between 1 and 40.');
    }
    inputNums.push(input);
}


//Part two- Check numbers and out put results
var wins = 0;

if(sysNums[0] === inputNums[0] && sysNums[1] === inputNums[1] && sysNums[2] === inputNums[2]) {
  wins++;
}

for(var i = 0; i < sysNums.length; i++) {
    for(var j = 0; j < inputNums.length; j++) {
        if(sysNums[i] === inputNums[j]) {
          wins++;
        }
    }
}

switch (wins) {
    case 0:
      alert("Sorry, you didn’t win this time!");
      break;
    case 1:
      alert("Great, you won the third prize!");
      break;
    case 2:
      alert("Great, you won the second prize!");
      break;
    case 3:
      alert("Congratulations, you win the first prize!");
      break;
    case 4:
      alert("You win the jackpot!");
      break;
    default: break;
}