let txt = document.getElementById("txt");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let text = txt.value;
    let utterance = new SpeechSynthesisUtterance(text);

    speechSynthesis.speak(utterance);
});