import {Connection, PublicKey, Keypair, Transaction, SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction} from "@solana/web3.js"; 
import { airdrop } from "../airdrop";
import { showBalance } from "../show-balance";
export const transferSol = async (from: Keypair, to: PublicKey, amount: number) => {
    console.log("Starting Solana Transfer")
    const connection = new Connection(`http://localhost:8899`, `confirmed`);
    const transaction = new Transaction();
    const instruction = SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: amount * LAMPORTS_PER_SOL
    })
    transaction.add(instruction)
    transaction.add(instruction)
    transaction.add(instruction)
    await sendAndConfirmTransaction(connection, transaction, [from])
    console.log("Done")
}


// These are my local experimental wallets, will not work in prod env
const secret = Uint8Array.from([191,170,103,12,143,200,9,106,216,53,95,124,147,183,200,179,166,178,236,84,107,173,90,202,35,92,57,32,215,197,254,21,174,74,69,14,112,36,196,135,240,179,126,211,61,54,216,31,129,180,174,33,200,74,67,216,29,133,248,130,207,21,94,201]);
const fromKeyPair = Keypair.fromSecretKey(secret);
const toPublicKey = new PublicKey("DPnLkQoJ3XV7inAV734qDWMiaXziWRrexJT1WfNwZC75");

(async()=> {
    await airdrop(fromKeyPair.publicKey, 6);
    const initialBalance = await showBalance(fromKeyPair.publicKey)
    console.log(`##################################################`)
    console.log(`##################################################`)
    console.log(`Inital balance of sending wallet is ${initialBalance}`)
    const initialToBalance = await showBalance(toPublicKey)
    console.log(`Initial balance of receiving wallet is ${initialToBalance}`)
    await transferSol(fromKeyPair, toPublicKey, 2)
    console.log(`##################################################`)
    const afterBalance = await showBalance(fromKeyPair.publicKey)
    console.log(`After balance of sending wallet is ${afterBalance}`)
    const afterToBalance = await showBalance(toPublicKey)
    console.log(`After balance of receiving wallet is ${afterToBalance}`)

})()