console.log("if you get nothing as a responce, that means you didnt get a coin,")
function randomNumber() {

    var randNum = Math.floor(Math.random() * (25)) + 1;

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
    

}

logRandomNumber();
