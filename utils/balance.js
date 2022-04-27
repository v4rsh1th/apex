import { ethers } from "ethers";

export const walletBalance = (address) => {
  const network = "ropsten";
  const provider = ethers.getDefaultProvider(network);
  provider.getBalance(address).then((balance) => {
    const balanceInEth = ethers.utils.formatEther(balance);
    console.log(`Balance: ${balanceInEth} ETH`);
  });
};