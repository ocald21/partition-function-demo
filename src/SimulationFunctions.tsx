import AppConstants from "./AppConstants";

function getRange(
    length: number,
    step: number,
    fractionDigits: number,
    reverse: boolean,
) {
    let numbers = Array.from(
        { length: length },
        (_, i) => i
    )
    
    if (reverse) {
        numbers = numbers.reverse()
    }

    return numbers.map(
        (value) => (value * step).toFixed(fractionDigits)
    );
}

function getNumberRange(
    low: number,
    high: number,
    step: number,
    fractionDigits: number,
    reverse: boolean,
): string[] {
    let numbers = Array.from(
        { length: (high - low) / step },
        (_, i) => i + 1
    );

    if (reverse) {
        numbers = numbers.reverse();
    }

    return numbers.map(
        (value) => (value * step).toFixed(fractionDigits)
    );
}

function calculateExponentialTerm(
    microstate: number,
    temperature: number,
) {
    return Math.exp(
        -(AppConstants.ENERGY_MULTIPLIER * microstate) / 
        (AppConstants.BOLTZMANN_CONSTANT * temperature)
    );
}

function calculateDegeneracy(
    microstate: number,
    degeneracy: number,
) {
    return degeneracy.map(
        AppConstants.LOWEST_DEGENERACY, AppConstants.HIGHEST_DEGENERACY, 
        1 / (microstate + 1), 1
    ) * (microstate + 1);
}

function calculateProbability(
    temperature: number,
    microstate: number,
    microstateCount: number,
    degeneracy: number,
) {
    var denominator = 0;

    for (let i = 0; i < microstateCount; i++) {
        denominator += calculateDegeneracy(i, degeneracy) * calculateExponentialTerm(i, temperature);
    }

    const numerator = calculateDegeneracy(microstate, degeneracy) * calculateExponentialTerm(microstate, temperature);
    const probability = numerator / denominator;

    if (Number.isNaN(probability)) {
        if (microstate == 0) {
            return 1.0;
        } else {
            return 0.0;
        }
    }

    return probability;
}

function getCoordinatePairs(
    microstate: number,
    microstateCount: number,
    degeneracy: number,
): Map<number, number> {
    const coordinates: Map<number, number> = new Map();

    for (let i = AppConstants.LOWEST_TEMPERATURE; i <= AppConstants.HIGHEST_TEMPERATURE; i++) {
        coordinates.set(i, calculateProbability(i, microstate, microstateCount, degeneracy));
    }

    return coordinates;
}

function getProbabilityPairs(
    temperature: number,
    microStateCount: number,
    degeneracy: number,
): Map<number, number> {
    const probabilities: Map<number, number> = new Map();
    
    for (let i = AppConstants.LOWEST_MICROSTATE; i < microStateCount; i++) {
        probabilities.set(i, calculateProbability(temperature, i, microStateCount, degeneracy));
    }

    return probabilities;
}

const SimulationContainer = {
    getRange,
    getNumberRange,
    calculateProbability,
    getCoordinatePairs,
    getProbabilityPairs,
};

export default SimulationContainer;
