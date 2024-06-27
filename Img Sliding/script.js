let images = [];
let i = 0;
let size = 6;
while(i <= 6){
    images[i] = `/images/pictures/${i}.jpg`;
    i++;
}
let index = 2;
const x = document.getElementById("mid");
x.style.backgroundImage = `url(${images[index]})`;

// function scrollLeft(){
//     index = index - 1;
//     x.style.backgroundImage = `url(${images[(index + size) % size]})`;
// }
function scrollingLeft(){
    index = (index - 1 + size) % size;
    x.style.backgroundImage = `url(${images[index]})`;
    // console.log("hi1");
    console.log(`index => ${index}`);
}

function scrollingRight(){
    index = (index + 1) % size;
    x.style.backgroundImage = `url(${images[index]})`;
    console.log(`index => ${index}`);
    // console.log("hi2");
}

let b = document.getElementsByTagName("body");

function changeBGColor1(){
    // alert("this is an alert1");
    b[0].style.backgroundColor = "red";
    // console.log("hi11");
}

function changeBGColor2(){
    // alert("this is an alert2");
    b[0].style.backgroundColor = "green";
    // console.log("hi22");
}