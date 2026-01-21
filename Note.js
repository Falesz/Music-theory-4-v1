const RootNotesEnum = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    E: 'E',
    F: 'F',
    G: 'G'
};

const ModificationType = {
    NONE: "NONE",
    FLAT: "FLAT",
    SHARP: "SHARP"
};

class Note {
    constructor(rootNote, modificationType = ModificationType.NONE, modifierCount = 0) {
        this.rootNote = rootNote;
        this.modificationType = modificationType;
        this.modifierCount = modifierCount;
    }

    getRootNoteIndex() {
        return Object.keys(RootNotesEnum).indexOf(this.rootNote) + 1;
    }

    toString() {
        let noteStr = this.rootNote;
        for (let i = 0; i < this.modifierCount; ++i) {
            noteStr += this.modificationType == "SHARP" ? "#" : "b";
        }
        return noteStr;
    }
};