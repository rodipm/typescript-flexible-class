export interface FlexibleClassData {
    param?: number
}
export class FlexibleClass {
    constructor(private _data?: FlexibleClassData) {
        for (let key in this._data) {
            Object.defineProperty(this, key, {
                get: () => this._data[key],
                set: (value: any) => {
                    if (this._data[key] !== value)
                        this._data[key] = value;
                }
            });
        }
    }

    public get data() : FlexibleClassData {
        return this._data;
    }
    
    getData(): FlexibleClassData {
        return this.data;
    }
}