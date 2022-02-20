export const shortenAddress = (address) => {
  if (!address || !address.length) {
    return;
  }
  return `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;
}