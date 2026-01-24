const IntervalBaseEnum = {
    UNISON: "UNISON",   // 0
    SECOND: "SECOND",   // 1
    THIRD: "THIRD",     // 2
    FOURTH: "FOURTH",   // 3
    FIFTH: "FIFTH",     // 4
    SIXTH: "SIXTH",     // 5
    SEVENTH: "SEVENTH", // 6
    OCTAVE: "OCTAVE"    // 7
};

const IntervalEnum = {
    DIMINISHED_UNISON: "DIMINISHED_UNISON",   // index of 0, representing semitone difference of -1
    PERFECT_UNISON: "PERFECT_UNISON",         // index of 1, representing semitone difference of 0
    AUGMENTED_UNISON: "AUGMENTED_UNISON",     // index of 2, representing semitone difference of 1

    DIMINISHED_SECOND: "DIMINISHED_SECOND",   // index of 3, representing semitone difference of 0
    MINOR_SECOND: "MINOR_SECOND",             // index of 4, representing semitone difference of 1
    MAJOR_SECOND: "MAJOR_SECOND",             // index of 5, representing semitone difference of 2
    AUGMENTED_SECOND: "AUGMENTED_SECOND",     // index of 6, representing semitone difference of 3

    DIMINISHED_THIRD: "DIMINISHED_THIRD",     // index of 7, representing semitone difference of 2
    MINOR_THIRD: "MINOR_THIRD",               // index of 8, representing semitone difference of 3
    MAJOR_THIRD: "MAJOR_THIRD",               // index of 9, representing semitone difference of 4
    AUGMENTED_THIRD: "AUGMENTED_THIRD",       // index of 10, representing semitone difference of 5

    DIMINISHED_FOURTH: "DIMINISHED_FOURTH",   // index of 11, representing semitone difference of 4
    PERFECT_FOURTH: "PERFECT_FOURTH",         // index of 12, representing semitone difference of 5
    AUGMENTED_FOURTH: "AUGMENTED_FOURTH",     // index of 13, representing semitone difference of 6

    DIMINISHED_FIFTH: "DIMINISHED_FIFTH",     // index of 14, representing semitone difference of 6
    PERFECT_FIFTH: "PERFECT_FIFTH",           // index of 15, representing semitone difference of 7
    AUGMENTED_FIFTH: "AUGMENTED_FIFTH",       // index of 16, representing semitone difference of 8

    DIMINISHED_SIXTH: "DIMINISHED_SIXTH",     // index of 17, representing semitone difference of 7
    MINOR_SIXTH: "MINOR_SIXTH",               // index of 18, representing semitone difference of 8
    MAJOR_SIXTH: "MAJOR_SIXTH",               // index of 19, representing semitone difference of 9
    AUGMENTED_SIXTH: "AUGMENTED_SIXTH",       // index of 20, representing semitone difference of 10

    DIMINISHED_SEVENTH: "DIMINISHED_SEVENTH", // index of 21, representing semitone difference of 9
    MINOR_SEVENTH: "MINOR_SEVENTH",           // index of 22, representing semitone difference of 10
    MAJOR_SEVENTH: "MAJOR_SEVENTH",           // index of 23, representing semitone difference of 11
    AUGMENTED_SEVENTH: "AUGMENTED_SEVENTH",   // index of 24, representing semitone difference of 12

    DIMINISHED_OCTAVE: "DIMINISHED_OCTAVE",   // index of 25, representing semitone difference of 11
    PERFECT_OCTAVE: "PERFECT_OCTAVE",         // index of 26, representing semitone difference of 12
    AUGMENTED_OCTAVE: "AUGMENTED_OCTAVE",     // index of 27, representing semitone difference of 13
}

class Interval {
    constructor(note1, note2) {
        this.note1 = note1;
        this.note2 = note2;
    }

    // The second note MUST be of a higher pitch than the second to calculate correctly!
    calculateInterval() {
        let intervalBase = Object.keys(IntervalBaseEnum)[this.note2.getRootNoteIndex() - this.note1.getRootNoteIndex()];
        
        const notes = Object.values(RootNotesEnum);
        let semitoneDiff = 0;
        let noteCursor = Object.keys(RootNotesEnum).indexOf(this.note1.rootNote);
        while (notes[noteCursor] !== this.note2.rootNote) {
            semitoneDiff += notes[noteCursor] == RootNotesEnum.B || notes[noteCursor] == RootNotesEnum.E ? 1 : 2;
            noteCursor = (noteCursor + 1) % Object.keys(RootNotesEnum).length;
        }

        if (this.note1.modificationType == ModificationType.FLAT) {
            semitoneDiff += this.note1.modifierCount;
        }
        else if (this.note1.modificationType == ModificationType.SHARP) {
            semitoneDiff -= this.note1.modifierCount;
        }

        if (this.note2.modificationType == ModificationType.FLAT) {
            semitoneDiff -= this.note2.modifierCount;
        }
        else if (this.note2.modificationType == ModificationType.SHARP) {
            semitoneDiff += this.note2.modifierCount;
        }

        switch (intervalBase) {
            case IntervalBaseEnum.UNISON:
                if (semitoneDiff === -1) { return IntervalEnum.DIMINISHED_UNISON; }
                if (semitoneDiff === 0) { return IntervalEnum.PERFECT_UNISON; }
                if (semitoneDiff === 1) { return IntervalEnum.AUGMENTED_UNISON; }

            case IntervalBaseEnum.SECOND:
                if (semitoneDiff === 0) { return IntervalEnum.DIMINISHED_SECOND; }
                if (semitoneDiff === 1) { return IntervalEnum.MINOR_SECOND; }
                if (semitoneDiff === 2) { return IntervalEnum.MAJOR_SECOND; }
                if (semitoneDiff === 3) { return IntervalEnum.AUGMENTED_SECOND; }
            
            case IntervalBaseEnum.THIRD:
                if (semitoneDiff === 2) { return IntervalEnum.DIMINISHED_THIRD; }
                if (semitoneDiff === 3) { return IntervalEnum.MINOR_THIRD; }
                if (semitoneDiff === 4) { return IntervalEnum.MAJOR_THIRD; }
                if (semitoneDiff === 5) { return IntervalEnum.AUGMENTED_THIRD; }
            
            case IntervalBaseEnum.FOURTH:
                if (semitoneDiff === 4) { return IntervalEnum.DIMINISHED_FOURTH; }
                if (semitoneDiff === 5) { return IntervalEnum.PERFECT_FOURTH; }
                if (semitoneDiff === 6) { return IntervalEnum.AUGMENTED_FOURTH; }
            
            case IntervalBaseEnum.FIFTH:
                if (semitoneDiff === 6) { return IntervalEnum.DIMINISHED_FIFTH; }
                if (semitoneDiff === 7) { return IntervalEnum.PERFECT_FIFTH; }
                if (semitoneDiff === 8) { return IntervalEnum.AUGMENTED_FIFTH; }
            
            case IntervalBaseEnum.SIXTH:
                if (semitoneDiff === 7) { return IntervalEnum.DIMINISHED_SIXTH; }
                if (semitoneDiff === 8) { return IntervalEnum.MINOR_SIXTH; }
                if (semitoneDiff === 9) { return IntervalEnum.MAJOR_SIXTH; }
                if (semitoneDiff === 10) { return IntervalEnum.AUGMENTED_SIXTH; }

            case IntervalBaseEnum.SEVENTH:
                if (semitoneDiff === 9) { return IntervalEnum.DIMINISHED_SEVENTH; }
                if (semitoneDiff === 10) { return IntervalEnum.MINOR_SEVENTH; }
                if (semitoneDiff === 11) { return IntervalEnum.MAJOR_SEVENTH; }
                if (semitoneDiff === 12) { return IntervalEnum.AUGMENTED_SEVENTH; }
            
            case IntervalBaseEnum.OCTAVE:
                if (semitoneDiff === 11) { return IntervalEnum.DIMINISHED_OCTAVE; }
                if (semitoneDiff === 12) { return IntervalEnum.PERFECT_OCTAVE; }
                if (semitoneDiff === 13) { return IntervalEnum.AUGMENTED_OCTAVE; }
        }
    }

    toString() {
        return this.note1.toString() + " - " + this.note2.toString();
    }
};