"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Teste {
    constructor(_data) {
        this._data = _data;
        for (let key in this._data) {
            Object.defineProperty(this, key, {
                get: () => this._data[key],
                set: (value) => {
                    if (this._data[key] !== value)
                        this._data[key] = value;
                }
            });
        }
    }
    get data() {
        return this._data;
    }
    getData() {
        return this.data;
    }
}
exports.Teste = Teste;
