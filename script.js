const intervalNotes = document.getElementById("interval-notes");
const intervalButtons = document.getElementsByName("interval");
const evaluateBtn = document.getElementById("evaluate-button");
const feedbackParagraph = document.getElementById("feedback-paragraph");

let intervalPresented = null;

function generateExercise() {
    let first = Note.createRandom();
    let second = Note.createRandom(
        first.modificationType !== ModificationType.NONE ? 0 : 2,
        first.getRootNoteIndex()
    );

    intervalPresented = new Interval(first, second);

    intervalNotes.innerText = intervalPresented.toString();
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
        return getSelectedInterval().toUpperCase().replace("-", "_") === intervalPresented.calculateInterval();
    }
    catch (err) {
        return false;
    }
}

evaluateBtn.addEventListener("click", () => {
    let success = evaluateSolution();
    feedbackParagraph.innerText =
        success ?
        "Helyes megoldás! :D" :
        "Helytelen megoldás. :(";
    
    if (success) { generateExercise(); }
});

generateExercise();