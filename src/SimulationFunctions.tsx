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

function calculateProbability(
    temperature: number,
    energyLevel: number,
    levelCount: number,
) {
    var denominator = 0;

    for (let i = 0; i < levelCount; i++) {
        denominator += Math.exp(-(AppConstants.ENERGY_MULTIPLIER * i) / temperature);
    }

    const numerator = Math.exp(-(AppConstants.ENERGY_MULTIPLIER * energyLevel) / temperature);
    const probability = numerator / denominator;

    if (Number.isNaN(probability)) {
        if (energyLevel == 0) {
            return 1.0;
        } else {
            return 0.0;
        }
    }

    return probability;
}

function getCoordinatePairs(
    energyLevel: number,
    levelCount: number,
): Map<number, number> {
    const coordinates: Map<number, number> = new Map();

    for (let i = AppConstants.LOWEST_TEMPERATURE; i <= AppConstants.HIGHEST_TEMPERATURE; i++) {
        coordinates.set(i, calculateProbability(i, energyLevel, levelCount));
    }

    return coordinates;
}

function getProbabilityPairs(
    temperature: number,
    levelCount: number,
): Map<number, number> {
    const probabilities: Map<number, number> = new Map();
    
    for (let i = AppConstants.LOWEST_ENERGY_LEVEL; i < levelCount; i++) {
        probabilities.set(i, calculateProbability(temperature, i, levelCount));
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
