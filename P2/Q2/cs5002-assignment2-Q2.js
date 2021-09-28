function checkPangram() {
    var isPangram = true;

    for(var a = 0; a < alphabet.length; a++){
        if(input.indexOf(alphabet[a]) === -1){
            isPangram = false;
            break;
        }
    }
    // to aviod alert 26 times, the followting 'isPangram' if else function is put out
    isPangram
    ? alert('Text entered is a pangrammatic window.')
    : alert('Text entered is not a pangrammatic window.')
}

var input = prompt('Please input a pangrammatic window.').replace(/\W/g,'').toLowerCase();
//Testing console.log(input);
var alphabet = 'qwertyuiopasdfghjklzxcvbnm';
checkPangram();