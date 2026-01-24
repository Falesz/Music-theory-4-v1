const RootNotesEnum = {
    A: 'A', // 0
    B: 'B', // 1
    C: 'C', // 2
    D: 'D', // 3
    E: 'E', // 4
    F: 'F', // 5
    G: 'G'  // 6
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

    static createRandom(maxModifierCount = 2, minRootInd = 0, maxRootInd = 6) {
        if (minRootInd < 0 || minRootInd > 6) { throw "minRootInd in Note.createRandomBetween not between 0 and 6"; } 
        if (maxRootInd < 0 || maxRootInd > 6) { throw "maxRootInd in Note.createRandomBetween not between 0 and 6"; } 

        let rootInd = Math.floor(Math.random() * (maxRootInd - minRootInd + 1)) + minRootInd;

        let modificationType = maxModifierCount !== 0 ? Object.values(ModificationType)[Math.floor(Math.random() * 3)] : ModificationType.NONE;

        let modifierCount = 0;
        if (modificationType !== ModificationType.NONE) {
            modifierCount = Math.floor(Math.random() * maxModifierCount) + 1;
        }

        return new Note(RootNotesEnum[Object.keys(RootNotesEnum)[rootInd]], modificationType, modifierCount);
    }

    getRootNoteIndex() {
        return Object.keys(RootNotesEnum).indexOf(this.rootNote);
    }

    toString() {
        let noteStr = this.rootNote;
        if (this.modificationType != ModificationType.NONE) {
            for (let i = 0; i < this.modifierCount; ++i) {
                noteStr += this.modificationType == "SHARP" ? "#" : "b";
            }
        }
        return noteStr;
    }
};