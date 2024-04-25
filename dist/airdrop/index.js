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
exports.airdrop = void 0;
const web3_js_1 = require("@solana/web3.js");
const airdrop = (address, amount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`Starting Airdrop`);
        // const publicKey = new PublicKey(address);
        const conn = new web3_js_1.Connection("http://localhost:8899", "confirmed");
        const signature = yield conn.requestAirdrop(address, amount * web3_js_1.LAMPORTS_PER_SOL);
        // await conn.confirmTransaction(signature)
        const latestBlockHash = yield conn.getLatestBlockhash();
        yield conn.confirmTransaction({
            blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
            signature: signature,
        });
        console.log(`Airdrop Successful for address ${address}`);
    }
    catch (error) {
        console.error(error);
    }
});
exports.airdrop = airdrop;
// airdrop("7zKs8kU68a3QKGBfsiQY8eeYmQc832ymTCchDFs8xR9T", 2)
//# sourceMappingURL=index.js.map