let user = prompt("What's your name?");
document.getElementById("nickname").innerHTML = `Your nickname: ${user}`;

let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0');
let day = String(date.getDate()).padStart(2, '0');
date = `${day}.${month}.${year}`


let btn = document.getElementById("btn");
btn.onclick = ( ) => {
    let phrase = document.getElementById("phrase").value;
    let arr = phrase.split(" ");
    if (phrase.startsWith("@") === true ) {
        let shifted = arr.shift().toString();
        document.getElementById("result").innerHTML = `[${date}, From: ${user}, To: ${shifted.slice(1)}] ${arr.join(' ' )}`;

        }
    else {
        document.getElementById("result").innerHTML = `[${date}, From: ${user}, To: ${null}] ${arr.join(' ')}`;
    }
}
