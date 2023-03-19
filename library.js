//PASSWORD THAT PROMPTS LOG IN AND AUTHENTICATE
    //introduce password and secret info as variables
    let password = "myPassword1!"
    let secret = "My favourite colour is #000080!"
    //define empty variables for function
    let attempts = 0
    let user_password = 0
    //create a function that prompts for password and handles log-in attempts
    function authenticateUser () {
        while (attempts < 3) {
            user_password = prompt("please enter the password")
            if (user_password === password) {
               return true;
            } else {
                attempts += 1
            }
        }
        return false;
    }
    //answer (true or false) to authenticate user
    let isLoggedIn = authenticateUser ();
    //if true reveal secret
    if (isLoggedIn === true) {
        alert(secret)
    }

//PASSWORD FUNCTION THAT DECLARES ATTEMPTS REMAINING 
    //prompt user for password
    function userPrompt () {
        user_password = prompt("please enter the password");
        return user_password;
    }
    //checks if password correct
    function correctPassword () {
        if (user_password === password) {
            return true;
        } else {
            return false;
        }
    }   
    //store output of functions in variables
    user_password = userPrompt ()
    password_correct = correctPassword ()
    //function that lets know how many attempts left: 
    function attempts_remaining () { 
        count = 2
        while (count >= 0) {
            if (correctPassword() === true){
                alert(secret);
                break;
            } else {
                alert("You have " + count + " attempts remaining")
                userPrompt ()
                correctPassword()
                count -= 1
            }
        }
    
    }

//FOR AND WHILE LOOP THAT ITERATE THROUGH AN ARRAY AND PRINT EACH ELEMENT
    //array
    let englishNumbers = ["one", "two", "three", "four", "five"];
    //while loop
    let index = 0;
    while (index < englishNumbers.length) {
        console.log(englishNumbers[index]);
        index ++;
    }
    //for loop
    for (i = 0; i < englishNumbers.length; i++) {
        console.log(englishNumbers[i]);
    }

//FOR LOOP THAT ITERATES THROUGH ARRAY AND ALTERS EACH ELEMENT
    //array
    let words = ["ben", "ha", "spla", "fa", "ca", "dra"];
    //for loop
    for (i = 0; i < words.length; i++) {
        words[i] = `${words[i]}t`
    }
    console.log(words);

//restrict user input to character limit and capitalization using regular expressions
    //while loop begins when variable 'userName' does NOT:
        //string begin with a capital --> ^[A-Z]
        //string ends with 0-9 characters, upper or lower case --> [a-zA-z]{0,9}$
    //.test command used to check compliance with regular expression /^[A-Z][a-zA-Z]{0,9}$/
    
    while (!/^[A-Z][a-zA-Z]{0,9}$/.test(userName));

    //syntax explaines
        // ! --> defines that test variable should NOT equal content of regular expression
        // /.../ --> forward ticks used to delimit extent of regular expression, they do not form part of expression itself
        // ^ --> means start of string, combined with condition of capital [A-Z], means string must start with capital
        //[a-zA-Z][0,9] --> must contains 0 to 9 character upper or lower case 
        // $ --> denotes the end of the string, in instance above condition set is that must end with 0-9 characters as outlined above

//FOR LOOP TO ADJUST PROBABILITY OF A RANDOMISED RESULT e.g. make computer win RPS 90% of time.
    // instead of many if statements create a 'matrix' which can be used to determine the winner of any given moves
    //create an array of arrays
 

    let outcomes = 
    [
        ["drawn", "lost", "won", "won", "lost"], // if humanMove=rock;    computerMove=rock, paper, scissors, lizard, spock
        ["won", "drawn", "lost", "lost", "won"], // humanMove=paper;
        ["lost", "won", "drawn", "won", "lost"], // humanMove=scissors; 
        ["lost", "won", "lost", "drawn", "won"], // humanMove=lizard;
        ["won", "lost", "won", "lost", "drawn"], // humanMove=spock;
    ];
​
    //have computer win ALL the time 
    //create for loop that will iterate through matrix until it reaches a "won" scenario
    //then returns that win scenario as its output
    
    let computerMove;   //decalre undefined variable
    let playerMove = 2  //as an example assume player selects 2 ("scissors")
    
    for (let i = 0; i < outcomes.length; i++) {     //define for loop to iterate through
        if(outcomes[playerMove][i] == "lost")       //navigate to 2nd index position (scissors array) and iterate through till find "lost" condition
         {
             computerMove = i;                      //return index position that generated a loss condition as computer move
         }
    };
    
    let result = outcomes[playerMove][computerMove]; //the result would then always be a playermove loss

    //have the computer win a certain percentage of the time
    //generate a random number betwwen 0 and 10

    let randomNumber = Math.floor(Math.random() * 11);
    
    //create an if statement that regulates how often the computer should win
    //change the number here to change the percentage of wins e.g. 5 would be under 50% of time
    
    if (randomNumber < 5)                                   //50% of time rig answer using for loop shown above
    {
        for (let i = 0; i < outcomes.length; i++)
        {
            if(outcomes[playerMove][i] == "lost")
            {
                computerMove = i;
            }
        };
        result = outcomes[playerMove][computerMove]; 
    }
    else                                                    //else allow play to continue randomly (not rigged)
    {
        computerMove = Math.floor(Math.random() * outcomes.length);     //generate random number for computerMove rather than engineering a winning pick
        result = outcomes[playerMove][computerMove];                    //allow result to play out normally
    };


