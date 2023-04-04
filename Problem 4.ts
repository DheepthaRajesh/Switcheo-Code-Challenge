// Aim : Implement a script to retrieve the specified holders of $SWTH token on the Binance Smart Chain network. //

import {ethers} from "ethers";      //Imports the ethers.js module for interacting with Ethereum and other compatible blockchains //

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");        //Connection to ethereum network //

const address = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

const Abi = ["function balanceOf(address) view returns (uint)"];        //  Get the balance of the token //

const Contract = new ethers.Contract(address, Abi, provider);       

const addresses = ["0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"];


async function display_amount(){                                    // The use of async function and await keyword is to ensure efficiency of the program //
    for (let i=0; i<addresses.length;i++){
        const amount = await provider.getBalance(addresses[i]);     // Retrieves the balance (amount) for each token //
        ethers.utils.formatUnits(amount, 8)                         // Formats the decimal to the correct number of places //
    
        console.log(`${addresses[i]} ${amount}`);
    }
}

display_amount();

/* References: 
  
    Ethers.js documentation - https://docs.ethers.org/v5/getting-started/ 

*/






