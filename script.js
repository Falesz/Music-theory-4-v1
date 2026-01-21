const intervalNotes = document.getElementById("interval-notes");
const intervalButtons = document.getElementsByName("interval");
const evaluateBtn = document.getElementById("evaluate-button");
const feedbackParagraph = document.getElementById("feedback-paragraph");

function generateExercise() {
    let firstRootInd = Math.floor(Math.random() * Object.keys(RootNotesEnum).length);
    if (firstRootInd > 0) { firstRootInd -= 1; }

    let secondRootInd = Math.floor(Math.random() * (Object.keys(RootNotesEnum).length - firstRootInd)) + firstRootInd

    let first = new Note(RootNotesEnum[Object.keys(RootNotesEnum)[firstRootInd]], ModificationType.NONE, 0);
    let second = new Note(RootNotesEnum[Object.keys(RootNotesEnum)[secondRootInd]], ModificationType.NONE, 0);

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