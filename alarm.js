// Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

let text=prompt("Enter a text");
let seconds=parseInt(prompt("Enter the number of seconds before the alarm sounds."))
let miliSeconds=seconds*1000;

const message=(msg)=>{
    console.log(msg)
}

setTimeout(message,`${miliSeconds}`,`${text}` )