const intervalBaseEnum = {
    UNISON: "UNISON",   // 0
    SECOND: "SECOND",   // 1
    THIRD: "THIRD",     // 2
    FOURTH: "FOURTH",   // 3
    FIFTH: "FIFTH",     // 4
    SIXTH: "SIXTH",     // 5
    SEVENTH: "SEVENTH", // 6
    OCTAVE: "OCTAVE"    // 7
};

const intervalEnum = {
    DIMINISHED_UNISON: "DIMINISHED_UNISON",   // 0
    PERFECT_UNISON: "PERFECT_UNISON",         // 1
    AUGMENTED_UNISON: "AUGMENTED_UNISON",     // 2

    DIMINISHED_SECOND: "DIMINISHED_SECOND",   // 3
    MINOR_SECOND: "MINOR_SECOND",             // 4
    MAJOR_SECOND: "MAJOR_SECOND",             // 5
    AUGMENTED_SECOND: "AUGMENTED_SECOND",     // 6

    DIMINISHED_THIRD: "DIMINISHED_THIRD",     // 7
    MINOR_THIRD: "MINOR_THIRD",               // 8
    MAJOR_THIRD: "MAJOR_THIRD",               // 9
    AUGMENTED_THIRD: "AUGMENTED_THIRD",       // 10

    DIMINISHED_FOURTH: "DIMINISHED_FOURTH",   // 11
    PERFECT_FOURTH: "PERFECT_FOURTH",         // 12
    AUGMENTED_FOURTH: "AUGMENTED_FOURTH",     // 13

    DIMINISHED_FIFTH: "DIMINISHED_FIFTH",     // 14
    PERFECT_FIFTH: "PERFECT_FIFTH",           // 15
    AUGMENTED_FIFTH: "AUGMENTED_FIFTH",       // 16

    DIMINISHED_SIXTH: "DIMINISHED_SIXTH",     // 17
    MINOR_SIXTH: "MINOR_SIXTH",               // 18
    MAJOR_SIXTH: "MAJOR_SIXTH",               // 19
    AUGMENTED_SIXTH: "AUGMENTED_SIXTH",       // 20

    DIMINISHED_SEVENTH: "DIMINISHED_SEVENTH", // 21
    MINOR_SEVENTH: "MINOR_SEVENTH",           // 22
    MAJOR_SEVENTH: "MAJOR_SEVENTH",           // 23
    AUGMENTED_SEVENTH: "AUGMENTED_SEVENTH",   // 24

    DIMINISHED_OCTAVE: "DIMINISHED_OCTAVE",   // 25
    PERFECT_OCTAVE: "PERFECT_OCTAVE",         // 26
    AUGMENTED_OCTAVE: "AUGMENTED_OCTAVE",     // 27
}

class Interval {
    constructor(note1, note2) {
        this.note1 = note1;
        this.note2 = note2;
    }

    calculateInterval() {
        console.log(this.note1.getRootNoteIndex());
        console.log(this.note2.getRootNoteIndex());
    }

    toString() {
        return this.note1.toString() + " - " + this.note2.toString();
    }
};