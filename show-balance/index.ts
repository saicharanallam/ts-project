import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
// import { airdrop } from "../airdrop";

export const showBalance = async (publicKey: PublicKey) => {
    const connection = new Connection("http://localhost:8899", "confirmed")
    const response = await connection.getAccountInfo(publicKey)
    return response.lamports / LAMPORTS_PER_SOL
}
// (async () => {
//     console.log(`Checking Balance...`)
//     const pk = "7zKs8kU68a3QKGBfsiQY8eeYmQc832ymTCchDFs8xR9T"
//     const balance = await showBalance(new PublicKey(pk))
//     console.log(`Balance for the key ${pk} is ${balance}`)
//     await airdrop(pk, 3)
//     const updatedbalance = await showBalance(new PublicKey(pk))
//     console.log(`Balance after airdrop on ${pk} is ${updatedbalance}`)
// })()