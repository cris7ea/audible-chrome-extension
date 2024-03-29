//get
const audioButton = document.querySelector(".bc-button-text");
const mp3Url = audioButton.dataset.mp3;

//make document element
const videoElem = document.createElement("video");
videoElem.src = mp3Url;
videoElem.type = "audio/mpeg";
videoElem.controls = true;
videoElem.setAttribute("width", "400");
videoElem.setAttribute("height", "100");
videoElem.setAttribute("style", "margin-top: 10px;");

//inssert
const parentNode = audioButton.parentElement.parentElement;
parentNode.appendChild(videoElem);

//remove audible pay button
const payButton = document.querySelector(".bc-button-player");
payButton.remove();
