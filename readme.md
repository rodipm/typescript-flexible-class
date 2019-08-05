# Typescript Flexible Class

## Description
    Allows named and optional constructor values with dynamic getters and setters

## Snippet
```typescript
export interface FlexibleClassData {
    // Insert here custom parameters
    // param?: type,
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
```

## Installation
* git clone https://github.com/rodipm/typescript-flexible-class.git
* npm install -g typescript
* cd path/to/project/root
* tsc
* nodemon