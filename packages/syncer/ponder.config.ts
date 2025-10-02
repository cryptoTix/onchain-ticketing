import { createConfig, rateLimit } from "ponder";
import { MasterABI } from "./abis/masterABI";
import { http } from "viem";

export default createConfig({
  database: {
    kind: 'postgres',
  },
  ordering: "multichain",
  chains: {
    arbitrumSepolia: {
      id: 421614,
      rpc: 'https://arbitrum-sepolia-rpc.publicnode.com',
    },
    sepolia: {
      id : 11155111,
      rpc : rateLimit(http("https://rpc.ankr.com/eth_sepolia/02df353a2a01d60bd5ca91977b81cd2f5cdac4e7d4cd23009c176f789b9391aa"), {
        requestsPerSecond : 1
      })
    }
  },
  contracts: {
    Master: {
      abi: MasterABI,
      chain : {
        arbitrumSepolia : {
          address : "0xDe17fF229E6a9EA25F0C255735258aA07E12739c",
          startBlock : 200522992
        },
        sepolia : {
          address : "0xDe17fF229E6a9EA25F0C255735258aA07E12739c",
          startBlock : 9329605
        }
      }
    },
  },
});
