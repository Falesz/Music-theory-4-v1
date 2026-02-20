const chordNotes = document.getElementById("chord-notes");
const chordRootNoteButtons = document.getElementsByName("chord-root-note");
const chordRootModifierButtons = document.getElementsByName("chord-root-modifiers");
const chordRangeButtons = document.getElementsByName("chord-range");
const evaluateBtn = document.getElementById("evaluate-button");
const feedbackParagraph = document.getElementById("feedback-paragraph");

chordNotes.innerText = Chord.createRandom().toNotesString();