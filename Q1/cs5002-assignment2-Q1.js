// part one- if input a right reaction time and could goes into next step;
do{
    var reactionTime = prompt('Please input your reaction time.');
    var numReactionTime = parseFloat(reactionTime);
//Testing    console.log('Input is', reactionTime); (following will omit 'Input is', messages in console are inputs)
//Testing    console.log('Output is', numReactionTime);

    if (isNaN(numReactionTime)){
        alert('Please input a right number.')
    } else if (numReactionTime < 0.1) {
        alert('It is a false start and thanks for participating in the competition.')
    }
} while (isNaN(numReactionTime) || numReactionTime < 0.1); 


// Part two- whether took part in 100 / 200 and man / woman competition
do{
    var type = prompt('Please chose between 100m and 200m.');
//Testing    console.log(type);
    type = parseFloat(type);

    if (type !== 100 & type !== 200){
        alert('Please input the right competition like \'100m\' or \'200m\'.'); 
    }
} while (type !== 100 & type !== 200);

do{
    var gender = prompt('Please choose man\'s or woman\'s you are competing in.');
    
    gender = gender.replace(/\W/g,'').toLowerCase();
    var allGender = ['woman', 'man', 'womans', 'mans', 'women', 'men', 'womens', 'mens'];

    if (!allGender.includes(gender)){
        alert('Please input the right competition like \'woman\' or \'man\'.');
    }
} while (!allGender.includes(gender));


//part three- if broke
do{
    var time = prompt ('please input your time.');
 //Testing   console.log(time);

    time = parseFloat(time);
    if ((typeof time !== 'number' )|| isNaN(time)){
        alert('Please input a right time.')
    }
}while((typeof time !== 'number')|| isNaN(time))

womanGender = ['woman','womans','women','womens'];
manGender = ['man','mans','men','mens'];
console.log(time, gender, type);
    if (type === 100){
        if (womanGender.includes(gender)){
            time < 10.49 
            ? alert('congratulation! You broken the world record!(10.49 seconds - set by Florence Griffith-Joyner in 1988)')
            : alert('Thanks for participating in the competition.') 
        } else if (manGender.includes(gender)){
            time < 9.58
            ? alert('congratulation! You broken the world record!(9.58 seconds - set by Usain Bolt in 2009)')
            : alert('Thanks for participating in the competition.')
        }
    } else if (type === 200){
        if (womanGender.includes(gender)){
            time < 21.34
            ? alert('congratulation! You broken the world record!(21.34 seconds- set by Florence Griffith-Joyner in 1988)')
            : alert('Thanks for participating in the competition.') 
        } else if (manGender.includes(gender)) {
            time < 19.19
            ? alert('congratulation! You broken the world record!(19.19 seconds - set by Usain Bolt in 2009)')
            : alert('Thanks for participating in the competition.')
        } 
    }


