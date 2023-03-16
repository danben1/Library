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