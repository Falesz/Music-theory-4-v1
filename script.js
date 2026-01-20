const intervalNotes = document.getElementById("interval-notes");
const intervalButtons = document.getElementsByName("interval");
const evaluateBtn = document.getElementById("evaluate-button");
const feedbackParagraph = document.getElementById("feedback-paragraph");

function generateExercise() {
    let firstRootInd = Math.floor(Math.random() * Object.keys(RootNotesEnum).length);
    if (firstRootInd > 0) { firstRootInd -= 1; }

    let secondRootInd = Math.floor(Math.random() * (Object.keys(RootNotesEnum).length - firstRootInd + 1)) + firstRootInd

    let first = new Note(RootNotesEnum[Object.keys(RootNotesEnum)[firstRootInd]], ModificationType.NONE, 0);
    let second = new Note(RootNotesEnum[Object.keys(RootNotesEnum)[secondRootInd]], ModificationType.NONE, 0);
    intervalNotes.innerText =
        first.toString() + " - " + second.toString();
}

function getSelectedInterval() {
    return Array.from(intervalButtons).find(radio => radio.checked).value;
}

function evaluateSolution() {
    return getSelectedInterval() == "perfect-fifth";
}

evaluateBtn.addEventListener("click", () => {
    feedbackParagraph.innerText =
        evaluateSolution() ?
        "Helyes megoldás! :D" :
        "Helytelen megoldás. :(";
});

generateExercise();