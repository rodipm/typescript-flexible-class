"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./test");
let test = new test_1.Teste({ param: 111 });
console.log(test.data);
console.log(test['param']);
