function numberGame(){

const randomNumber = Math.floor(Math.random() * 11);

let tries = 0


do{
    let userNumber = prompt("Sisesta üks number 1-10ni")

if(userNumber == randomNumber){
    console.log("Yay! Arvasid õige numbri ära!")
    tries += 3;
} else if (randomNumber + 1 == userNumber ){
    console.log("Ai sa pakkusid väga lähedale.")
    tries += 1;
} else if (randomNumber - 1 == userNumber){
    console.log("Ai sa pakkusid väga lähedale.")
    tries += 1;
} else {
    console.log(`Sorry, ${userNumber} ei ole õige number.`)
    tries += 1;
}
} while(tries < 3)
}

numberGame()
    
