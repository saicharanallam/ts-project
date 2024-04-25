import { PublicKey, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const airdrop = async (address: PublicKey, amount: number) => {
    try {
        console.log(`Starting Airdrop`)
        // const publicKey = new PublicKey(address);
        const conn = new Connection("http://localhost:8899", "confirmed")
        const signature = await conn.requestAirdrop(address, amount * LAMPORTS_PER_SOL)
        // await conn.confirmTransaction(signature)
        const latestBlockHash = await conn.getLatestBlockhash();
        await conn.confirmTransaction({
            blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
            signature: signature,
        });
        console.log(`Airdrop Successful for address ${address}`)
    } catch (error) {
        console.error(error);
    }
}

// airdrop("7zKs8kU68a3QKGBfsiQY8eeYmQc832ymTCchDFs8xR9T", 2)