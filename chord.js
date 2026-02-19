class Chord {
    constructor(note1, note2, note3) {
        this.note1 = note1;
        this.note2 = note2;
        this.note3 = note3;
    }

    static createRandom() {
        let note1 = new Note(RootNotesEnum["C"]);
        let note2 = new Note(RootNotesEnum["E"]);
        let note3 = new Note(RootNotesEnum["G"]);

        return new Chord(note1, note2, note3);
    }

    toNotesString() {
        return this.note1.toString() + " - " + this.note2.toString() + " - " + this.note3.toString();
    }
}