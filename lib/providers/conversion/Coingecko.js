"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coingecko = void 0;
const ConversionRateProvider_1 = require("./ConversionRateProvider");
const axios_1 = __importDefault(require("axios"));
/**
 * Provides currency rate converstion via CoinGecko API.
 */
class Coingecko {
    /**
     * Translates currency strings from the internal Currency enum to the format that Coingecko requires
     * @param currency
     * @returns The provided currency in a format that Coingecko API recognizes. For instance, {@link Currency.AR} becomes 'arweave'
     */
    static translateCurrency(currency) {
        switch (currency) {
            case ConversionRateProvider_1.Currency.AR:
                return 'arweave';
            case ConversionRateProvider_1.Currency.SOL:
                return 'solana';
            case ConversionRateProvider_1.Currency.USD:
                return 'usd';
            case ConversionRateProvider_1.Currency.EUR:
                return 'eur';
            default:
                throw new Error('Invalid currency supplied to Coingecko conversion rate provider');
        }
    }
    /**
     * Provides conversion rates for each `from` currency into all the provided `to` currencies
     * @param from
     * @param to
     */
    getRate(from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            const fromArray = typeof from === 'string' ? [from] : from;
            const toArray = typeof to === 'string' ? [to] : to;
            const fromIds = fromArray.map((currency) => Coingecko.translateCurrency(currency)).join(',');
            const toIds = toArray.map((currency) => Coingecko.translateCurrency(currency)).join(',');
            const url = `https://api.coingecko.com/api/v3/simple/price?ids=${fromIds}&vs_currencies=${toIds}`;
            const response = yield (0, axios_1.default)(url);
            const data = yield response.data;
            return fromArray.reduce((previousPairs, fromCurrency) => {
                return [
                    ...previousPairs,
                    ...toArray.map((toCurrency) => ({
                        from: fromCurrency,
                        to: toCurrency,
                        rate: data[Coingecko.translateCurrency(fromCurrency)][Coingecko.translateCurrency(toCurrency)],
                    })),
                ];
            }, []);
        });
    }
}
exports.Coingecko = Coingecko;
