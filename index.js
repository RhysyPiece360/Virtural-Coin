console.log("if you get nothing as a responce, that means you didnt get a coin,")
function randomNumber() {

    var randNum = Math.floor(Math.random() * (45)) + 1;

    return randNum;

}
function logRandomNumber() {

    var randNum = randomNumber();

    if(randNum == 7) { 

        console.log('You have a coin now Hash #1');

    }
    if(randNum == 23) { 

        console.log('You have a coin now Hash #2');

    }
    if(randNum == 25) { 

        console.log('You have a coin now Hash #3');

    }
    if(randNum == 42) { 

        console.log('You have a coin now Hash #4');

    }
    if(randNum == 31) { 

        console.log('You have a coin now Hash #5');

    }
    if(randNum == 41) { 

        console.log('You have a coin now Hash #6');

    }
    if(randNum == 12) { 

        console.log('You have a coin now Hash #7');

    }
    if(randNum == 15) { 

        console.log('You have a coin now Hash #8');

    }
    if(randNum == 43) { 

        console.log('You have a coin now Hash #9');

    }

}

logRandomNumber();
