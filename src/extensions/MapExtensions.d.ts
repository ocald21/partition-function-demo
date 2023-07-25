interface Map<K, V> {
    mapKeys<T>(transform: (key: K) => T): Map<T, V>
    mapValues<T>(transform: (value: V) => T): Map<K, T>
}

Map.prototype.mapKeys = function<T>(
    transform: (key: K) => T
): Map<T, V> {
    const newMap: Map<T, V> = new Map();

    this.forEach((value: V, key: K) => {
        const transformedKey = transform(key);
        newMap.set(transformedKey, value);
    });

    return newMap;
}

Map.prototype.mapValues = function<T>(
    transform: (value: V) => T
): Map<K, T> {
    const newMap: Map<T, V> = new Map();

    this.forEach((value: V, key: K) => {
        const transformedValue = transform(value);
        newMap.set(key, transformedValue);
    });

    return newMap;
}
