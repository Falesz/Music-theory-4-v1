const chordNotes = document.getElementById("chord-notes");

chordNotes.innerText = Chord.createRandom().toNotesString();