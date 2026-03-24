/**
 * A type that represents the type of the enum
 * @param T the enum object
 * @returns the type of the enum
 */
export type EnumType<T extends {[key: number | string]: string | number}> = T[keyof T];
