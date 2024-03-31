let userProfile = function ()  {

    let name: string = "Umaima"
    let age: number = 18

    return {
        display: function() {
            console.log(`Your name is ${name} and your age is ${age}`)
        }
    }
}()

userProfile.display()