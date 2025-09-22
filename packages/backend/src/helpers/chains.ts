const CHAIN_RPC_URLS : Record<number, string> = {
  31337 : "http://localhost:8545",
  11155111 : "https://aged-cool-scion.ethereum-sepolia.quiknode.pro/be58acedb98d22396bfa8a0819a31ee12043746b/",
  421614 : "https://arbitrum-sepolia.gateway.tenderly.co/3vzcutNPfQjuQHWjK2LRoS"
}

export async function getRPCProvider(chainId : number) : Promise<string> {
  return CHAIN_RPC_URLS[chainId]
}