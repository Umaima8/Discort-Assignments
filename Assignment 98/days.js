function daysUntillNewYear() {
    //creating a new variable in which storing the Date function
    var today = new Date();
    //We set it to January 1st of the next year by adding 1 to the current year (e.g., if today is in 2024, 
    //newYear will be January 1, 2025).The 0 represents 'January' and 1 represents 1st date of january
    var newyear = new Date(today.getFullYear() + 1, 0, 1);
    //We subtract the timestamp of today from the timestamp of newYear in milliseconds.
    var diff = newyear.getTime() - today.getTime();
    var days = Math.ceil(diff / (1000 /*to convert from milliseconds to seconds*/ * 60 /*to convert from seconds to minutes */
        * 60 /* to convert from minutes to hours*/ * 24 /*to convert from hours to days*/)); //Math.ceil is used to convert to whole numbers so even partial days are counted
    return days;
}
console.log(daysUntillNewYear() + " days untill New Year");
