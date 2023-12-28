//document.getElementById("count-el").innerText = 5
/**
let count = 656
count = count + 76
console.log(count)

let myAge = 21
console.log(myAge) 
let bonuspoints = 50
bonuspoints = bonuspoints + 20
console.log(bonuspoints) 

function increment() {
    console.log("the button was clickr")


}



function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown()


// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

countdown()


function callibrace() {
    console.log(42)


}

callibrace()


let lapscompleted = 0


// Create a function that logs out the sum of all the lap times
function incrementlaps() {
    // let totalTime = lap1 + lap2 + lap3
    console.log(lapscompleted = lapscompleted + 1)
}

incrementlaps()
incrementlaps()
incrementlaps()


//camelCase
let countEl = document.getElementById("count-el") //pass in arguments

console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
    
    console.log(count)
}


function save() {
    console.log(count)

}

save()









let username = "per"



let message = "you have tree new notifications"

let messageToUser = message + " , " + username + " ! "
console.log(messageToUser)

let myName = " Briyan"
let greetings = "Hi, my name is "

let myGreetings =  greetings + myName + " " + "****"
console.log(myGreetings)

let welcomeEl = document.getElementById("welcomeEl")
let herName = "Hermie dij"
let greeting = "welcome back  "

welcomeEl.innerText = greeting + herName


welcomeEl.innerText += " / "

**/
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)

    count = 0;
    countEl.innerText =0;

}

count++;
save();


