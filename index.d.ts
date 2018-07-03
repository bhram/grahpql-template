export interface IOptions {
    values: Object[];
    name: string;
    type: string;
    return?: string[];
}
declare const GTemplage: (obj: IOptions) => string;
export default GTemplage;
