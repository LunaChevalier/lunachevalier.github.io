"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var ingredients_json_1 = __importDefault(require("../src/assets/json/ingredients.json"));
var fs = __importStar(require("fs"));
var body = "# \u30AB\u30EC\u30FC\u5177\u6750\u30AC\u30C1\u30E3\n\n\u5177\u306E\u6570\u3092\u5165\u308C\u3066\u3001\u5177\u6750\u3092\u6C7A\u5B9A\u3059\u308B\u3068\u3001\u5177\u306E\u6570\u3060\u3051\u5177\u6750\u3092\u6C7A\u5B9A\u3057\u3066\u304F\u308C\u307E\u3059  \n\u5B9F\u88C5\u3055\u308C\u3066\u3044\u308B\u5177\u6750\u306F\u4EE5\u4E0B\u306B\u306A\u308A\u307E\u3059\n\ningredients\n\n\u968F\u6642\u8FFD\u52A0\u4E88\u5B9A\n".replace('ingredients', ingredients_json_1["default"].map(function (ingredient) { return "- " + ingredient.name; }).join('\n'));
fs.writeFileSync('README.md', body);
console.log("success README.md generate");
