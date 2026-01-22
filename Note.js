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

    static createRandom(minRootInd = 0, maxRootInd = 6) {
        if (minRootInd < 0 || minRootInd > 6) { throw "minRootInd in Note.createRandomBetween not between 0 and 6"; } 
        if (maxRootInd < 0 || maxRootInd > 6) { throw "maxRootInd in Note.createRandomBetween not between 0 and 6"; } 

        let rootInd = Math.floor(Math.random() * (maxRootInd - minRootInd + 1)) + minRootInd;

        return new Note(RootNotesEnum[Object.keys(RootNotesEnum)[rootInd]], ModificationType.NONE, 0);
    }

    getRootNoteIndex() {
        return Object.keys(RootNotesEnum).indexOf(this.rootNote);
    }

    toString() {
        let noteStr = this.rootNote;
        for (let i = 0; i < this.modifierCount; ++i) {
            noteStr += this.modificationType == "SHARP" ? "#" : "b";
        }
        return noteStr;
    }
};