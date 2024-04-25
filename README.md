# Solana Blockchain Interaction Script

This script interacts with the Solana blockchain using the `@solana/web3.js` library to perform various actions such as token transfers and airdrops.

## Requirements

- Node.js installed on your machine
- Access to a Solana node (local or remote)
- `@solana/web3.js` library installed (`npm install @solana/web3.js`)

## Usage

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Install Dependencies**: Navigate to the project directory and install dependencies using the following command:

3. **Update Configuration**: Open the `index.ts` file and update the following variables:
- `fromKeyPair`: Set this variable to the secret key of the sender's account.
- `toPublicKey`: Set this variable to the public key of the recipient's account.

4. **Run the Script**: 
- Execute the script using the following command: `solana-test-validator` this will run local blockchain
- In a different terminal `npm run build`, once the project is built run `node dist/transfer-sol/index.js`
- You can try other transfer and airdrop functions directly

## Important Notes

- This script is intended for educational purposes and uses local experimental wallets. It may not work in a production environment.
- Ensure that you have sufficient SOL tokens in the sender's account to cover the transaction fees and transfer amount.
- Verify the Solana node connection details in the script (`http://localhost:8899`). Update it if your node runs on a different URL.

## License

This project is licensed under the [MIT License](LICENSE).
