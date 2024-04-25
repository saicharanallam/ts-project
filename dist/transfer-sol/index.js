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
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferSol = void 0;
const web3_js_1 = require("@solana/web3.js");
const airdrop_1 = require("../airdrop");
const show_balance_1 = require("../show-balance");
const transferSol = (from, to, amount) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Starting Solana Transfer");
    const connection = new web3_js_1.Connection(`http://localhost:8899`, `confirmed`);
    const transaction = new web3_js_1.Transaction();
    const instruction = web3_js_1.SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: amount * web3_js_1.LAMPORTS_PER_SOL
    });
    transaction.add(instruction);
    transaction.add(instruction);
    transaction.add(instruction);
    yield (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [from]);
    console.log("Done");
});
exports.transferSol = transferSol;
const secret = Uint8Array.from([191, 170, 103, 12, 143, 200, 9, 106, 216, 53, 95, 124, 147, 183, 200, 179, 166, 178, 236, 84, 107, 173, 90, 202, 35, 92, 57, 32, 215, 197, 254, 21, 174, 74, 69, 14, 112, 36, 196, 135, 240, 179, 126, 211, 61, 54, 216, 31, 129, 180, 174, 33, 200, 74, 67, 216, 29, 133, 248, 130, 207, 21, 94, 201]);
const fromKeyPair = web3_js_1.Keypair.fromSecretKey(secret);
const toPublicKey = new web3_js_1.PublicKey("DPnLkQoJ3XV7inAV734qDWMiaXziWRrexJT1WfNwZC75");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, airdrop_1.airdrop)(fromKeyPair.publicKey, 6);
    const initialBalance = yield (0, show_balance_1.showBalance)(fromKeyPair.publicKey);
    console.log(`##################################################`);
    console.log(`##################################################`);
    console.log(`Inital balance of sending wallet is ${initialBalance}`);
    const initialToBalance = yield (0, show_balance_1.showBalance)(toPublicKey);
    console.log(`Initial balance of receiving wallet is ${initialToBalance}`);
    yield (0, exports.transferSol)(fromKeyPair, toPublicKey, 2);
    console.log(`##################################################`);
    const afterBalance = yield (0, show_balance_1.showBalance)(fromKeyPair.publicKey);
    console.log(`After balance of sending wallet is ${afterBalance}`);
    const afterToBalance = yield (0, show_balance_1.showBalance)(toPublicKey);
    console.log(`After balance of receiving wallet is ${afterToBalance}`);
}))();
//# sourceMappingURL=index.js.map