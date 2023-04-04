// Aim : Deploy a utility EVM contract with a function to retrieve all token balances given a wallet address and the token contract addresses. 


// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface IERC20{                   // To retrieve the balance of an account 
  function balanceOf(address account) external view returns (uint256);
}


contract UtilityContract {
  
  struct Token{                   // To group the address and uint256 datatypes together
    address token;
    uint256 balance;
  }

  function getBalances(address wallet, address[] memory tokenAddress) public view returns (Token[] memory){
    Token[] memory balances = new Token[](tokenAddress.length);     // Contains the token address and its corresponding balance 

    for (uint256 i = 0 ; i < tokenAddress.length ; i++){
      IERC20 token = IERC20 (tokenAddress[i]);          // Creates a new instance of IERC20
      uint256 balance = token.balanceOf(wallet);        // Returns the balance of that token
      balances[i] = Token({token : tokenAddress[i], balance : balance});    // Stores the token address and balance in the expected format
    }
    return balances;
  }
}


/* References: 

Solidity documentation - https://docs.soliditylang.org/en/v0.8.19/ 

Ethereum.org - https://ethereum.org/ig/developers/tutorials/erc20-annotated-code/

*/

