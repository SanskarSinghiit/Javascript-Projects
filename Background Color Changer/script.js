let counter = 0;
function myFunction(){
    counter++;
    if(counter&1){
        document.getElementById('status').innerHTML = `CHANGED ${counter} odd times`;
    } else{
        document.getElementById('status').innerHTML = `CHANGED ${counter} even times`;
    }
    let x = Math.floor(Math.random()*41);
    // document.getElementById('para').innerHTML = x;
    document.body.style.backgroundColor = vibrantColors[x];
}
let textChangeCounter = 0;
function resetFunction(){
    counter = 0;
    textChangeCounter++;
    if(document.body.style.backgroundColor = "white"){
        setTimeout(resetFunction, 4000);
    }
    if(textChangeCounter&1){
        document.getElementById('status').innerHTML = `Change this boring white color!!!`;
    } else{
        document.getElementById('status').innerHTML = `Wanna try again ??`;
    }
    document.body.style.backgroundColor = "white";
}
