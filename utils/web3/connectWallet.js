import Web3 from "web3";

export default async function connectWallet() {
    // Create a Web3 instance
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8500");

    // Get all of the accounts
    const accounts = await web3.eth.requestAccounts();

    // Return the accounts and web3 instance
    return [
        accounts,
        web3
    ]
}