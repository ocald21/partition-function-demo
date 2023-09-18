
export enum Degeneracy {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
}

function valueOfDegeneracy(degeneracy: Degeneracy) {
    switch (degeneracy) {
        case Degeneracy.ONE: return 1;
        case Degeneracy.TWO: return 2;
        case Degeneracy.THREE: return 3;
        case Degeneracy.FOUR: return 4;
        case Degeneracy.FIVE: return 5;
    }
}

export {
    valueOfDegeneracy
}
