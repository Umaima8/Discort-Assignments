function getRandomColor () {


    //1) We use the # symbol with the 6-character hexadecimal string to form a valid color code.
    
    //2)Then Math.random() * 0xFFFFFF: We multiply the random decimal by 0xFFFFFF (which is equivalent to 16777215 in decimal).
        // This gives us a random number between 0 and 16777215.
    
    //3)After that The toString(16) method converts the random number to a hexadecimal string. 
        //The 16 argument specifies that we want the result in base 16 (hexadecimal).
    
    //4)At last .padStart(6, '0'): This ensures that the hexadecimal string is always 6 characters long. 
        //If the generated string is shorter than 6 characters, it pads it with leading zeros.

    let colour = '#' +  Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6,'0')

    return colour
}


console.log(getRandomColor())