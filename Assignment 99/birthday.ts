function daysUntillBirthday (month: number,day: number) {

    let today = new Date()
    let year = today.getFullYear()
    let  birthday = new Date(year, month - 1, day);

    //If the birthday this year has already passed (i.e., birthday is earlier than today), 
    //we adjust the birthday to next year by incrementing the year.

    if (birthday < today) {

        birthday.setFullYear(year + 1)

    }

    return birthday

    
}

const nextBirthday = daysUntillBirthday(9, 8); // Example: December 25th
console.log("Next birthday on:", nextBirthday.toLocaleDateString());

