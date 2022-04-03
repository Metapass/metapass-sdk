"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
// We are keeping an organized enum of all currencies to allow for easier refactoring should
// we decide to change the way that metaplex names currencies internally
var Currency;
(function (Currency) {
    Currency["USD"] = "usd";
    Currency["EUR"] = "eur";
    Currency["AR"] = "ar";
    Currency["SOL"] = "sol";
})(Currency = exports.Currency || (exports.Currency = {}));
