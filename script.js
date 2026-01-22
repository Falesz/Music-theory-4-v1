const intervalNotes = document.getElementById("interval-notes");
const intervalButtons = document.getElementsByName("interval");
const evaluateBtn = document.getElementById("evaluate-button");
const feedbackParagraph = document.getElementById("feedback-paragraph");

function generateExercise() {
    let first = Note.createRandom();
    let second = Note.createRandom(first.getRootNoteIndex());

    let interval = new Interval(first, second);

    intervalNotes.innerText = interval.toString();
    interval.calculateInterval();
}

function getSelectedInterval() {
    let selected = Array.from(intervalButtons).find(radio => radio.checked);
    if (selected) { return selected.value; }
    else {
        throw "No interval selected";
    }
}

function evaluateSolution() {
    try {
        return getSelectedInterval() == "perfect-fifth";
    }
    catch (err) {
        return false;
    }
}

evaluateBtn.addEventListener("click", () => {
    feedbackParagraph.innerText =
        evaluateSolution() ?
        "Helyes megoldás! :D" :
        "Helytelen megoldás. :(";
    
    generateExercise();
});

generateExercise();