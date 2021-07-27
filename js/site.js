//--Get the string from the page (controller function)--//
function getValue(){
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let rString = reverseString(userString);
    displayString(rString);
}

//--Reverse the string (logic function)--//
function reverseString(userString){
    let revString = [];
    //--Reverse a string using a for loop--//
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    return revString;
}

//--Show the result to the user (display function)--//
function displayString(revString){
    //--Write to page--//
    document.getElementById("msg").innerHTML = revString;
    //--Show the alert box--//
    document.getElementById("alert").classList.remove("invisible");
}