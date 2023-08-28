const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/home.png") {
    myImage.setAttribute("src", "images/forest.png");
  } else {
    myImage.setAttribute("src", "images/home.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
if (!myName) {
setUserName();
} else {  
localStorage.setItem("name", myName);
  myHeading.textContent = `Come watch ATM8 Superflat, ${myName}`;
}
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Come watch ATM8 Superflat, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

































































