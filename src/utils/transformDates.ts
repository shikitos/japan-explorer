/**
 * Utility function to transform date strings to Date objects.
 * @param data The data to be transformed.
 * @returns Transformed data with date strings converted to Date objects.
 */
export const transformDates = (data: any): any => {
    /**
     * Checks if a given key is a date key.
     * @param key The key to check.
     * @returns True if the key is a date key, false otherwise.
     */
    const isDateKey = (key: string): boolean => ["createdAt", "updatedAt"].includes(key);

    /**
     * Transforms a value if it's a date string.
     * @param value The value to transform.
     * @param key The key of the value.
     * @returns Transformed value with date string converted to Date object if applicable.
     */
    const transform = (value: any, key: string): any => {
        if (typeof value === "string" && isDateKey(key)) {
            const parsedDate = new Date(value);
            if (!isNaN(parsedDate.getTime())) {
                return parsedDate;
            }
        }
        return value;
    };

    /**
     * Transforms an object recursively.
     * @param obj The object to transform.
     * @returns Transformed object with date strings converted to Date objects.
     */
    const transformObject = (obj: Record<string, any>): Record<string, any> => {
        return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, transform(value, key)]));
    };

    if (typeof data === "object" && data !== null) {
        if (Array.isArray(data)) {
            return data.map(transformDates);
        } else {
            return transformObject(data);
        }
    }
    return data;
};
