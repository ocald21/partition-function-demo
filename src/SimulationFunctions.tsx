import { AppConstants } from "./AppConstants";
import { Degeneracy, valueOfDegeneracy } from "./types/Degeneracy";

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
    energyLevel: number,
    temperature: number,
) {
    return Math.exp(
        -(AppConstants.ENERGY_MULTIPLIER * energyLevel) / 
        (AppConstants.BOLTZMANN_CONSTANT * temperature)
    );
}

function calcualatePartition(
    energyLevel: number,
    degeneracy: Degeneracy,
    temperature: number
) {
    return valueOfDegeneracy(degeneracy) * calculateExponentialTerm(energyLevel, temperature);
}

function calculateProbability(
    temperature: number,
    energyLevel: number,
    energyLevelCount: number,
    degeneracy: number,
) {
    var denominator = 0;

    for (let i = 0; i < energyLevelCount; i++) {
        denominator += calcualatePartition(i, degeneracy, temperature);
    }

    const numerator = calcualatePartition(energyLevel, degeneracy, temperature);
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
    energyLevelCount: number,
    degeneracy: number,
): Map<number, number> {
    const coordinates: Map<number, number> = new Map();

    for (let i = AppConstants.LOWEST_TEMPERATURE; i <= AppConstants.HIGHEST_TEMPERATURE; i++) {
        coordinates.set(i, calculateProbability(i, energyLevel, energyLevelCount, degeneracy));
    }

    return coordinates;
}

function getProbabilityPairs(
    temperature: number,
    energyLevelCount: number,
    degeneracy: number,
): Map<number, number> {
    const probabilities: Map<number, number> = new Map();
    
    for (let i = AppConstants.LOWEST_ENERGY_LEVEL; i < energyLevelCount; i++) {
        probabilities.set(i, calculateProbability(temperature, i, energyLevelCount, degeneracy));
    }

    return probabilities;
}

export const SimulationContainer = {
    getRange,
    getNumberRange,
    calculateProbability,
    getCoordinatePairs,
    getProbabilityPairs,
} as const;
