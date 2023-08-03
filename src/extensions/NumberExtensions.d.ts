interface Number {
    map(
        low: number, 
        high: number, 
        targetLow: number, 
        targetHigh: number
    ): number
}

Number.prototype.map = function(
    low: number, 
    high: number, 
    newLow: number, 
    newHigh: number
) {
    const initialLow = Math.min(low, high);
    const initialHigh = Math.max(low, high);
    const difference = initialHigh - initialLow;

    if (difference <= 0) {
        return Math.min(targetLow, targetHigh);
    }

    const ratio = (Math.min(initialHigh, this) - initialLow) / difference;
    const targetLow = Math.min(newLow, newHigh);
    const targetHigh = Math.max(newLow, newHigh); 
    const targetDifference = targetHigh - targetLow;
    const distance = ratio * targetDifference;

    return targetLow + distance;
}
