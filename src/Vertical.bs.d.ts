export declare type orientation = "upright" | "rotated";
export declare type chunk = {
    readonly text: string;
    readonly vo: orientation;
    readonly len: number;
};
export declare type tateChuYokoLimit = 2 | 3 | 4;
export declare const vo: (c: number) => orientation;
export declare const splitByVO: (line: string) => chunk[];
export declare const tateChuYoko: (line: string, max: tateChuYokoLimit, openTag: string, closeTag: string) => string;
